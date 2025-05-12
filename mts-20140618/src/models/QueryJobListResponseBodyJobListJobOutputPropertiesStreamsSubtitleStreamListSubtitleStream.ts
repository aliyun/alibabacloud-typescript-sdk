// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryJobListResponseBodyJobListJobOutputPropertiesStreamsSubtitleStreamListSubtitleStream extends $dara.Model {
  /**
   * @remarks
   * The sequence number of the caption stream. The value indicates the position of the caption stream in all caption streams.
   * 
   * @example
   * 1
   */
  index?: string;
  /**
   * @remarks
   * The language of the caption stream. For more information, see [FFmpeg documentation](https://www.ffmpeg.org/ffmpeg-all.html#Metadata) and [ISO 639](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).
   * 
   * @example
   * eng
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

