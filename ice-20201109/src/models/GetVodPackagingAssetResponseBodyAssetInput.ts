// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVodPackagingAssetResponseBodyAssetInput extends $dara.Model {
  /**
   * @remarks
   * The URL of the media file. Only M3U8 files stored in OSS are supported.
   */
  media?: string;
  /**
   * @remarks
   * The input type. Only Object Storage Service (OSS) is supported.
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

