// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageModerationResponseBodyDataExtAigcDataAIGC extends $dara.Model {
  contentProducer?: string;
  contentPropagator?: string;
  label?: string;
  produceID?: string;
  propagateID?: string;
  reservedCode1?: string;
  reservedCode2?: string;
  static names(): { [key: string]: string } {
    return {
      contentProducer: 'ContentProducer',
      contentPropagator: 'ContentPropagator',
      label: 'Label',
      produceID: 'ProduceID',
      propagateID: 'PropagateID',
      reservedCode1: 'ReservedCode1',
      reservedCode2: 'ReservedCode2',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentProducer: 'string',
      contentPropagator: 'string',
      label: 'string',
      produceID: 'string',
      propagateID: 'string',
      reservedCode1: 'string',
      reservedCode2: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyDataExtAigcData extends $dara.Model {
  AIGC?: ImageModerationResponseBodyDataExtAigcDataAIGC;
  static names(): { [key: string]: string } {
    return {
      AIGC: 'AIGC',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIGC: ImageModerationResponseBodyDataExtAigcDataAIGC,
    };
  }

  validate() {
    if(this.AIGC && typeof (this.AIGC as any).validate === 'function') {
      (this.AIGC as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyDataExtCustomImage extends $dara.Model {
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * 123456
   */
  imageId?: string;
  /**
   * @remarks
   * The image library ID.
   * 
   * @example
   * lib_123456
   */
  libId?: string;
  /**
   * @remarks
   * The image library name.
   * 
   * @example
   * xx
   */
  libName?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      libId: 'LibId',
      libName: 'LibName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      libId: 'string',
      libName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyDataExtFaceDataBang extends $dara.Model {
  /**
   * @remarks
   * The confidence level of the bang recognition result. Valid values: 0 to 100. A higher value indicates a more credible result.
   * 
   * @example
   * 81.88
   */
  confidence?: number;
  /**
   * @remarks
   * Indicates whether the recognition result of bangs is available.
   * 
   * @example
   * Has
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyDataExtFaceDataGender extends $dara.Model {
  /**
   * @remarks
   * The confidence level of the gender recognition result. Valid values: 0 to 100. A higher value indicates a more credible result.
   * 
   * @example
   * 81.88
   */
  confidence?: number;
  /**
   * @remarks
   * The gender recognition result. Valid values:
   * 
   * - Male
   * 
   * - FeMale
   * 
   * @example
   * FeMale
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyDataExtFaceDataHairstyle extends $dara.Model {
  /**
   * @remarks
   * The confidence level of the hairstyle recognition result. Valid values: 0 to 100. A higher value indicates a more credible result.
   * 
   * @example
   * 81.88
   */
  confidence?: number;
  /**
   * @remarks
   * The hairstyle recognition result. Valid values:
   * 
   * - Bald: bald head.
   * 
   * - Long: Long hair.
   * 
   * - Short: Short hair.
   * 
   * @example
   * Short
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyDataExtFaceDataHat extends $dara.Model {
  /**
   * @remarks
   * The confidence level of the result of wearing the hat. Valid values: 0 to 100. A higher value indicates a more credible result.
   * 
   * @example
   * 88.88
   */
  confidence?: number;
  /**
   * @remarks
   * The recognition result of whether to wear the hat. Valid values:
   * 
   * - Wear: Wear a hat.
   * 
   * - None: No hat.
   * 
   * @example
   * Wear
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyDataExtFaceDataLocation extends $dara.Model {
  /**
   * @remarks
   * The height of the face area. Unit: pixels.
   * 
   * @example
   * 26
   */
  h?: number;
  /**
   * @remarks
   * The width of the face area. Unit: pixels.
   * 
   * @example
   * 83
   */
  w?: number;
  /**
   * @remarks
   * The distance from the upper-left corner of the face area to the y-axis with the upper-left corner of the image as the coordinate origin. Unit: pixels.
   * 
   * @example
   * 41
   */
  x?: number;
  /**
   * @remarks
   * The distance from the upper-left corner of the face area to the x-axis with the upper-left corner of the image as the coordinate origin. Unit: pixels.
   * 
   * @example
   * 84
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      h: 'H',
      w: 'W',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      h: 'number',
      w: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyDataExtFaceDataMask extends $dara.Model {
  /**
   * @remarks
   * The confidence level of the result of wearing the mask. Valid values: 0 to 100. A higher value indicates a more credible result.
   * 
   * @example
   * 99.99
   */
  confidence?: number;
  /**
   * @remarks
   * The recognition result of whether to wear a mask. Valid values:
   * 
   * - Wear a mask.
   * 
   *  - None: No mask.
   * 
   * @example
   * Wear
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyDataExtFaceDataMustache extends $dara.Model {
  /**
   * @remarks
   * The confidence level of the result of the beard. Valid values: 0 to 100. A higher value indicates a more credible result.
   * 
   * @example
   * 99.99
   */
  confidence?: number;
  /**
   * @remarks
   * The identification result of whether there is a beard.Valid values:
   * 
   * - Has:have a beard.
   * 
   * - None:No beard.
   * 
   * @example
   * Has
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyDataExtFaceDataQuality extends $dara.Model {
  /**
   * @remarks
   * The blur of the face image. Valid values: 0 to 100. The higher the score, the more fuzzy it is.
   * Recommended values: 0 to 25.
   * 
   * @example
   * 5.88
   */
  blur?: number;
  /**
   * @remarks
   * The integrity of the human face. Recommended values:80 to 100.
   * 
   * @example
   * 100.0
   */
  integrity?: number;
  /**
   * @remarks
   * The head-up or head-down angle of the face.
   * Recommended values:-30 to 30.
   * 
   * @example
   * 5.88
   */
  pitch?: number;
  /**
   * @remarks
   * The plane rotation angle of the face.
   * Recommended values:-30 to 30.
   * 
   * @example
   * 5.18
   */
  roll?: number;
  /**
   * @remarks
   * The left and right shaking angle of the human face.
   * Recommended values:-30 to 30.
   * 
   * @example
   * 5.18
   */
  yaw?: number;
  static names(): { [key: string]: string } {
    return {
      blur: 'Blur',
      integrity: 'Integrity',
      pitch: 'Pitch',
      roll: 'Roll',
      yaw: 'Yaw',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blur: 'number',
      integrity: 'number',
      pitch: 'number',
      roll: 'number',
      yaw: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class ImageModerationResponseBodyDataExtLogoDataLocation extends $dara.Model {
  /**
   * @remarks
   * The height of the text area, in pixels.
   * 
   * @example
   * 44
   */
  h?: number;
  /**
   * @remarks
   * The width of the text area, in pixels.
   * 
   * @example
   * 33
   */
  w?: number;
  /**
   * @remarks
   * The distance between the upper-left corner of the text area and the y-axis, using the upper-left corner of the image as the coordinate origin, in pixels.
   * 
   * @example
   * 11
   */
  x?: number;
  /**
   * @remarks
   * The distance between the upper left corner of the text area and the x-axis, with the upper left corner of the image as the coordinate origin, in pixels.
   * 
   * @example
   * 22
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      h: 'H',
      w: 'W',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      h: 'number',
      w: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyDataExtLogoDataLogo extends $dara.Model {
  /**
   * @remarks
   * The score of the confidence level. Valid values: 0 to 100. The value is accurate to two decimal places. Some labels do not have scores of confidence levels.
   * 
   * @example
   * 99.01
   */
  confidence?: number;
  /**
   * @remarks
   * Logo category.
   * 
   * @example
   * xx
   */
  label?: string;
  /**
   * @remarks
   * Logo name.
   * 
   * @example
   * xx
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      label: 'Label',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      label: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class ImageModerationResponseBodyDataExtOcrResultLocation extends $dara.Model {
  /**
   * @remarks
   * The height of the text area, in pixels.
   * 
   * @example
   * 44
   */
  h?: number;
  /**
   * @remarks
   * The width of the text area, in pixels.
   * 
   * @example
   * 33
   */
  w?: number;
  /**
   * @remarks
   * The distance between the upper-left corner of the text area and the y-axis, using the upper-left corner of the image as the coordinate origin, in pixels.
   * 
   * @example
   * 11
   */
  x?: number;
  /**
   * @remarks
   * The distance between the upper left corner of the text area and the x-axis, with the upper left corner of the image as the coordinate origin, in pixels.
   * 
   * @example
   * 22
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      h: 'H',
      w: 'W',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      h: 'number',
      w: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class ImageModerationResponseBodyDataExtPublicFigureLocation extends $dara.Model {
  /**
   * @remarks
   * The height
   * 
   * @example
   * 44
   */
  h?: number;
  /**
   * @remarks
   * The weight
   * 
   * @example
   * 33
   */
  w?: number;
  /**
   * @remarks
   * X coordinate
   * 
   * @example
   * 11
   */
  x?: number;
  /**
   * @remarks
   * Y coordinate
   * 
   * @example
   * 22
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      h: 'H',
      w: 'W',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      h: 'number',
      w: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyDataExtPublicFigure extends $dara.Model {
  /**
   * @remarks
   * Identified person coding information.
   * 
   * @example
   * xx
   */
  figureId?: string;
  /**
   * @remarks
   * Identified person name information.
   * 
   * @example
   * xx
   */
  figureName?: string;
  /**
   * @remarks
   * the data array of location info
   */
  location?: ImageModerationResponseBodyDataExtPublicFigureLocation[];
  static names(): { [key: string]: string } {
    return {
      figureId: 'FigureId',
      figureName: 'FigureName',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      figureId: 'string',
      figureName: 'string',
      location: { 'type': 'array', 'itemType': ImageModerationResponseBodyDataExtPublicFigureLocation },
    };
  }

  validate() {
    if(Array.isArray(this.location)) {
      $dara.Model.validateArray(this.location);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyDataExtRecognition extends $dara.Model {
  /**
   * @remarks
   * The category of image recognition.
   * 
   * @example
   * xx
   */
  classification?: string;
  /**
   * @remarks
   * The score of the confidence level. Valid values: 0 to 100. The value is accurate to two decimal places. Some labels do not have scores of confidence levels.
   * 
   * @example
   * 99.01
   */
  confidence?: number;
  static names(): { [key: string]: string } {
    return {
      classification: 'Classification',
      confidence: 'Confidence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classification: 'string',
      confidence: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyDataExtTextInImageCustomText extends $dara.Model {
  /**
   * @remarks
   * Custom words, multiple words separated by commas.
   * 
   * @example
   * aaa,bbb
   */
  keyWords?: string;
  /**
   * @remarks
   * Custom library ID.
   * 
   * @example
   * 123456
   */
  libId?: string;
  /**
   * @remarks
   * Custom library name.
   * 
   * @example
   * xxxx
   */
  libName?: string;
  static names(): { [key: string]: string } {
    return {
      keyWords: 'KeyWords',
      libId: 'LibId',
      libName: 'LibName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyWords: 'string',
      libId: 'string',
      libName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyDataExtTextInImageOcrResultLocation extends $dara.Model {
  /**
   * @remarks
   * The height of the text area, in pixels.
   * 
   * @example
   * 33
   */
  h?: number;
  /**
   * @remarks
   * The width of the text area, in pixels.
   * 
   * @example
   * 44
   */
  w?: number;
  /**
   * @remarks
   * The distance between the upper-left corner of the text area and the y-axis, using the upper-left corner of the image as the coordinate origin, in pixels.
   * 
   * @example
   * 11
   */
  x?: number;
  /**
   * @remarks
   * The distance between the upper left corner of the text area and the x-axis, with the upper left corner of the image as the coordinate origin, in pixels.
   * 
   * @example
   * 22
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      h: 'H',
      w: 'W',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      h: 'number',
      w: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyDataExtTextInImageOcrResult extends $dara.Model {
  /**
   * @remarks
   * Location information.
   */
  location?: ImageModerationResponseBodyDataExtTextInImageOcrResultLocation;
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
      location: ImageModerationResponseBodyDataExtTextInImageOcrResultLocation,
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

export class ImageModerationResponseBodyDataExtTextInImage extends $dara.Model {
  /**
   * @remarks
   * When a custom text library is hit, the custom library ID, custom library name, and custom word are returned.
   */
  customText?: ImageModerationResponseBodyDataExtTextInImageCustomText[];
  /**
   * @remarks
   * Returns the text information in the recognized image.
   */
  ocrResult?: ImageModerationResponseBodyDataExtTextInImageOcrResult[];
  /**
   * @remarks
   * The risk words that are hit. Multiple words are separated by commas (,).
   */
  riskWord?: string[];
  static names(): { [key: string]: string } {
    return {
      customText: 'CustomText',
      ocrResult: 'OcrResult',
      riskWord: 'RiskWord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customText: { 'type': 'array', 'itemType': ImageModerationResponseBodyDataExtTextInImageCustomText },
      ocrResult: { 'type': 'array', 'itemType': ImageModerationResponseBodyDataExtTextInImageOcrResult },
      riskWord: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.customText)) {
      $dara.Model.validateArray(this.customText);
    }
    if(Array.isArray(this.ocrResult)) {
      $dara.Model.validateArray(this.ocrResult);
    }
    if(Array.isArray(this.riskWord)) {
      $dara.Model.validateArray(this.riskWord);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyDataExtVlContent extends $dara.Model {
  /**
   * @remarks
   * the vl output content
   * 
   * @example
   * this is a cat
   */
  outputText?: string;
  static names(): { [key: string]: string } {
    return {
      outputText: 'OutputText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputText: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyDataExt extends $dara.Model {
  aigcData?: ImageModerationResponseBodyDataExtAigcData;
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
      aigcData: 'AigcData',
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
      aigcData: ImageModerationResponseBodyDataExtAigcData,
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
    if(this.aigcData && typeof (this.aigcData as any).validate === 'function') {
      (this.aigcData as any).validate();
    }
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

export class ImageModerationResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The score of the confidence level. Valid values: 0 to 100. The value is accurate to two decimal places. Some labels do not have scores of confidence levels.
   * 
   * @example
   * 81.22
   */
  confidence?: number;
  /**
   * @remarks
   * The description of the result.
   * 
   * @example
   * no risk
   */
  description?: string;
  /**
   * @remarks
   * The labels returned after the image moderation. Multiple risk labels and the corresponding scores of confidence levels may be returned for an image.
   * 
   * @example
   * violent_explosion
   */
  label?: string;
  /**
   * @remarks
   * Risk Level
   * 
   * @example
   * high
   */
  riskLevel?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      description: 'Description',
      label: 'Label',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      description: 'string',
      label: 'string',
      riskLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the moderated object.
   * 
   * >  If you specify the dataId parameter in the request, the value of the dataId parameter is returned in the response.
   * 
   * @example
   * fb5ffab1-993b-449f-b8d6-b97d5e3331f2
   */
  dataId?: string;
  /**
   * @remarks
   * Auxiliary reference information.
   */
  ext?: ImageModerationResponseBodyDataExt;
  manualTaskId?: string;
  /**
   * @remarks
   * The results of image moderation parameters such as the label parameter and the confidence parameter, which are an array structure.
   */
  result?: ImageModerationResponseBodyDataResult[];
  /**
   * @remarks
   * Risk Level.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      ext: 'Ext',
      manualTaskId: 'ManualTaskId',
      result: 'Result',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      ext: ImageModerationResponseBodyDataExt,
      manualTaskId: 'string',
      result: { 'type': 'array', 'itemType': ImageModerationResponseBodyDataResult },
      riskLevel: 'string',
    };
  }

  validate() {
    if(this.ext && typeof (this.ext as any).validate === 'function') {
      (this.ext as any).validate();
    }
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned HTTP status code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The moderation results.
   */
  data?: ImageModerationResponseBodyData;
  /**
   * @remarks
   * The message that is returned in response to the request.
   * 
   * @example
   * OK
   */
  msg?: string;
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 6CF2815C-C8C7-4A01-B52E-FF6E24F53492
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ImageModerationResponseBodyData,
      msg: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

