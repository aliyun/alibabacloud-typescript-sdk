// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MediaObject extends $dara.Model {
  /**
   * @remarks
   * The identifier for the media file.
   * 
   * *   If Type is set to OSS, the value is the URL of the media file. The following formats are supported: oss://... and https://...
   * *   If Type is set to Media, the value is the ID of the media asset.
   * 
   * @example
   * http://bucket.loction.aliyuncs.com/path/to/video.mp4
   */
  media?: string;
  /**
   * @remarks
   * The type of media source. Valid values:
   * 
   * *   OSS: an OSS object.
   * *   Media: a media asset.
   * *   ExternalURL: a publicly accessible external URL. This is not available for public use.
   * 
   * @example
   * OSS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

