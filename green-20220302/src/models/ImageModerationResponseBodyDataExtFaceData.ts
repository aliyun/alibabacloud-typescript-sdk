// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ImageModerationResponseBodyDataExtFaceDataBang } from "./ImageModerationResponseBodyDataExtFaceDataBang";
import { ImageModerationResponseBodyDataExtFaceDataGender } from "./ImageModerationResponseBodyDataExtFaceDataGender";
import { ImageModerationResponseBodyDataExtFaceDataHairstyle } from "./ImageModerationResponseBodyDataExtFaceDataHairstyle";
import { ImageModerationResponseBodyDataExtFaceDataHat } from "./ImageModerationResponseBodyDataExtFaceDataHat";
import { ImageModerationResponseBodyDataExtFaceDataLocation } from "./ImageModerationResponseBodyDataExtFaceDataLocation";
import { ImageModerationResponseBodyDataExtFaceDataMask } from "./ImageModerationResponseBodyDataExtFaceDataMask";
import { ImageModerationResponseBodyDataExtFaceDataMustache } from "./ImageModerationResponseBodyDataExtFaceDataMustache";
import { ImageModerationResponseBodyDataExtFaceDataQuality } from "./ImageModerationResponseBodyDataExtFaceDataQuality";


export class ImageModerationResponseBodyDataExtFaceData extends $dara.Model {
  /**
   * @remarks
   * The age recognition result.
   * 
   * @example
   * 18
   */
  age?: number;
  /**
   * @remarks
   * Indicates whether the recognition result of bangs is available.
   */
  bang?: ImageModerationResponseBodyDataExtFaceDataBang;
  /**
   * @remarks
   * The gender recognition result.
   */
  gender?: ImageModerationResponseBodyDataExtFaceDataGender;
  /**
   * @remarks
   * The recognition result of whether to wear glasses.
   * 
   * - None: No glasses.
   * 
   * - Wear: Wear glasses.
   * 
   * - Sunglass: Wear sunglasses.
   * 
   * @example
   * Common
   */
  glasses?: string;
  /**
   * @remarks
   * The hairstyle recognition result.
   */
  hairstyle?: ImageModerationResponseBodyDataExtFaceDataHairstyle;
  /**
   * @remarks
   * The recognition result of whether to wear a hat.
   */
  hat?: ImageModerationResponseBodyDataExtFaceDataHat;
  /**
   * @remarks
   * The location of the face.
   */
  location?: ImageModerationResponseBodyDataExtFaceDataLocation;
  /**
   * @remarks
   * The recognition result of whether to wear a mask.
   */
  mask?: ImageModerationResponseBodyDataExtFaceDataMask;
  /**
   * @remarks
   * The identification result of whether there is a beard.
   */
  mustache?: ImageModerationResponseBodyDataExtFaceDataMustache;
  /**
   * @remarks
   * The quality information of the face image.
   */
  quality?: ImageModerationResponseBodyDataExtFaceDataQuality;
  /**
   * @remarks
   * The smiling degree of the face.
   * 
   * @example
   * 85.88
   */
  smile?: number;
  static names(): { [key: string]: string } {
    return {
      age: 'Age',
      bang: 'Bang',
      gender: 'Gender',
      glasses: 'Glasses',
      hairstyle: 'Hairstyle',
      hat: 'Hat',
      location: 'Location',
      mask: 'Mask',
      mustache: 'Mustache',
      quality: 'Quality',
      smile: 'Smile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      age: 'number',
      bang: ImageModerationResponseBodyDataExtFaceDataBang,
      gender: ImageModerationResponseBodyDataExtFaceDataGender,
      glasses: 'string',
      hairstyle: ImageModerationResponseBodyDataExtFaceDataHairstyle,
      hat: ImageModerationResponseBodyDataExtFaceDataHat,
      location: ImageModerationResponseBodyDataExtFaceDataLocation,
      mask: ImageModerationResponseBodyDataExtFaceDataMask,
      mustache: ImageModerationResponseBodyDataExtFaceDataMustache,
      quality: ImageModerationResponseBodyDataExtFaceDataQuality,
      smile: 'number',
    };
  }

  validate() {
    if(this.bang && typeof (this.bang as any).validate === 'function') {
      (this.bang as any).validate();
    }
    if(this.gender && typeof (this.gender as any).validate === 'function') {
      (this.gender as any).validate();
    }
    if(this.hairstyle && typeof (this.hairstyle as any).validate === 'function') {
      (this.hairstyle as any).validate();
    }
    if(this.hat && typeof (this.hat as any).validate === 'function') {
      (this.hat as any).validate();
    }
    if(this.location && typeof (this.location as any).validate === 'function') {
      (this.location as any).validate();
    }
    if(this.mask && typeof (this.mask as any).validate === 'function') {
      (this.mask as any).validate();
    }
    if(this.mustache && typeof (this.mustache as any).validate === 'function') {
      (this.mustache as any).validate();
    }
    if(this.quality && typeof (this.quality as any).validate === 'function') {
      (this.quality as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

