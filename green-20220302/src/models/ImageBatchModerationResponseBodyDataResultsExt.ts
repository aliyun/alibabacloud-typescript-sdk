// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ImageBatchModerationResponseBodyDataResultsExtCustomImage } from "./ImageBatchModerationResponseBodyDataResultsExtCustomImage";
import { ImageBatchModerationResponseBodyDataResultsExtLogoData } from "./ImageBatchModerationResponseBodyDataResultsExtLogoData";
import { ImageBatchModerationResponseBodyDataResultsExtPublicFigure } from "./ImageBatchModerationResponseBodyDataResultsExtPublicFigure";
import { ImageBatchModerationResponseBodyDataResultsExtTextInImage } from "./ImageBatchModerationResponseBodyDataResultsExtTextInImage";


export class ImageBatchModerationResponseBodyDataResultsExt extends $dara.Model {
  /**
   * @remarks
   * Custom image library hit information list.
   */
  customImage?: ImageBatchModerationResponseBodyDataResultsExtCustomImage[];
  /**
   * @remarks
   * Logo identification information.
   */
  logoData?: ImageBatchModerationResponseBodyDataResultsExtLogoData;
  /**
   * @remarks
   * List of character information.
   */
  publicFigure?: ImageBatchModerationResponseBodyDataResultsExtPublicFigure[];
  /**
   * @remarks
   * Return the text information from the recognized images.
   */
  textInImage?: ImageBatchModerationResponseBodyDataResultsExtTextInImage;
  static names(): { [key: string]: string } {
    return {
      customImage: 'CustomImage',
      logoData: 'LogoData',
      publicFigure: 'PublicFigure',
      textInImage: 'TextInImage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customImage: { 'type': 'array', 'itemType': ImageBatchModerationResponseBodyDataResultsExtCustomImage },
      logoData: ImageBatchModerationResponseBodyDataResultsExtLogoData,
      publicFigure: { 'type': 'array', 'itemType': ImageBatchModerationResponseBodyDataResultsExtPublicFigure },
      textInImage: ImageBatchModerationResponseBodyDataResultsExtTextInImage,
    };
  }

  validate() {
    if(Array.isArray(this.customImage)) {
      $dara.Model.validateArray(this.customImage);
    }
    if(this.logoData && typeof (this.logoData as any).validate === 'function') {
      (this.logoData as any).validate();
    }
    if(Array.isArray(this.publicFigure)) {
      $dara.Model.validateArray(this.publicFigure);
    }
    if(this.textInImage && typeof (this.textInImage as any).validate === 'function') {
      (this.textInImage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

