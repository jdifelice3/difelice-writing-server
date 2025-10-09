import { Work, Form, SubType, Genre } from '@johndifelice/types';
import { Works } from '../data/works.js';

export const getWorks = (): Work[] => {
    const results: Work [] = Works;
    return results;
} 