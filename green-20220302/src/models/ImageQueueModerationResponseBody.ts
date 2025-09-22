// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageQueueModerationResponseBodyDataExtCustomImage extends $dara.Model {
  /**
   * @example
   * 123456
   */
  imageId?: string;
  /**
   * @example
   * 图库123
   */
  libId?: string;
  /**
   * @example
   * 图库123
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

export class ImageQueueModerationResponseBodyDataExtFaceDataBang extends $dara.Model {
  /**
   * @example
   * 81.88
   */
  confidence?: number;
  /**
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

export class ImageQueueModerationResponseBodyDataExtFaceDataGender extends $dara.Model {
  /**
   * @example
   * 81.88
   */
  confidence?: number;
  /**
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

export class ImageQueueModerationResponseBodyDataExtFaceDataHairstyle extends $dara.Model {
  /**
   * @example
   * 81.88
   */
  confidence?: number;
  /**
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

export class ImageQueueModerationResponseBodyDataExtFaceDataHat extends $dara.Model {
  /**
   * @example
   * 88.88
   */
  confidence?: number;
  /**
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

export class ImageQueueModerationResponseBodyDataExtFaceDataLocation extends $dara.Model {
  /**
   * @example
   * 26
   */
  h?: number;
  /**
   * @example
   * 83
   */
  w?: number;
  /**
   * @example
   * 41
   */
  x?: number;
  /**
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

export class ImageQueueModerationResponseBodyDataExtFaceDataMask extends $dara.Model {
  /**
   * @example
   * 99.99
   */
  confidence?: number;
  /**
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

export class ImageQueueModerationResponseBodyDataExtFaceDataMustache extends $dara.Model {
  /**
   * @example
   * 99.99
   */
  confidence?: number;
  /**
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

export class ImageQueueModerationResponseBodyDataExtFaceDataQuality extends $dara.Model {
  /**
   * @example
   * 5.88
   */
  blur?: number;
  /**
   * @example
   * 100.0
   */
  integrity?: number;
  /**
   * @example
   * 5.88
   */
  pitch?: number;
  /**
   * @example
   * 5.18
   */
  roll?: number;
  /**
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

export class ImageQueueModerationResponseBodyDataExtFaceData extends $dara.Model {
  /**
   * @example
   * 18
   */
  age?: number;
  bang?: ImageQueueModerationResponseBodyDataExtFaceDataBang;
  gender?: ImageQueueModerationResponseBodyDataExtFaceDataGender;
  /**
   * @example
   * Common
   */
  glasses?: string;
  hairstyle?: ImageQueueModerationResponseBodyDataExtFaceDataHairstyle;
  hat?: ImageQueueModerationResponseBodyDataExtFaceDataHat;
  location?: ImageQueueModerationResponseBodyDataExtFaceDataLocation;
  mask?: ImageQueueModerationResponseBodyDataExtFaceDataMask;
  mustache?: ImageQueueModerationResponseBodyDataExtFaceDataMustache;
  quality?: ImageQueueModerationResponseBodyDataExtFaceDataQuality;
  /**
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
      bang: ImageQueueModerationResponseBodyDataExtFaceDataBang,
      gender: ImageQueueModerationResponseBodyDataExtFaceDataGender,
      glasses: 'string',
      hairstyle: ImageQueueModerationResponseBodyDataExtFaceDataHairstyle,
      hat: ImageQueueModerationResponseBodyDataExtFaceDataHat,
      location: ImageQueueModerationResponseBodyDataExtFaceDataLocation,
      mask: ImageQueueModerationResponseBodyDataExtFaceDataMask,
      mustache: ImageQueueModerationResponseBodyDataExtFaceDataMustache,
      quality: ImageQueueModerationResponseBodyDataExtFaceDataQuality,
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

export class ImageQueueModerationResponseBodyDataExtLogoDataLocation extends $dara.Model {
  /**
   * @example
   * 440
   */
  h?: number;
  /**
   * @example
   * 330
   */
  w?: number;
  /**
   * @example
   * 11
   */
  x?: number;
  /**
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

export class ImageQueueModerationResponseBodyDataExtLogoDataLogo extends $dara.Model {
  /**
   * @example
   * 99.1
   */
  confidence?: number;
  /**
   * @example
   * logo_sns
   */
  label?: string;
  /**
   * @example
   * 钉钉
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

export class ImageQueueModerationResponseBodyDataExtLogoData extends $dara.Model {
  location?: ImageQueueModerationResponseBodyDataExtLogoDataLocation;
  logo?: ImageQueueModerationResponseBodyDataExtLogoDataLogo[];
  static names(): { [key: string]: string } {
    return {
      location: 'Location',
      logo: 'Logo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      location: ImageQueueModerationResponseBodyDataExtLogoDataLocation,
      logo: { 'type': 'array', 'itemType': ImageQueueModerationResponseBodyDataExtLogoDataLogo },
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

export class ImageQueueModerationResponseBodyDataExtOcrResultLocation extends $dara.Model {
  /**
   * @example
   * 44
   */
  h?: number;
  /**
   * @example
   * 33
   */
  w?: number;
  /**
   * @example
   * 11
   */
  x?: number;
  /**
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

export class ImageQueueModerationResponseBodyDataExtOcrResult extends $dara.Model {
  location?: ImageQueueModerationResponseBodyDataExtOcrResultLocation;
  /**
   * @example
   * abcd
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
      location: ImageQueueModerationResponseBodyDataExtOcrResultLocation,
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

export class ImageQueueModerationResponseBodyDataExtPublicFigureLocation extends $dara.Model {
  /**
   * @example
   * 440
   */
  h?: number;
  /**
   * @example
   * 330
   */
  w?: number;
  /**
   * @example
   * 11
   */
  x?: number;
  /**
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

export class ImageQueueModerationResponseBodyDataExtPublicFigure extends $dara.Model {
  /**
   * @example
   * xxx001
   */
  figureId?: string;
  /**
   * @example
   * yzazhzou
   */
  figureName?: string;
  location?: ImageQueueModerationResponseBodyDataExtPublicFigureLocation[];
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
      location: { 'type': 'array', 'itemType': ImageQueueModerationResponseBodyDataExtPublicFigureLocation },
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

export class ImageQueueModerationResponseBodyDataExtRecognition extends $dara.Model {
  /**
   * @example
   * 办公大楼
   */
  classification?: string;
  /**
   * @example
   * 81.22
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

export class ImageQueueModerationResponseBodyDataExtTextInImageCustomText extends $dara.Model {
  /**
   * @example
   * 自定义词1,自定义词2
   */
  keyWords?: string;
  /**
   * @example
   * 123456
   */
  libId?: string;
  /**
   * @example
   * 自定义库1
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

export class ImageQueueModerationResponseBodyDataExtTextInImageOcrResultLocation extends $dara.Model {
  /**
   * @example
   * 33
   */
  h?: number;
  /**
   * @example
   * 44
   */
  w?: number;
  /**
   * @example
   * 11
   */
  x?: number;
  /**
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

export class ImageQueueModerationResponseBodyDataExtTextInImageOcrResult extends $dara.Model {
  location?: ImageQueueModerationResponseBodyDataExtTextInImageOcrResultLocation;
  /**
   * @example
   * abcd
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
      location: ImageQueueModerationResponseBodyDataExtTextInImageOcrResultLocation,
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

export class ImageQueueModerationResponseBodyDataExtTextInImage extends $dara.Model {
  customText?: ImageQueueModerationResponseBodyDataExtTextInImageCustomText[];
  ocrResult?: ImageQueueModerationResponseBodyDataExtTextInImageOcrResult[];
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
      customText: { 'type': 'array', 'itemType': ImageQueueModerationResponseBodyDataExtTextInImageCustomText },
      ocrResult: { 'type': 'array', 'itemType': ImageQueueModerationResponseBodyDataExtTextInImageOcrResult },
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

export class ImageQueueModerationResponseBodyDataExtVlContent extends $dara.Model {
  /**
   * @example
   * 这是一段描述
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

export class ImageQueueModerationResponseBodyDataExt extends $dara.Model {
  customImage?: ImageQueueModerationResponseBodyDataExtCustomImage[];
  faceData?: ImageQueueModerationResponseBodyDataExtFaceData[];
  logoData?: ImageQueueModerationResponseBodyDataExtLogoData[];
  ocrResult?: ImageQueueModerationResponseBodyDataExtOcrResult[];
  publicFigure?: ImageQueueModerationResponseBodyDataExtPublicFigure[];
  recognition?: ImageQueueModerationResponseBodyDataExtRecognition[];
  textInImage?: ImageQueueModerationResponseBodyDataExtTextInImage;
  vlContent?: ImageQueueModerationResponseBodyDataExtVlContent;
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
      customImage: { 'type': 'array', 'itemType': ImageQueueModerationResponseBodyDataExtCustomImage },
      faceData: { 'type': 'array', 'itemType': ImageQueueModerationResponseBodyDataExtFaceData },
      logoData: { 'type': 'array', 'itemType': ImageQueueModerationResponseBodyDataExtLogoData },
      ocrResult: { 'type': 'array', 'itemType': ImageQueueModerationResponseBodyDataExtOcrResult },
      publicFigure: { 'type': 'array', 'itemType': ImageQueueModerationResponseBodyDataExtPublicFigure },
      recognition: { 'type': 'array', 'itemType': ImageQueueModerationResponseBodyDataExtRecognition },
      textInImage: ImageQueueModerationResponseBodyDataExtTextInImage,
      vlContent: ImageQueueModerationResponseBodyDataExtVlContent,
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

export class ImageQueueModerationResponseBodyDataResult extends $dara.Model {
  /**
   * @example
   * 81.22
   */
  confidence?: number;
  /**
   * @example
   * 未检测出风险
   */
  description?: string;
  /**
   * @example
   * violent_explosion
   */
  label?: string;
  /**
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

export class ImageQueueModerationResponseBodyData extends $dara.Model {
  /**
   * @example
   * data1234
   */
  dataId?: string;
  ext?: ImageQueueModerationResponseBodyDataExt;
  /**
   * @example
   * xxxxx-xxxxx
   */
  manualTaskId?: string;
  result?: ImageQueueModerationResponseBodyDataResult[];
  /**
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
      ext: ImageQueueModerationResponseBodyDataExt,
      manualTaskId: 'string',
      result: { 'type': 'array', 'itemType': ImageQueueModerationResponseBodyDataResult },
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

export class ImageQueueModerationResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: ImageQueueModerationResponseBodyData;
  /**
   * @example
   * OK
   */
  msg?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
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
      data: ImageQueueModerationResponseBodyData,
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

