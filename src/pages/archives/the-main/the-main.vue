<template>
    <div>
        <div class="wrapper">
        <div class="all-main">
            <div class="main">
                <div class="article">Archives</div>
                <img src="/img/line.png">
                <div class="text-1">{{ text1 }}</div>


                <div class="main-1">
                    <div class="text-2">
                        <div class="article">Last 25 Posts</div>
                        <li v-for="line in text2">{{ line }}</li>
                    </div>
                    <div class="main-2">
                        <div class="text-3">
                        <div class="article">2012 Archives by Month</div>
                        <li v-for="line in text3">{{ line }}</li>
                        </div>
                        <div class="text-4">
                            <div class="article">Archives by Category</div>
                            <li v-for="line in text4">{{ line }}</li>
                        </div>
                    </div>
                    </div>
                </div>
            <div class="sidebar">
                <div class="article-text">About Portfolio</div>
                <img class="line" src="/img/line2.png">
                <div class="text-1">
                    {{text5}}
                </div>

                <div class="article-text">Categories</div>
                <img class="line" src="/img/line2.png">
                <div class="categories">
                    <li>Video (3)</li>
                    <li>Sports (5)</li>
                    <li>Media (2)</li>
                    <li>Entertainment (7)</li>
                    <li>Life (4)</li>
                    <li>Super Cool Stuff (8)</li>
                </div>
                <div class="article-text">Twitter Widget</div>
                <img class="line" src="/img/line2.png">

                <div class="twitter-text-1">
                    @pixelmater What an awesome design with great functionality :)
                </div>
                <div class="twitter-text-2">
                    about 1 hour ago
                </div>
                <div class="twitter-text-1">
                    @designdude What an awesome design with great functionality :)
                </div>
                <div class="twitter-text-2">
                    about 2 hour ago
                </div>
                <div class="twitter-text-3">
                    Follow @bestpsdfreebies
                </div>
            </div>
        </div>
            </div>
        </div>



</template>

<script>
    import "./the-main.scss"
    export default {
        name: "the-main",
        data: () => ({
            text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Maecenas in magna mollis lectus lacinia mollis.',
            text2: [
                '- Lorem ipsum sem id lectus seid dolor sit amet elit',
                '- Lorem ipsum sem id lectus seid dolor sit amet elit',
                '- Lorem ipsum blandit vitae seid dolor sit',
                '- Lorem ipsum egestas enud',
                '- Lorem ipsum seid dolor sit amet elit',
                '- Lorem ipsum sem id lectus seid',
                '- Lorem ipsum sem id lectus',
                '- Lorem ipsum sem id lectus',
                '- Lorem ipsum sem id seid dolor sit amet elit',
                '- Lorem ipsum sem id lectus seid',
                '- Lorem ipsum sem id lectus seid dolor sit amet elit',
                '- Lorem ipsum sem id lectus seid',
                '- Lorem ipsum sem id',
                '- Lorem ipsum sem id lectus seid seid dolor sit amet',
                '- Lorem ipsum sem id lectus seid',
                '- Lorem ipsum sem id lectus',
                '- Lorem ipsum sem id lectus',
                '- Lorem ipsum sem id seid dolor sit amet elit',
                '- Lorem ipsum sem id lectus seid',
                '- Lorem ipsum sem id lectus seid dolor sit amet elit',
                '- Lorem ipsum sem id lectus seid',
                '- Lorem ipsum sem id',
                '- Lorem ipsum sem id lectus seid seid dolor sit amet',
                '- Lorem ipsum sem id lectus seid'
            ],
            text3: [
                '- January',
                '- February',
                '- March',
                '- April'
            ],
            text4: [
                '- Video',
                '- Sports',
                '- Media',
                '- Entertainment',
                '- Life',
                '- Super Cool Stuff'
            ],
            text5: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praese nt libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elemen tum imperdiet. Duis sagittis ipsum.',



        }),
    }
</script>

<style scoped>

</style>