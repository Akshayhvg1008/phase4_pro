export class QuizConfig {
    allowBack: boolean;
    allowReview: boolean;
    autoMove: boolean;  
    pageSize: number;
    requiredAll: boolean; 
    richText: boolean;
    shuffleQuestions: boolean;
    shuffleOptions: boolean;
    showPager: boolean;
    theme: string;

    constructor(data: any) {
        data = data || {};
        this.allowBack = data.allowBack;
        this.allowReview = data.allowReview;
        this.autoMove = data.autoMove;
        this.pageSize = data.pageSize;
        this.requiredAll = data.requiredAll;
        this.richText = data.richText;
        this.shuffleQuestions = data.shuffleQuestions;
        this.shuffleOptions = data.shuffleOptions;
        this.showPager = data.showPager;
    }
}
