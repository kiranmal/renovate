import siteImagesData from '../data/siteImages.json';
import serviceImagesData from '../data/serviceImages.json';
import projectsData from '../data/projectsData.json';
import testimonialsData from '../data/testimonialsData.json';
import servicesData from '../data/servicesData.json';

const COLLECTIONS = {
  projects: projectsData,
  testimonials: testimonialsData,
  services: servicesData,
  'site-images': siteImagesData,
  'service-images': serviceImagesData,
};

/**
 * Resolve an image URL — static build, everything is served from the
 * frontend public dir (or absolute URLs pass through).
 */
export function imageUrl(src) {
  if (!src) return '';
  if (/^https?:\/\//i.test(src)) return src;
  return src;
}

/**
 * Return a static content collection (services, projects, testimonials).
 * Same shape as the old API-backed hook so callers don't change.
 */
export function useContent(collection) {
  return { data: COLLECTIONS[collection] || [], loading: false, error: null };
}

/**
 * Static site-images map — every website section's images keyed by
 * section id. Same get/list/loaded/data shape as before.
 */
export function useSiteImages() {
  const data = siteImagesData;
  const get = (key, idx = 0, fallback = '') => {
    const arr = data?.[key];
    return (Array.isArray(arr) && arr[idx] && arr[idx].src) ? arr[idx].src : fallback;
  };
  const list = (key, fallback = []) =>
    (Array.isArray(data?.[key]) && data[key].length) ? data[key] : fallback;

  return { get, list, loaded: true, data };
}

/**
 * Static service-images map ({ slug: { hero, images } }).
 */
export function useServiceImages() {
  return serviceImagesData;
}
