// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ImageModerationResponseBodyDataExtOcrResultLocation } from "./ImageModerationResponseBodyDataExtOcrResultLocation";


export class ImageModerationResponseBodyDataExtOcrResult extends $dara.Model {
  /**
   * @remarks
   * Location information.
   */
  location?: ImageModerationResponseBodyDataExtOcrResultLocation;
  /**
   * @remarks
   * The text information in the recognized image.
   * 
   * @example
   * xx
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      location: 'Location',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      location: ImageModerationResponseBodyDataExtOcrResultLocation,
      text: 'string',
    };
  }

  validate() {
    if(this.location && typeof (this.location as any).validate === 'function') {
      (this.location as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

