import axios from 'axios';
const API_KEY = import.meta.env.VITE_VUE_APP_BIBLE_API_KEY;
const apiClient = axios.create({
    baseURL: 'https://api.scripture.api.bible/v1',
    headers: {
        'api-key': API_KEY,
    },
});

export default {
    getBibles() {
        return apiClient.get('/bibles');
    },
    getBible(bibleId) {
        return apiClient.get(`/bibles/${bibleId}`);
    },
    getBook(bibleId, bookId) {
        return apiClient.get(`/bibles/${bibleId}/books/${bookId}`);
    },
    getBookChapter(bibleId, chapterId) {
        // return apiClient.get(`/bibles/${bibleId}/chapters/${chapterId}?content-type=json&include-notes=true&include-titles=true&include-chapter-numbers=true&include-verse-numbers=true&include-verse-spans=false`);
        return apiClient.get(`/bibles/${bibleId}/chapters/${chapterId}?content-type=json&include-verse-numbers=true&include-verse-spans=false`);
    },
    getBibleBooks(bibleId) {
        return apiClient.get(`bibles/${bibleId}/books?include-chapters=true&include-chapters-and-sections=true`);
    },
};
