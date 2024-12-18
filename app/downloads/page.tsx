export default async function Page() {

    return (
      <div className="flex flex-col justify-center items-center h-screen ">
        <div className="flex justify-center border p-8 w-96">
          {post ? (
            <div className="flex flex-col items-center">
              {/* Display Image and Title Once */}
              {post.medias &&  (
                <>
                  <img
                    src={post.thumbnail}
                    alt="Thumbnail"
                    className="w-full max-w-sm mb-4 rounded shadow"
                  />
                  <h2 className="text-lg font-bold mb-2">
                    {post.title}
                  </h2>
                </>
              )}
              {/* Display Download Links */}
              <ul className="flex flex-col gap-6">
                {post.medias &&
                  Object.values(post.medias).map((item, index) => (
                    <li key={index}>
                      Download Link:{' '}
                      <a
                        href={item.url}
                        className="border p-2 m-4 bg-blue-600 text-white"
                      >
                        {item.quality}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          ) : (
            <p>No data available</p>
          )}
        </div>
      </div>
    );
  }
  