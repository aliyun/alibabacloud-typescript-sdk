// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoPlayAuthResponseBodyVideoMeta extends $dara.Model {
  /**
   * @remarks
   * The thumbnail URL of the media file.
   * 
   * @example
   * https://example.aliyundoc.com/****.jpg
   */
  coverURL?: string;
  /**
   * @remarks
   * The duration of the media file. Unit: seconds.
   * 
   * @example
   * 120.0
   */
  duration?: number;
  /**
   * @remarks
   * The status of the media file. For more information about the value range and description, see [Status: the status of a video](~~52839#title-vqg-8cz-7p8~~).
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The title of the media file.
   * 
   * @example
   * VOD
   */
  title?: string;
  /**
   * @remarks
   * The ID of the media file.
   * 
   * @example
   * dfde02284a5c46622a097adaf44a****
   */
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      coverURL: 'CoverURL',
      duration: 'Duration',
      status: 'Status',
      title: 'Title',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverURL: 'string',
      duration: 'number',
      status: 'string',
      title: 'string',
      videoId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoPlayAuthResponseBody extends $dara.Model {
  /**
   * @remarks
   * The credential for media playback.
   * 
   * @example
   * sstyYuew6789000000xtt7TYUh****
   */
  playAuth?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E4EBD2BF-5EB0-4476-8829-9D94E1B1****
   */
  requestId?: string;
  /**
   * @remarks
   * The metadata of the audio or video file.
   */
  videoMeta?: GetVideoPlayAuthResponseBodyVideoMeta;
  static names(): { [key: string]: string } {
    return {
      playAuth: 'PlayAuth',
      requestId: 'RequestId',
      videoMeta: 'VideoMeta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      playAuth: 'string',
      requestId: 'string',
      videoMeta: GetVideoPlayAuthResponseBodyVideoMeta,
    };
  }

  validate() {
    if(this.videoMeta && typeof (this.videoMeta as any).validate === 'function') {
      (this.videoMeta as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

