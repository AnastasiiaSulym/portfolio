<template>
    <div>
    <div class="wrapper">

        <div class="footer">
            <div class="footer-text">
                <div class="footer-article">About Porftolio</div>
                <hr class="footer-hr" />
                <div class="footer-text-2">
                    {{ text1}}
                </div>
            </div>
            <div class="footer-text-3">
                <div class="footer-article-2">Recent Posts</div>
                <hr class="footer-hr" />
                <div class="footer-text-4">
                    {{ text2 }}
                </div>
                <div class="footer-text-4">
                    {{ text3 }}
                </div>
                <div class="footer-text-4">
                    {{ text4 }}
                </div>
                <div class="footer-text-4">
                    {{ text5 }}
                </div>
            </div>
            <div class="footer-text-3">
                <div class="footer-article-2">Twitter Widget</div>
                <hr class="footer-hr" />
                <div class="twitter-text-1">
                   {{ text6}}
                </div>
                <div class="twitter-text-2">
                    {{ text7}}
                </div>
                <div class="twitter-text-1">
                    {{ text8}}
                </div>
                <div class="twitter-text-2">
                   {{ text9}}
                </div>
                <div class="twitter-text-3">
                    {{ text10 }}
                </div>
            </div>
            <div class="footer-text-3">
                <div class="footer-article-2">Flickr Widget</div>
                <hr class="footer-hr" />
                <div class="square-line-1">
                    <img v-bind:src="url" /> <img v-bind:src="url" />
                    <img v-bind:src="url" /> <img v-bind:src="url" />
                </div>
                <div class="square-line-1">
                    <img v-bind:src="url" /> <img v-bind:src="url" />
                    <img v-bind:src="url" /> <img v-bind:src="url" />
                </div>
            </div>

        </div>
        <div class="footer-bottom">
            <img v-bind:src="url2" />
            <div class="bottom-text-1">
            <div class="text-1">
                {{text11}}
            </div>
            <div class="text-2">
                {{text12}}
            </div>
        </div>
            <div class="bottom-text-1">
                <div class="text-3">
                    {{text13}}
                </div>
                <div class="text-4">
                    {{text14}}
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    import "./my-footer.scss"
    export default {
        name: "my-footer",
        data: () => ({
            text1: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, persinioa inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. \n' +
            '\n' +
            'Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis.',
            text2:'Yastech Developments: The Best Web Design Company',
            text3:'Best PSD Freebies: Amazing Design Resource & Inspiration',
            text4:'Best PSD Freebies: Login Form',
            text5: 'Wedding Photography Shoot Takes & Tricks',
            text6:'@pixelmater What an awesome design with great functionality :)',
            text7: 'about 1 hour ago',
            text8: '@designdude What an awesome design with great functionality :)',
            text9: '"about 2 hour ago' ,
            text10: 'Follow @bestpsdfreebies',
            url: '/img/square.png',
            url2: '/img/footer-logo.png',
            text11:'The Ultimate Portfolio  Wordpress Theme on the Web',
            text12: 't: (888) 842 - 8356  e: info@bestpsdfreebies.com',
            text13: 'Copyright 2012. Powered by Wordpress',
            text14: 'Portfolio Theme by Best PSD Freebies',

        })
    }

</script>

<style scoped>

</style>