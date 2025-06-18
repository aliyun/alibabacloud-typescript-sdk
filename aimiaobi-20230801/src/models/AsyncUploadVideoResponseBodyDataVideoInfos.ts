// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AsyncUploadVideoResponseBodyDataVideoInfos extends $dara.Model {
  videoExtraInfo?: string;
  /**
   * @example
   * 60616fad41b171f0bb4b4531948c0102
   */
  videoId?: string;
  /**
   * @example
   * 123.mp4
   */
  videoName?: string;
  /**
   * @example
   * http://123.mp4
   */
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      videoExtraInfo: 'VideoExtraInfo',
      videoId: 'VideoId',
      videoName: 'VideoName',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoExtraInfo: 'string',
      videoId: 'string',
      videoName: 'string',
      videoUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

