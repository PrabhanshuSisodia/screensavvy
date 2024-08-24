import { useEffect } from "react";

const useTitle = (title) => {

    useEffect(() => {
        document.title = `${title} / ScreenSavvy`
      })

  return null
}

export  {useTitle}
