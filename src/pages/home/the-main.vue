<template>
    <div>
        <div class="wrapper">
        <div class="header-content">
            <div class="header-left">
                <div class="header-text-1">
                   {{text1}}
                </div>
                <div class="header-text-2">
                   {{text2}}
                </div>
                <button class="header-btn">See Our Work</button>

            </div>
            <div class="right">
            <img class="header-img" src="/img/computer.png"/>
                <div class="icons">
                    <i class="fas fa-window-minimize fa-2x"></i>
                    <i id="icon-dark" class="fas fa-window-minimize fa-2x"></i>
                    <i id="icon-dark" class="fas fa-window-minimize fa-2x"></i>
                    <i id="icon-dark" class="fas fa-window-minimize fa-2x"></i>
                </div>
            </div>
        </div>
            <div class="cards">
                <div class="card">
                    <div class="card-text">
                    <div class="card-text-1">
                        What I Can All Do
                    </div>
                    <div class="card-text-2">
                        {{text4}}
                    </div>
                    <div class="card-text-3">
                        {{text5}}
                    </div>
                    <img class="divider" src="/img/divider.png">
                    <div class="card-text-4">
                        Read More
                    </div>
                </div>
                </div>
                <div class="card">
                    <div class="card-text">
                        <div class="card-text-1">
                            A Little Bit About Me
                        </div>
                        <div class="card-text-2">
                            {{text4}}
                        </div>
                        <div class="card-text-3">
                            {{text5}}
                        </div>
                        <img class="divider" src="/img/divider.png">
                        <div class="card-text-4">
                            Read More
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-text">
                        <div class="card-text-1">
                            Follow Me on Twitter
                        </div>
                        <div class="card-text-2">
                            {{text4}}
                        </div>
                        <div class="card-text-3">
                            {{text5}}
                        </div>
                        <img class="divider" src="/img/divider.png">
                        <div class="card-text-4">
                            Read More
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-text">
                        <div class="card-text-1">
                            Feel Free To Contact Me
                        </div>
                        <div class="card-text-2">
                            {{text4}}
                        </div>
                        <div class="card-text-3">
                            {{text5}}
                        </div>
                        <img class="divider" src="/img/divider.png">
                        <div class="card-text-4">
                            Read More
                        </div>
                    </div>
                </div>
            </div>
            <div class="work-content">
                <div class="text">
                    Recent Work

                    <div class="icons">
                        <i class="fas fa-window-minimize fa-2x"></i>
                        <i id="icon-dark" class="fas fa-window-minimize fa-2x"></i>
                        <i id="icon-dark" class="fas fa-window-minimize fa-2x"></i>

                    </div>
                </div>

                <img class="line" src="/img/line.png">
                <div class="recent">
                    <div class="text-recent">
                        <div class="text-small">
                            {{text4}}
                        </div>
                        <div class="text-big">
                            {{text5}}
                        </div>
                    </div>
                    <div class="recent-img">
                        <div class="row-1">
                            <img src="/img/img1.png" onmouseover="this.src='img/overlay.png'"  onmouseout="this.src='img/img1.png'">
                            <img src="/img/img2.png" onmouseover="this.src='img/overlay.png'"  onmouseout="this.src='img/img2.png'"/>
                            <img src="/img/img3.png" onmouseover="this.src='img/overlay.png'"  onmouseout="this.src='img/img3.png'">
                        </div>
                        <div class="row-2">
                            <img src="/img/img4.png" onmouseover="this.src='img/overlay.png'"  onmouseout="this.src='img/img4.png'">
                            <img src="/img/img6.png" onmouseover="this.src='img/overlay.png'"  onmouseout="this.src='img/img6.png'"/>
                            <img src="/img/img5.png" onmouseover="this.src='img/overlay.png'"  onmouseout="this.src='img/img5.png'">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import "./home.scss"
    export default {
        name: "the-main",
        data: () =>({
            text1: 'Portfolio Website Theme:\n' +
            '                    Perfect for Anyone',
            text2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. \n' +
            '\n' +
            'Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis.',
            text4: 'Lorem ipsum dolor sit amet, omnis euismod indoctum mel.',
            text5: 'Lorem ipsum dolor sit amet, omnis euismod indoctum mel ei, mel erat ancillae eloquent iam id. Movet facete sea cu, deleniti adipiscing id eum. Mel alia consul constituto ex, no his inani reformidans accommoda re. Et eos viderer appellantur, ferri inimicus an ius, ne inermis deseruisse ius.',

        })
    }
</script>

<style scoped>

</style>