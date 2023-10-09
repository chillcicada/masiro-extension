import { fileSaver } from 'file-saver';


// get cover of novel
const getCover = (): string => {
  return document.querySelector('.novel-cover img')?.getAttribute('src') || '';
}

// get title of novel
const getTitle = (): string => {
  return document.querySelector('.novel-title')?.textContent || '';
}

// get meta of novel
const getMeta = (): string => {
  // TODO
}

// get introduction of novel
const getIntro = (): string => {
  return document.querySelector('.brief')?.textContent || '';
}

// get chapter list of novel
