// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ImageModerationResponseBodyDataExtCustomImage } from "./ImageModerationResponseBodyDataExtCustomImage";
import { ImageModerationResponseBodyDataExtFaceData } from "./ImageModerationResponseBodyDataExtFaceData";
import { ImageModerationResponseBodyDataExtLogoData } from "./ImageModerationResponseBodyDataExtLogoData";
import { ImageModerationResponseBodyDataExtOcrResult } from "./ImageModerationResponseBodyDataExtOcrResult";
import { ImageModerationResponseBodyDataExtPublicFigure } from "./ImageModerationResponseBodyDataExtPublicFigure";
import { ImageModerationResponseBodyDataExtRecognition } from "./ImageModerationResponseBodyDataExtRecognition";
import { ImageModerationResponseBodyDataExtTextInImage } from "./ImageModerationResponseBodyDataExtTextInImage";
import { ImageModerationResponseBodyDataExtVlContent } from "./ImageModerationResponseBodyDataExtVlContent";


export class ImageModerationResponseBodyDataExt extends $dara.Model {
  /**
   * @remarks
   * If a custom image library is hit, information about the hit custom image library is returned.
   */
  customImage?: ImageModerationResponseBodyDataExtCustomImage[];
  /**
   * @remarks
   * The returned face attribute information
   */
  faceData?: ImageModerationResponseBodyDataExtFaceData[];
  /**
   * @remarks
   * Logo information.
   */
  logoData?: ImageModerationResponseBodyDataExtLogoData[];
  /**
   * @remarks
   * Returns the text information in the recognized image.
   */
  ocrResult?: ImageModerationResponseBodyDataExtOcrResult[];
  /**
   * @remarks
   * Person information list.
   */
  publicFigure?: ImageModerationResponseBodyDataExtPublicFigure[];
  /**
   * @remarks
   * The result of image recognition.
   */
  recognition?: ImageModerationResponseBodyDataExtRecognition[];
  /**
   * @remarks
   * Returns the text information in the hit image.
   */
  textInImage?: ImageModerationResponseBodyDataExtTextInImage;
  /**
   * @remarks
   * the vl output content
   */
  vlContent?: ImageModerationResponseBodyDataExtVlContent;
  static names(): { [key: string]: string } {
    return {
      customImage: 'CustomImage',
      faceData: 'FaceData',
      logoData: 'LogoData',
      ocrResult: 'OcrResult',
      publicFigure: 'PublicFigure',
      recognition: 'Recognition',
      textInImage: 'TextInImage',
      vlContent: 'VlContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customImage: { 'type': 'array', 'itemType': ImageModerationResponseBodyDataExtCustomImage },
      faceData: { 'type': 'array', 'itemType': ImageModerationResponseBodyDataExtFaceData },
      logoData: { 'type': 'array', 'itemType': ImageModerationResponseBodyDataExtLogoData },
      ocrResult: { 'type': 'array', 'itemType': ImageModerationResponseBodyDataExtOcrResult },
      publicFigure: { 'type': 'array', 'itemType': ImageModerationResponseBodyDataExtPublicFigure },
      recognition: { 'type': 'array', 'itemType': ImageModerationResponseBodyDataExtRecognition },
      textInImage: ImageModerationResponseBodyDataExtTextInImage,
      vlContent: ImageModerationResponseBodyDataExtVlContent,
    };
  }

  validate() {
    if(Array.isArray(this.customImage)) {
      $dara.Model.validateArray(this.customImage);
    }
    if(Array.isArray(this.faceData)) {
      $dara.Model.validateArray(this.faceData);
    }
    if(Array.isArray(this.logoData)) {
      $dara.Model.validateArray(this.logoData);
    }
    if(Array.isArray(this.ocrResult)) {
      $dara.Model.validateArray(this.ocrResult);
    }
    if(Array.isArray(this.publicFigure)) {
      $dara.Model.validateArray(this.publicFigure);
    }
    if(Array.isArray(this.recognition)) {
      $dara.Model.validateArray(this.recognition);
    }
    if(this.textInImage && typeof (this.textInImage as any).validate === 'function') {
      (this.textInImage as any).validate();
    }
    if(this.vlContent && typeof (this.vlContent as any).validate === 'function') {
      (this.vlContent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

