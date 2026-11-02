// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MediaObject extends $dara.Model {
  /**
   * @remarks
   * The file media asset.
   * - If Type is OSS, Media is a URL and supports the OSS and HTTP protocols.     
   * - If Type is Media, Media is a media asset ID.
   * 
   * @example
   * http://bucket.loction.aliyuncs.com/path/to/video.mp4
   */
  media?: string;
  /**
   * @remarks
   * The input type. Valid values:
   * - OSS: Alibaba Cloud OSS file 
   * - Media: Media asset
   * - ExternalURL: External URL, not currently publicly supported
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

