// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ImageBatchModerationResponseBodyDataResultsExtLogoDataLocation } from "./ImageBatchModerationResponseBodyDataResultsExtLogoDataLocation";
import { ImageBatchModerationResponseBodyDataResultsExtLogoDataLogo } from "./ImageBatchModerationResponseBodyDataResultsExtLogoDataLogo";


export class ImageBatchModerationResponseBodyDataResultsExtLogoData extends $dara.Model {
  /**
   * @remarks
   * The location information of the identifier.
   */
  location?: ImageBatchModerationResponseBodyDataResultsExtLogoDataLocation;
  /**
   * @remarks
   * identification information
   */
  logo?: ImageBatchModerationResponseBodyDataResultsExtLogoDataLogo[];
  static names(): { [key: string]: string } {
    return {
      location: 'Location',
      logo: 'Logo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      location: ImageBatchModerationResponseBodyDataResultsExtLogoDataLocation,
      logo: { 'type': 'array', 'itemType': ImageBatchModerationResponseBodyDataResultsExtLogoDataLogo },
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

