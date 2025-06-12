// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ImageModerationResponseBodyDataExtLogoDataLocation } from "./ImageModerationResponseBodyDataExtLogoDataLocation";
import { ImageModerationResponseBodyDataExtLogoDataLogo } from "./ImageModerationResponseBodyDataExtLogoDataLogo";


export class ImageModerationResponseBodyDataExtLogoData extends $dara.Model {
  /**
   * @remarks
   * Location information.
   */
  location?: ImageModerationResponseBodyDataExtLogoDataLocation;
  /**
   * @remarks
   * Logo information.
   */
  logo?: ImageModerationResponseBodyDataExtLogoDataLogo[];
  static names(): { [key: string]: string } {
    return {
      location: 'Location',
      logo: 'Logo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      location: ImageModerationResponseBodyDataExtLogoDataLocation,
      logo: { 'type': 'array', 'itemType': ImageModerationResponseBodyDataExtLogoDataLogo },
    };
  }

  validate() {
    if(this.location && typeof (this.location as any).validate === 'function') {
      (this.location as any).validate();
    }
    if(Array.isArray(this.logo)) {
      $dara.Model.validateArray(this.logo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

