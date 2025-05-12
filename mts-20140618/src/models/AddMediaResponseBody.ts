// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddMediaResponseBodyMedia } from "./AddMediaResponseBodyMedia";


export class AddMediaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed information about the media file.
   */
  media?: AddMediaResponseBodyMedia;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 05F8B913-E9F3-4A6F-9922-48CADA0FFAAD
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
      media: AddMediaResponseBodyMedia,
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

