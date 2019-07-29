import React, { Fragment, useEffect, useRef, useState } from 'react'

import Layout from '../components/Layout'
import PagePosition from '../components/PagePosition'

import styles from './blog.module.scss'

export default function BlogPage() {
  const trackedElementRef = useRef(null)
  const [offsetHeightState, setOffsetHeight] = useState(0)
  const [scrollHeightState, setScrollHeight] = useState(0)
  const [scrollTopState, setScrollTop] = useState(0)

  const onScroll = () => {
    if (!(trackedElementRef && trackedElementRef.current)) {
      return
    }

    const { offsetHeight, scrollHeight, scrollTop } = trackedElementRef.current
    const {
      screen: { availHeight },
      scrollY,
    } = window

    let calculatedOffsetHeight = offsetHeight
    let calculatedScrollHeight = scrollHeight
    let calculatedScrollTop = scrollTop

    if (scrollHeight >= availHeight) {
      calculatedOffsetHeight = 0
      calculatedScrollHeight = scrollHeight
      calculatedScrollTop = scrollY
    }

    setOffsetHeight(calculatedOffsetHeight)
    setScrollHeight(calculatedScrollHeight)
    setScrollTop(calculatedScrollTop)
  }

  useEffect(() => {
    // if (trackedElementRef) {
    //   trackedElementRef.current.addEventListener('scroll', onScroll)
    // }

    // return () => {
    //   if (trackedElementRef) {
    //     trackedElementRef.current.removeEventListener('scroll', onScroll)
    //   }
    // }
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  })

  return (
    <Fragment>
      <PagePosition
        trackedElement={{
          offsetHeight: offsetHeightState,
          scrollHeight: scrollHeightState,
          scrollTop: scrollTopState,
        }}
      />
      <Layout>
        <div className={styles.BlogPage}>
          <section>
            <article ref={trackedElementRef}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lacus sed viverra tellus in. Iaculis at erat pellentesque
                adipiscing commodo elit at imperdiet dui. Dignissim suspendisse
                in est ante in nibh mauris cursus mattis. Consequat semper
                viverra nam libero. Massa tincidunt dui ut ornare lectus sit. Eu
                non diam phasellus vestibulum lorem. Euismod lacinia at quis
                risus sed. Ullamcorper sit amet risus nullam eget felis eget
                nunc. Pretium quam vulputate dignissim suspendisse in.
                Vestibulum sed arcu non odio euismod lacinia at quis risus.
                Egestas quis ipsum suspendisse ultrices. Posuere urna nec
                tincidunt praesent semper feugiat.
              </p>
              <p>
                Vulputate eu scelerisque felis imperdiet proin fermentum. Id
                diam maecenas ultricies mi eget mauris pharetra et ultrices.
                Vestibulum mattis ullamcorper velit sed ullamcorper morbi
                tincidunt. Eget est lorem ipsum dolor sit amet consectetur
                adipiscing elit. Lectus quam id leo in vitae turpis massa sed.
                Facilisi etiam dignissim diam quis enim. Non diam phasellus
                vestibulum lorem sed risus. Nulla malesuada pellentesque elit
                eget gravida cum sociis natoque penatibus. Eu mi bibendum neque
                egestas congue quisque egestas. Eu volutpat odio facilisis
                mauris sit amet. Interdum varius sit amet mattis vulputate enim
                nulla. Dui id ornare arcu odio ut sem nulla.
              </p>
              <p>
                Aenean sed adipiscing diam donec. Sit amet volutpat consequat
                mauris nunc congue nisi vitae suscipit. At varius vel pharetra
                vel. Porta non pulvinar neque laoreet suspendisse. Aenean
                euismod elementum nisi quis eleifend quam. At quis risus sed
                vulputate odio ut enim. Volutpat ac tincidunt vitae semper quis
                lectus nulla. Egestas integer eget aliquet nibh. Nulla at
                volutpat diam ut venenatis tellus in metus. Fringilla urna
                porttitor rhoncus dolor. Duis tristique sollicitudin nibh sit
                amet commodo. Dignissim enim sit amet venenatis urna cursus
                eget. Urna id volutpat lacus laoreet non curabitur.
              </p>
              <p>
                Magna etiam tempor orci eu lobortis elementum nibh. Semper eget
                duis at tellus. Dictum sit amet justo donec enim diam vulputate.
                Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla
                facilisi. Eu volutpat odio facilisis mauris sit amet massa vitae
                tortor. Amet volutpat consequat mauris nunc. Elementum pulvinar
                etiam non quam. Eu scelerisque felis imperdiet proin fermentum.
                Amet mauris commodo quis imperdiet massa. Lacus vestibulum sed
                arcu non odio euismod lacinia. Amet volutpat consequat mauris
                nunc congue nisi vitae suscipit. Nam at lectus urna duis
                convallis convallis tellus id. Lacinia quis vel eros donec ac
                odio tempor. Quis varius quam quisque id diam vel. Arcu dui
                vivamus arcu felis bibendum ut tristique. Senectus et netus et
                malesuada fames ac. Dignissim cras tincidunt lobortis feugiat
                vivamus at augue. Quam quisque id diam vel quam elementum.
              </p>
              <p>
                Lectus arcu bibendum at varius vel pharetra vel turpis nunc. At
                auctor urna nunc id. Mi quis hendrerit dolor magna eget est
                lorem ipsum dolor. Pellentesque sit amet porttitor eget dolor
                morbi non arcu risus. Facilisis volutpat est velit egestas dui
                id ornare arcu odio. Fames ac turpis egestas sed. Eros in cursus
                turpis massa tincidunt dui ut. Nisl pretium fusce id velit ut
                tortor pretium viverra suspendisse. Amet justo donec enim diam
                vulputate ut pharetra. Est ultricies integer quis auctor elit
                sed vulputate mi sit. Quam pellentesque nec nam aliquam sem et
                tortor consequat id. Ut lectus arcu bibendum at varius vel.
                Turpis massa sed elementum tempus egestas. In cursus turpis
                massa tincidunt dui ut. Mauris in aliquam sem fringilla ut
                morbi. Nunc mi ipsum faucibus vitae. Venenatis tellus in metus
                vulputate eu scelerisque felis imperdiet. Lectus proin nibh nisl
                condimentum id. Lobortis mattis aliquam faucibus purus.
                Tristique senectus et netus et malesuada fames ac turpis.
              </p>
              <p>
                Enim diam vulputate ut pharetra sit amet aliquam id. Nunc
                aliquet bibendum enim facilisis gravida neque convallis a.
                Lectus quam id leo in vitae turpis massa sed. Amet consectetur
                adipiscing elit duis tristique sollicitudin nibh sit. Libero
                justo laoreet sit amet cursus sit amet. Odio euismod lacinia at
                quis. Tempus imperdiet nulla malesuada pellentesque elit eget.
                Ut faucibus pulvinar elementum integer enim neque. Nulla
                pharetra diam sit amet nisl suscipit. Erat imperdiet sed euismod
                nisi porta lorem mollis aliquam ut. Mollis nunc sed id semper.
                Platea dictumst vestibulum rhoncus est pellentesque elit
                ullamcorper. Sem integer vitae justo eget magna fermentum
                iaculis eu. Pharetra diam sit amet nisl. Dictum fusce ut
                placerat orci. Montes nascetur ridiculus mus mauris vitae. Metus
                dictum at tempor commodo ullamcorper a lacus vestibulum. Enim
                nunc faucibus a pellentesque sit amet porttitor. Nunc mi ipsum
                faucibus vitae aliquet nec ullamcorper sit. Est velit egestas
                dui id.
              </p>
              <p>
                Amet mattis vulputate enim nulla aliquet porttitor lacus luctus
                accumsan. Quis auctor elit sed vulputate mi sit amet. Sapien
                pellentesque habitant morbi tristique senectus et netus et
                malesuada. Tempor orci eu lobortis elementum nibh tellus
                molestie. Iaculis urna id volutpat lacus. Semper quis lectus
                nulla at volutpat diam ut. Tempor orci dapibus ultrices in
                iaculis nunc sed. Placerat vestibulum lectus mauris ultrices.
                Adipiscing diam donec adipiscing tristique risus. Tempus egestas
                sed sed risus pretium quam vulputate. Gravida arcu ac tortor
                dignissim convallis aenean. Porta lorem mollis aliquam ut
                porttitor. Vitae auctor eu augue ut lectus arcu bibendum. Morbi
                tincidunt ornare massa eget egestas purus viverra.
              </p>
              <p>
                Phasellus faucibus scelerisque eleifend donec pretium vulputate
                sapien nec. Montes nascetur ridiculus mus mauris. Magnis dis
                parturient montes nascetur ridiculus. Varius morbi enim nunc
                faucibus. Ac tincidunt vitae semper quis lectus nulla at.
                Aliquam vestibulum morbi blandit cursus risus at ultrices mi
                tempus. Sollicitudin aliquam ultrices sagittis orci a
                scelerisque purus semper eget. Tristique risus nec feugiat in
                fermentum posuere urna nec tincidunt. Dolor sit amet consectetur
                adipiscing elit pellentesque. Magna fermentum iaculis eu non.
              </p>
              <p>
                Nulla aliquet enim tortor at auctor urna nunc id cursus. Luctus
                venenatis lectus magna fringilla urna porttitor rhoncus. Gravida
                neque convallis a cras semper. Aliquet nec ullamcorper sit amet
                risus nullam eget felis. Eros donec ac odio tempor orci.
                Adipiscing bibendum est ultricies integer quis. Et malesuada
                fames ac turpis egestas. Convallis posuere morbi leo urna
                molestie at elementum. Fames ac turpis egestas integer eget
                aliquet nibh praesent tristique. Viverra orci sagittis eu
                volutpat odio facilisis mauris sit. Feugiat in ante metus dictum
                at tempor. Et malesuada fames ac turpis egestas maecenas.
              </p>
              <p>
                Amet nulla facilisi morbi tempus iaculis urna id volutpat lacus.
                Mollis nunc sed id semper risus. Ut tellus elementum sagittis
                vitae et leo duis ut. Eget arcu dictum varius duis at
                consectetur lorem donec massa. Tempor nec feugiat nisl pretium
                fusce. Aliquet lectus proin nibh nisl. Velit aliquet sagittis id
                consectetur purus ut. Gravida rutrum quisque non tellus.
                Tristique senectus et netus et malesuada fames ac turpis.
                Fermentum iaculis eu non diam phasellus vestibulum lorem.
              </p>
              <p>
                Duis tristique sollicitudin nibh sit amet commodo nulla
                facilisi. Consequat semper viverra nam libero justo laoreet.
                Aliquet enim tortor at auctor. Venenatis lectus magna fringilla
                urna porttitor rhoncus. Fermentum leo vel orci porta non
                pulvinar neque laoreet suspendisse. Sed faucibus turpis in eu mi
                bibendum. Interdum consectetur libero id faucibus. Quis lectus
                nulla at volutpat diam ut venenatis tellus. Feugiat in ante
                metus dictum at tempor. Vitae congue mauris rhoncus aenean vel
                elit. Aliquet sagittis id consectetur purus ut faucibus pulvinar
                elementum integer. In hac habitasse platea dictumst vestibulum
                rhoncus. Sed viverra ipsum nunc aliquet bibendum enim facilisis
                gravida. Ipsum dolor sit amet consectetur adipiscing elit.
                Commodo viverra maecenas accumsan lacus vel facilisis volutpat
                est. Auctor neque vitae tempus quam pellentesque.
              </p>
              <p>
                Ac ut consequat semper viverra nam libero justo laoreet sit. At
                imperdiet dui accumsan sit amet nulla facilisi morbi tempus. In
                vitae turpis massa sed elementum tempus egestas sed. Dignissim
                diam quis enim lobortis. Eleifend mi in nulla posuere. Lectus
                sit amet est placerat in egestas. Leo urna molestie at elementum
                eu facilisis sed. Ullamcorper malesuada proin libero nunc
                consequat interdum varius. Quis ipsum suspendisse ultrices
                gravida dictum fusce. Lorem donec massa sapien faucibus et
                molestie ac. In dictum non consectetur a erat nam at.
              </p>
              <p>
                Ipsum nunc aliquet bibendum enim facilisis gravida neque
                convallis a. Eu sem integer vitae justo eget. Tortor condimentum
                lacinia quis vel eros. Urna molestie at elementum eu facilisis.
                Lacus suspendisse faucibus interdum posuere lorem. Quis ipsum
                suspendisse ultrices gravida dictum fusce ut. Nisi lacus sed
                viverra tellus in hac habitasse platea. Arcu ac tortor dignissim
                convallis. Dictum fusce ut placerat orci. In hac habitasse
                platea dictumst quisque sagittis purus sit. Integer malesuada
                nunc vel risus commodo viverra. Enim diam vulputate ut pharetra
                sit amet. Non quam lacus suspendisse faucibus interdum posuere.
                Non odio euismod lacinia at quis risus sed vulputate.
                Pellentesque habitant morbi tristique senectus. Tincidunt augue
                interdum velit euismod.
              </p>
              <p>
                Vulputate ut pharetra sit amet. Augue ut lectus arcu bibendum.
                Sed turpis tincidunt id aliquet risus feugiat in ante. Commodo
                nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Vitae
                elementum curabitur vitae nunc sed. Tempus egestas sed sed risus
                pretium. Elit pellentesque habitant morbi tristique senectus.
                Imperdiet nulla malesuada pellentesque elit. Fames ac turpis
                egestas maecenas pharetra. Purus faucibus ornare suspendisse sed
                nisi lacus. Ac turpis egestas maecenas pharetra convallis
                posuere morbi leo urna.
              </p>
              <p>
                Tellus mauris a diam maecenas. In hac habitasse platea dictumst
                quisque sagittis purus. Amet purus gravida quis blandit turpis
                cursus in. Odio ut sem nulla pharetra. Volutpat maecenas
                volutpat blandit aliquam. Dictum fusce ut placerat orci nulla.
                Gravida rutrum quisque non tellus orci ac auctor augue mauris.
                Dignissim diam quis enim lobortis scelerisque fermentum.
                Ultrices sagittis orci a scelerisque. Quam pellentesque nec nam
                aliquam sem et tortor consequat. Feugiat in fermentum posuere
                urna nec tincidunt. Egestas sed tempus urna et pharetra
                pharetra. Lacus vestibulum sed arcu non odio.
              </p>
              <p>
                Eu facilisis sed odio morbi quis. Lectus nulla at volutpat diam
                ut venenatis. Pharetra pharetra massa massa ultricies mi.
                Phasellus vestibulum lorem sed risus ultricies tristique. Morbi
                tristique senectus et netus et malesuada fames ac. In aliquam
                sem fringilla ut morbi tincidunt augue. Nunc mi ipsum faucibus
                vitae aliquet. Hac habitasse platea dictumst vestibulum rhoncus
                est pellentesque. Ante metus dictum at tempor commodo
                ullamcorper a lacus. Gravida neque convallis a cras semper
                auctor neque vitae. Eget dolor morbi non arcu risus quis varius.
                Arcu vitae elementum curabitur vitae nunc sed velit dignissim.
                Leo a diam sollicitudin tempor id. Nulla pharetra diam sit amet
                nisl suscipit adipiscing bibendum est. Amet porttitor eget dolor
                morbi non arcu risus quis varius.
              </p>
              <p>
                Amet risus nullam eget felis eget nunc lobortis mattis aliquam.
                Lorem sed risus ultricies tristique nulla aliquet enim. Egestas
                tellus rutrum tellus pellentesque eu tincidunt tortor aliquam.
                Dignissim sodales ut eu sem integer vitae justo eget magna. In
                iaculis nunc sed augue lacus viverra vitae congue eu. Gravida
                dictum fusce ut placerat orci nulla pellentesque dignissim.
                Viverra nibh cras pulvinar mattis nunc. Posuere sollicitudin
                aliquam ultrices sagittis orci a scelerisque purus semper. Ut
                etiam sit amet nisl purus in. Adipiscing bibendum est ultricies
                integer quis. Dolor sed viverra ipsum nunc aliquet bibendum enim
                facilisis.
              </p>
              <p>
                Urna porttitor rhoncus dolor purus non enim praesent. Vitae
                sapien pellentesque habitant morbi. Lectus mauris ultrices eros
                in cursus turpis massa tincidunt. Arcu cursus euismod quis
                viverra nibh cras pulvinar mattis. Tellus integer feugiat
                scelerisque varius morbi enim nunc. Pretium lectus quam id leo
                in vitae turpis massa. Aliquet eget sit amet tellus cras
                adipiscing. Neque vitae tempus quam pellentesque nec nam aliquam
                sem et. Elementum eu facilisis sed odio morbi quis commodo odio
                aenean. At augue eget arcu dictum varius duis at. Faucibus in
                ornare quam viverra orci sagittis eu volutpat.
              </p>
              <p>
                At in tellus integer feugiat scelerisque varius morbi enim nunc.
                Libero justo laoreet sit amet cursus sit amet dictum. Morbi
                tincidunt augue interdum velit euismod in pellentesque massa.
                Vitae turpis massa sed elementum. Ullamcorper sit amet risus
                nullam eget. Enim sit amet venenatis urna cursus eget nunc
                scelerisque. Curabitur gravida arcu ac tortor dignissim
                convallis aenean. Bibendum arcu vitae elementum curabitur vitae
                nunc sed velit. Libero id faucibus nisl tincidunt eget. Magna
                fermentum iaculis eu non diam phasellus. Aenean pharetra magna
                ac placerat. Amet mauris commodo quis imperdiet massa. Id
                interdum velit laoreet id donec ultrices tincidunt arcu non.
              </p>
              <p>
                Tincidunt vitae semper quis lectus nulla at. Convallis a cras
                semper auctor neque vitae tempus. Condimentum vitae sapien
                pellentesque habitant morbi tristique senectus et netus.
                Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo.
                Nec dui nunc mattis enim ut tellus. Turpis egestas pretium
                aenean pharetra magna ac placerat vestibulum lectus. Malesuada
                nunc vel risus commodo. Etiam sit amet nisl purus in mollis nunc
                sed id. Euismod nisi porta lorem mollis aliquam ut. Mi ipsum
                faucibus vitae aliquet nec ullamcorper. At erat pellentesque
                adipiscing commodo elit at imperdiet dui accumsan. Semper
                viverra nam libero justo laoreet. Faucibus scelerisque eleifend
                donec pretium vulputate sapien nec. Accumsan tortor posuere ac
                ut consequat. Urna nec tincidunt praesent semper feugiat nibh
                sed pulvinar.
              </p>
              <p>
                A erat nam at lectus urna duis. Purus faucibus ornare
                suspendisse sed nisi lacus sed. Pulvinar pellentesque habitant
                morbi tristique. Faucibus pulvinar elementum integer enim neque
                volutpat ac tincidunt. Arcu felis bibendum ut tristique et
                egestas quis ipsum suspendisse. Duis ut diam quam nulla
                porttitor massa id. Pharetra massa massa ultricies mi quis
                hendrerit dolor magna. Neque convallis a cras semper auctor
                neque vitae. Dictumst quisque sagittis purus sit. Laoreet sit
                amet cursus sit amet dictum sit amet justo.
              </p>
              <p>
                Tempus quam pellentesque nec nam aliquam. Sit amet consectetur
                adipiscing elit pellentesque habitant. Turpis egestas sed tempus
                urna et pharetra pharetra massa. Vulputate enim nulla aliquet
                porttitor lacus. Orci sagittis eu volutpat odio facilisis mauris
                sit amet. Imperdiet proin fermentum leo vel orci porta non
                pulvinar. Urna et pharetra pharetra massa massa ultricies mi.
                Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus.
                Rhoncus mattis rhoncus urna neque viverra. Adipiscing diam donec
                adipiscing tristique risus nec feugiat in fermentum. Aliquet nec
                ullamcorper sit amet risus nullam eget. Tellus pellentesque eu
                tincidunt tortor aliquam nulla facilisi cras fermentum. Et odio
                pellentesque diam volutpat. Ornare arcu odio ut sem. Elementum
                sagittis vitae et leo duis ut diam quam nulla.
              </p>
              <p>
                Sollicitudin aliquam ultrices sagittis orci a scelerisque purus
                semper eget. Sed ullamcorper morbi tincidunt ornare. Dui sapien
                eget mi proin sed libero enim sed faucibus. Vel fringilla est
                ullamcorper eget nulla facilisi etiam dignissim. Sit amet
                volutpat consequat mauris nunc congue nisi vitae. Quam nulla
                porttitor massa id. Suspendisse ultrices gravida dictum fusce ut
                placerat orci nulla pellentesque. Nec dui nunc mattis enim ut
                tellus elementum sagittis vitae. Donec ac odio tempor orci
                dapibus ultrices in. Consequat ac felis donec et odio. Viverra
                accumsan in nisl nisi scelerisque eu. Facilisis sed odio morbi
                quis commodo odio aenean sed. Nunc sed id semper risus.
              </p>
              <p>
                Mauris cursus mattis molestie a iaculis at. Consequat id porta
                nibh venenatis cras sed felis eget. Sapien nec sagittis aliquam
                malesuada. Ac turpis egestas integer eget aliquet nibh praesent.
                Quam adipiscing vitae proin sagittis nisl rhoncus. Viverra
                aliquet eget sit amet tellus cras adipiscing enim eu. Dolor sed
                viverra ipsum nunc aliquet. Fermentum posuere urna nec tincidunt
                praesent semper feugiat nibh. Dolor morbi non arcu risus.
                Phasellus egestas tellus rutrum tellus. Consectetur lorem donec
                massa sapien faucibus. Velit laoreet id donec ultrices. Nunc
                eget lorem dolor sed viverra ipsum nunc aliquet.
              </p>
              <p>
                Posuere morbi leo urna molestie at elementum eu facilisis sed.
                Integer vitae justo eget magna fermentum iaculis. Sit amet
                commodo nulla facilisi nullam vehicula. Vehicula ipsum a arcu
                cursus. Nisl condimentum id venenatis a condimentum vitae sapien
                pellentesque. Eu augue ut lectus arcu bibendum at. Pellentesque
                elit eget gravida cum sociis natoque penatibus et magnis.
                Dapibus ultrices in iaculis nunc sed augue. Quisque egestas diam
                in arcu cursus. Ipsum faucibus vitae aliquet nec ullamcorper sit
                amet risus nullam. Etiam erat velit scelerisque in dictum non
                consectetur. Rhoncus dolor purus non enim praesent elementum
                facilisis leo. Nulla porttitor massa id neque aliquam. Amet
                volutpat consequat mauris nunc. Mi quis hendrerit dolor magna.
                Risus commodo viverra maecenas accumsan. Elementum curabitur
                vitae nunc sed velit dignissim. Sit amet est placerat in
                egestas. Purus non enim praesent elementum facilisis leo vel.
                Tristique nulla aliquet enim tortor.
              </p>
            </article>
          </section>
        </div>
      </Layout>
    </Fragment>
  )
}
