
<template>
    <div>
    <div class="wrapper">
        <div class="the-main">
        <div class="all-main">
        <div class="article-text">
            About Us
        </div>
        <img src="/img/line.png">
        <div class="text-1">
            {{text1}}
        </div>
        <div class="main-photo">
        <img class="line" src="/img/mike.png">
           <div class="text-2">{{text2}}</div>

        </div>
        <div class="text-3">
            {{text3}}
        </div>
            <div class="text-3">
                {{text4}}
            </div>
        <div class="text-5">
            <i class="fas fa-quote-left"></i>
            {{text5}}
        </div>
        <div class="text-6">
            <div class="text-1-6">
                {{text6}}
            </div>
            <div class="text-1-6">
                {{text6}}
            </div>
        </div>
            <div class="text-6">
                <div class="text-2-6">
                    {{text7}}
                </div>
                <div class="text-2-6">
                    {{text7}}
                </div>
                <div class="text-2-6">
                    {{text7}}
                </div>
            </div>
            <div class="buttons-1">
                <button class="btn-1">Button Text</button>
                <button class="btn-2">Button Text</button>
                <button class="btn-3">Button Text</button>
                <button class="btn-4">Button Text</button>
                <button class="btn-5">Button Text</button>
            </div>
            <div class="buttons-2">
                <button class="btn-6">Button Text</button>
                <button class="btn-7">Button Text</button>
            </div>
        <div class="block-1">
            Alert Text
        </div>
            <div class="block-2">
                Alert Text
            </div>
            <div class="block-3">
                Alert Text
            </div>
            <div class="block-4">
                Alert Text
            </div>
        </div>
            <div class="sidebar">
                <div class="article-text">About Portfolio</div>
                <img class="line" src="/img/line2.png">
             <div class="text-1">
                 {{text8}}
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

    import "./the-main.js"
    import "./the-main.scss"

    export default {
        name: "the-main",

        data: () => ({

            text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Maecenas in magna mollis lectus lacinia mollis.',
            text2: 'Maecenas ipsum metus, semper hendrerit varius mattis, hasr congue sit amet tellus. Aliquam ullamcorper dui sed magna posuere ut elem entum enim rutrum. Nam mi erat, porta idso ultrices nec, pellentesq ue vel nunc. Cras varius fermentum iaculis. Aenean sodales nibh non lectus tempor a interdumni justo ultricies. Sed luctus dui nec ni  sl tem pus faucibus sit amet et sem. Aenean augue sapien, sodales ac bibendum ut, pellentesque id eros. Duis tristique porta aliquam. Curabitur sagittis tincidunt erat, quis hendrerit nibh iaculis vitae. Pellentesque ultricies nisl quis odio posuere facilisis. In ut felis erat, ac laoreet orci. Sed lectus nulla, bibendum at vulputate sit amet, tincidunt volutpat lorem. Maecenas in magna mollis lectus lacinia mollis. Donec sit amet volutpat lorem. Pellentesque ultricies nisl quis odio posuere facilisis. In ut felis erat, ac laoreet orci.  Aenean augue sapien, sodales ac bibendum ut, pellentesque id eros.',
            text3: 'Maecenas ipsum metus, semper hendrerit varius mattis, congue sit amet tellus. Aliquam ullamcorper dui sed magna posuere ut elementum enim rutrum. Nam mi erat, porta id ultrices nec, pellentesque vel nunc. Cras varius fermentum iaculis. Aenean sodales nibh non lectus tempor a interdum justo ultricies. Sed luctus dui nec nisl tempus faucibus sit amet et sem. Aenean augue sapien, sodales ac bibendum ut, pellentesque id eros.\n' +
            '\n' +
            'Quisque mollis, sem id laoreet pretium, lectus elit molestie urna, id tristique risus ante at est. Sed pretium metus sit amet erat blandit vitae pulvinar lorem egestas. Sed lectus nulla, bibendum at vulputate sit amet, tincidunt volutpat lorem. Maecenas in magna mollis lectus lacinia mollis. Donec sit amet volutpat lorem. Duis tristique porta aliquam. Curabitur sagittis tincidunt erat, quis hendrerit nibh iaculis vitae.',
            text4: 'Dquisque mollis, sem id laoreet pretium, lectus elit molestie urna, id tristique risus ante at est. Sed pretium metus sit           \t         amet erat blandit vitae pulvinar lorem egestas. Sed lectus nulla, bibendum at vulputate sit amet, tincidunt volutpat lorem. Maecenas in magna mollis lectus lacinia mollis. Donec sit amet volutpat lorem. Duis tristique porta aliquam. Curabitur sagittis tincidunt erat, quis hendrerit nibh iaculis vitae. Pellentesque ultricies nisl quis odio posuere facilisis. In ut felis erat, ac laoreet orci.',
            text5: 'Quisque mollis, sem id laoreet pretium, lectus elit molestie urna, id tristique risus ante at est. Sed pretium metus sit amet erat blandit vitae pulvinar lorem egestas. Sed lectus nulla, bibendum at vulputate sit amet, tincidunt volutpat lorem. Mae trenas in magna mollis lectus lacinia mollis. Donec sit amet volutpat lorem. Du tristique porta aliquam. Curabitur sagittis tincidunt erat, quis hendrerit nibh iaculis vitae. Pellentesque ultric nisl quis odio posuere facilisis. In ut felis erat, ac laoreet orci donec sed nulla at sit amet.',
            text6: 'Quisque mollis, sem id laoreet pretium, lectus elit molestie urna, id tristique risus ante at est. Sed pretium metus sit amet erat blandit vitae pulvinar lorem egestas. Sed lectus nulla, bibendum at vulputate sit amet, tincidunt volutpat lorem.',
            text7: 'Quisque mollis, sem id laoreet pretium, lectus elit molestie urna, id tristique risus ante at est. Sed pretium metus sit amet erat blandit vitae pulvinar lorem egestas.',
            text8: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praese nt libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elemen tum imperdiet. Duis sagittis ipsum.',
        }),

    }
</script>

<style scoped>

</style>