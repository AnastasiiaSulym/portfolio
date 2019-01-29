<template>
    <div>
        <div class="wrapper">
            <div class="all-contact">
                <div class="contact">
                    <div class="article">Contact us</div>
                    <img class="line" src="/img/line.png">
                    <div class="text-contact-1">{{ text1 }}</div>
                    <div class="input">
                        <input class="small" type="text" placeholder="First Name" />
                        <input class="small" type="text" placeholder="Last Name" />
                        <input class="small" type="text" placeholder="Email Address" />
                        <input class="big" type="text" placeholder="Message" />
                    </div>
                    <button class="input-btn" type="submit">Send</button>
                </div>
                <div class="sidebar">
                    <div class="article-text">About Portfolio</div>
                    <img class="line" src="/img/line2.png">
                    <div class="text-1">
                        {{text2}}
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
    import "./contact.scss"
    export default {
        name: "the-main",

        data: () => ({
         text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.Maecenas ipsum metus, semper hendrerit varius mattis, congue sit amet tellus. Aliquam ullamcorper dui sed magna posue re ut elementum enim rutrum. Nam mi erat, porta id ultrices nec, pellentesque vel nunc. Cras varius fermentum iaculis. Aenean sodales nibh non lectus tempor a interdum justo ultricies. Sed luctus dui nec nisl tempus faucibus sit amet et sem. Aenean augue sapien, sodales ac bibendum ut, pellentesque id eros.',
         text2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praese nt libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elemen tum imperdiet. Duis sagittis ipsum.'

    })
    }
</script>

<style scoped>

</style>