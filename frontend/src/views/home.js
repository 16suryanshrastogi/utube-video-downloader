import React from 'react'
import axios from "axios";
import { Helmet } from 'react-helmet'
import FeatureCard from '../components/feature-card'
import Question1 from '../components/question1'
import './home.css'
import {useState}  from "react";

const Home = () => {
  const [urlValue, setUrlValue] = useState("");
    const [data, setData] = useState(null);

    const handleDownload = async () => {
        const data = await axios.get(
            `http://localhost:4000/download?url=${urlValue}`
        );
        setData(data);
        setUrlValue("");
    };

  return (
    <div className="home-container">
      <Helmet>
        <title>Youtube_downloader</title>
        <meta property="og:title" content="Youtube_downloader" />
      </Helmet>
      <div className="home-header"></div>
      <div className="home-hero">
        <div className="heroContainer home-hero1">
          <div className="home-container1">
            <h1 className="home-hero-heading heading1">
              Youtube Video Downloader
            </h1>
            <span className="home-hero-sub-heading bodyLarge">
              <span>
                <span>
                  <span>Download your favorite videos from YouTube</span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
              <span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
            </span>
            <div className="home-btn-group">
              <form class="form">
                  <input
                  id = "SearchBox"
                  type="text"
                  width= "100%"
                  placeholder="Enter Your Url Here..." 
                  value={urlValue}
                  onChange={(e) => setUrlValue(e.target.value)}

                  />
              </form>
              <button 
                className="buttonFilled"
                type = "button"
                onClick={handleDownload}
              >
                  Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
          {data !== null ? (
            <div className="flex">
                <div className="my-4">
                    <iframe
                        width="770"
                        height="420"
                        src={`${data.data.url}`}
                        title="video"
                    />
                </div>
                <div>
                      <div class="container">
                           <div class="row">
                              {data?.data.info.map((formatName, index) => (
                                  <div key={index} class="col-6 col-sm-4">
                                      <a
                                        href={formatName.url}
                                        target="_blank"
                                        download
                                        className=" outline-none italic underline" rel="noreferrer"
                                      >
                                        {formatName.mimeType.split(";")[0] + "  "}
                                        {formatName.hasVideo ? formatName.height + "p" : ""}
                                      </a>
                                  </div>
                              ))}
                           </div>
                        </div>

                      </div>
                  </div>
          ): (
                        <div className=" text-red-700 font-bold mt-10">No download yet</div>
                    )}
                    </div>

      <div className="home-features">
        <div className="featuresContainer">
          <div className="home-features1">
            <div className="home-container2">
              <span className="overline">
                <span>features</span>
                <br></br>
              </span>
              <h2 className="home-features-heading heading2">
                Download YouTube Videos with Ease
              </h2>
              <span className="home-features-sub-heading bodyLarge">
                <span>
                  <span>
                    <span>
                      Discover the powerful features of our YouTube Video
                      Downloader
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <div className="home-container3">
              <FeatureCard
                Heading="Download YouTube Videos"
                SubHeading="Easily download videos from YouTube by providing the video URL"
              ></FeatureCard>
              <FeatureCard
                Heading="High-Quality Downloads"
                SubHeading="Download videos in the highest available quality for an enhanced viewing experience"
              ></FeatureCard>
              <FeatureCard
                Heading="Fast and Efficient"
                SubHeading="Quickly download videos without any unnecessary delays or interruptions"
              ></FeatureCard>
              <FeatureCard
                Heading="User-Friendly Interface"
                SubHeading="Enjoy a simple and intuitive interface that makes downloading videos a breeze"
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>
      <div className="home-pricing"></div>
      <div className="home-banner">
        <div className="bannerContainer home-banner1">
          <h1 className="home-banner-heading heading2">
            Download YouTube Videos with Ease
          </h1>
          <span className="home-banner-sub-heading bodySmall">
            <span>
              <span>
                <span>
                  Our YouTube Video Downloader allows you to easily download
                  videos from YouTube by simply entering the video URL. Whether
                  you want to save a tutorial, music video, or any other type of
                  content, our downloader provides a fast and convenient way to
                  get the videos you love.
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
            <span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
          </span>
          <button className="buttonFilled">Learn More</button>
        </div>
      </div>
      <div className="home-faq">
        <div className="faqContainer">
          <div className="home-faq1">
            <div className="home-container4">
              <span className="overline">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="home-text48 heading2">Common questions</h2>
              <span className="home-text49 bodyLarge">
                <span>
                  Here are some of the most common questions that we get.
                </span>
                <br></br>
              </span>
            </div>
            <div className="home-container5">
              <Question1
                Answer="The Youtube Video Downloader works by taking the URL of a Youtube video and extracting the video file from the server. It then allows you to download the video file to your device."
                Question="How does the Youtube Video Downloader work?"
              ></Question1>
              <Question1
                Answer="Downloading videos from Youtube may infringe on the terms of service of the platform. It is recommended to only download videos for personal use and not for distribution or commercial purposes."
                Question="Is it legal to download videos from Youtube?"
              ></Question1>
              <Question1
                Answer="Yes, our Youtube Video Downloader supports downloading videos in various formats such as MP4, FLV, and WebM. You can choose the desired format before initiating the download."
                Question="Can I download videos in different formats?"
              ></Question1>
              <Question1
                Answer="There is no limit on the number of videos you can download using our Youtube Video Downloader. You can download as many videos as you want, provided they are available for public viewing on Youtube."
                Question="Is there a limit on the number of videos I can download?"
              ></Question1>
              <Question1
                Answer="Yes, you can download videos from any public channel on Youtube using our Youtube Video Downloader. However, please respect the copyright and terms of service of the content creators."
                Question="Can I download videos from channels that are not mine?"
              ></Question1>
            </div>
          </div>
        </div>
      </div>
      <div className="home-footer"></div>
    </div>
  )
}

export default Home
