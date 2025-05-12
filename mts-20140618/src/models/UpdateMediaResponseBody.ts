// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateMediaResponseBodyMedia } from "./UpdateMediaResponseBodyMedia";


export class UpdateMediaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the media file.
   */
  media?: UpdateMediaResponseBodyMedia;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6A88246F-C91F-42BD-BABE-DB0DF993F960
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: UpdateMediaResponseBodyMedia,
      requestId: 'string',
    };
  }

  validate() {
    if(this.media && typeof (this.media as any).validate === 'function') {
      (this.media as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

