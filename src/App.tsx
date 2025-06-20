import './App.css'

function App() {


  return (
    <div>
        <h1>Newspaper Title</h1>
        <div className="time">
          <time dateTime="2021-09-07">
            Tuesday, 5<sup>th</sup> September 2021
          </time>
        </div>
        <article>
          <h2>Article heading</h2>
          <div className="author">John Doe</div>
          <p>
            Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis
            dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac
            facilisis in, egestas eget quam. Sed posuere consectetur est at lobortis.
            Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus
            porttitor.
          </p>
          <p>
            Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
            Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis
            dis parturient montes, nascetur ridiculus mus. Vivamus sagittis lacus vel
            augue laoreet rutrum faucibus dolor auctor. Aenean eu leo quam.
            Pellentesque ornare sem lacinia quam venenatis vestibulum.
            there is a some internal usaage
          </p>
          <blockquote>
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
            ut fermentum massa justo sit amet risus.
          </blockquote>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Duis mollis, est non
            commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
            elit. Donec id elit non mi porta gravida at eget metus. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Cras mattis consectetur purus
            sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit.
            Cras mattis consectetur purus sit amet fermentum.
          </p>
          <h3>Subheading</h3>
          <ul>
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
          </ul>
          <p>
            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus
            et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia
            bibendum nulla sed consectetur.
          </p>
          <p>
            Donec ullamcorper nulla non metus auctor fringilla. Aenean eu leo quam.
            Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia
            bibendum nulla sed consectetur. Aenean lacinia bibendum nulla sed
            consectetur.
          </p>
          <h3>Subheading</h3>
          <figure>
            <img
                src="https://raw.githubusercontent.com/michaelgearon/Tiny-CSS-Projects/main/chapter-04/after/image.jpg"
                alt=""
                onerror="this.style.display='none'"
            />
            <figcaption>Golden Gate Bridge</figcaption>
          </figure>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean
            eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
            Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum
            nulla sed consectetur. Integer posuere erat a ante venenatis dapibus
            posuere velit aliquet. Aenean eu leo quam. Pellentesque ornare sem lacinia
            quam venenatis vestibulum. Integer posuere erat a ante venenatis dapibus
            posuere velit aliquet.
          </p>
          <p>
            Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Curabitur
            blandit tempus porttitor. Morbi leo risus, porta ac consectetur ac,
            vestibulum at eros. Duis mollis, est non commodo luctus, nisi erat
            porttitor ligula, eget lacinia odio sem nec elit.
          </p>
        </article>

    </div>
  )
}

export default App
