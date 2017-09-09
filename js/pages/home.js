Vue.component('intro', {
    template: '<h1 class="text-center">{{ getString(\'intro-title\') }}</h1><p>{{ getString(\'intro-description-1\') }}</p> <p>{{ getString(\'intro-description-2') }}</p>
<div class="flex flex--justify-content-end">
    <a class="btn submit-btn" @click="initQuestions()">{{ getString('intro-start') }}</a>
</div>'
})

var survey = new Vue({
    el: '#survey',
    data: {
        dataUrl : '/data.json',
        defaultLang : 'fr',
        currentLang : null,
        languages : ['fr', 'en'],
        dataIsLoaded : false
    },
    created : function () {

        this.initLang();
        this.initData();

    },
    methods : {
        initData : function () {
            $.getJSON(this.dataUrl, function (data) {

                survey.staticStrings = data['static-strings']
                survey.dataIsLoaded = true;

            })
        },
        initLang : function () {

            var localStorageLang = localStorage.getItem('survey-lang');

            if(localStorageLang) {

                this.currentLang = localStorageLang;

            }
            else {

                this.currentLang = this.defaultLang;
                localStorage.setItem('survey-lang', this.currentLang);

            }

        },
        initQuestions : function () {



        },
        setLang : function (lang) {

            survey.currentLang = lang;

        },
        getString : function (stringId) {

            return survey.staticStrings[survey.currentLang][stringId];

        },
    }
});