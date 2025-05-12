// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMediaListByURLResponseBodyMediaListMediaMediaInfoStreamsSubtitleStreamListSubtitleStream extends $dara.Model {
  /**
   * @remarks
   * The sequence number of the subtitle stream. The value indicates the position of the subtitle stream in all subtitle streams.
   * 
   * @example
   * 1
   */
  index?: string;
  /**
   * @remarks
   * The language. For more information, see [FFmpeg language definition](https://www.ffmpeg.org/ffmpeg-all.html#Metadata).
   * 
   * @example
   * und
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'string',
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

