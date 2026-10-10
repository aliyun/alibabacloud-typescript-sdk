// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageBatchModerationResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The confidence score, ranging from 0 to 100, rounded to two decimal places. Some labels do not have a confidence score.
   * 
   * @example
   * 81.22
   */
  confidence?: number;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * No risk detected
   */
  description?: string;
  /**
   * @remarks
   * The label returned after image content detection. Multiple labels and scores may be detected for the same image.
   * 
   * @example
   * violent_explosion
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      description: 'Description',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      description: 'string',
      label: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageBatchModerationResponseBodyDataResultsExtCustomImage extends $dara.Model {
  /**
   * @remarks
   * The ID of the matched custom image.
   * 
   * @example
   * 1965304870002
   */
  imageId?: string;
  /**
   * @remarks
   * The ID of the custom library.
   * 
   * @example
   * 1965304870002
   */
  libId?: string;
  /**
   * @remarks
   * The name of the matched custom image library.
   * 
   * @example
   * Whitelist
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

export class ImageBatchModerationResponseBodyDataResultsExtLogoDataLocation extends $dara.Model {
  /**
   * @remarks
   * The height of the logo area, in pixels.
   * 
   * @example
   * 440
   */
  h?: number;
  /**
   * @remarks
   * The width of the logo area, in pixels.
   * 
   * @example
   * 330
   */
  w?: number;
  /**
   * @remarks
   * The distance from the upper-left corner of the text area to the y-axis, with the upper-left corner of the image as the coordinate origin, in pixels.
   * 
   * @example
   * 11
   */
  x?: number;
  /**
   * @remarks
   * The distance from the upper-left corner of the text area to the x-axis, with the upper-left corner of the image as the coordinate origin, in pixels.
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

export class ImageBatchModerationResponseBodyDataResultsExtLogoDataLogo extends $dara.Model {
  /**
   * @remarks
   * The confidence score, ranging from 0 to 100, rounded to two decimal places.
   * 
   * @example
   * 99.1
   */
  confidence?: number;
  /**
   * @remarks
   * The logo category.
   * 
   * @example
   * logo_sns
   */
  label?: string;
  /**
   * @remarks
   * The logo name.
   * 
   * @example
   * Alibaba Cloud
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

export class ImageBatchModerationResponseBodyDataResultsExtLogoData extends $dara.Model {
  /**
   * @remarks
   * The location information of the logo.
   */
  location?: ImageBatchModerationResponseBodyDataResultsExtLogoDataLocation;
  /**
   * @remarks
   * The logo information.
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

export class ImageBatchModerationResponseBodyDataResultsExtPublicFigureLocation extends $dara.Model {
  /**
   * @remarks
   * The height of the text area, in pixels.
   * 
   * @example
   * 440
   */
  h?: number;
  /**
   * @remarks
   * The width of the text area, in pixels.
   * 
   * @example
   * 330
   */
  w?: number;
  /**
   * @remarks
   * The distance from the upper-left corner of the text area to the y-axis, with the upper-left corner of the image as the coordinate origin, in pixels.
   * 
   * @example
   * 11
   */
  x?: number;
  /**
   * @remarks
   * The distance from the upper-left corner of the text area to the x-axis, with the upper-left corner of the image as the coordinate origin, in pixels.
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

export class ImageBatchModerationResponseBodyDataResultsExtPublicFigure extends $dara.Model {
  /**
   * @remarks
   * The ID of the recognized figure.
   * 
   * @example
   * 12324222
   */
  figureId?: string;
  /**
   * @remarks
   * The name of the recognized figure.
   * 
   * @example
   * xxxxx
   */
  figureName?: string;
  /**
   * @remarks
   * The location information of the logo.
   */
  location?: ImageBatchModerationResponseBodyDataResultsExtPublicFigureLocation[];
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
      location: { 'type': 'array', 'itemType': ImageBatchModerationResponseBodyDataResultsExtPublicFigureLocation },
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

export class ImageBatchModerationResponseBodyDataResultsExtTextInImageCustomText extends $dara.Model {
  /**
   * @remarks
   * The custom words. Separate multiple words with commas.
   * 
   * @example
   * Custom word 1,Custom word 2
   */
  keyWords?: string;
  /**
   * @remarks
   * The ID of the custom library.
   * 
   * @example
   * 123456
   */
  libId?: string;
  /**
   * @remarks
   * The name of the custom library.
   * 
   * @example
   * Custom library 1
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

export class ImageBatchModerationResponseBodyDataResultsExtTextInImageOcrResultLocation extends $dara.Model {
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
   * The distance from the upper-left corner of the text area to the y-axis, with the upper-left corner of the image as the coordinate origin, in pixels.
   * 
   * @example
   * 11
   */
  x?: number;
  /**
   * @remarks
   * The distance from the upper-left corner of the text area to the x-axis, with the upper-left corner of the image as the coordinate origin, in pixels.
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

export class ImageBatchModerationResponseBodyDataResultsExtTextInImageOcrResult extends $dara.Model {
  /**
   * @remarks
   * The coordinate information of the text line.
   */
  location?: ImageBatchModerationResponseBodyDataResultsExtTextInImageOcrResultLocation;
  /**
   * @remarks
   * The text information.
   * 
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
      location: ImageBatchModerationResponseBodyDataResultsExtTextInImageOcrResultLocation,
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

export class ImageBatchModerationResponseBodyDataResultsExtTextInImage extends $dara.Model {
  /**
   * @remarks
   * The custom library ID, custom library name, and custom words returned when a custom text library is matched.
   */
  customText?: ImageBatchModerationResponseBodyDataResultsExtTextInImageCustomText[];
  /**
   * @remarks
   * The text information of each line recognized in the image.
   */
  ocrResult?: ImageBatchModerationResponseBodyDataResultsExtTextInImageOcrResult[];
  /**
   * @remarks
   * The matched risk keywords.
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
      customText: { 'type': 'array', 'itemType': ImageBatchModerationResponseBodyDataResultsExtTextInImageCustomText },
      ocrResult: { 'type': 'array', 'itemType': ImageBatchModerationResponseBodyDataResultsExtTextInImageOcrResult },
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

export class ImageBatchModerationResponseBodyDataResultsExt extends $dara.Model {
  /**
   * @remarks
   * The list of hits in custom image libraries.
   */
  customImage?: ImageBatchModerationResponseBodyDataResultsExtCustomImage[];
  /**
   * @remarks
   * The logo information.
   */
  logoData?: ImageBatchModerationResponseBodyDataResultsExtLogoData;
  /**
   * @remarks
   * The list of public figures.
   */
  publicFigure?: ImageBatchModerationResponseBodyDataResultsExtPublicFigure[];
  /**
   * @remarks
   * The text information detected in the image.
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

export class ImageBatchModerationResponseBodyDataResultsResult extends $dara.Model {
  /**
   * @remarks
   * The confidence score, ranging from 0 to 100, rounded to two decimal places. Some labels do not have a confidence score.
   * 
   * @example
   * 81.22
   */
  confidence?: number;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * No risk detected
   */
  description?: string;
  /**
   * @remarks
   * The label returned after image content detection. Multiple labels and scores may be detected for the same image.
   * 
   * @example
   * violent_explosion
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      description: 'Description',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      description: 'string',
      label: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageBatchModerationResponseBodyDataResults extends $dara.Model {
  /**
   * @remarks
   * The auxiliary reference information for the image.
   */
  ext?: ImageBatchModerationResponseBodyDataResultsExt;
  /**
   * @remarks
   * The array of parameter results, such as risk labels and confidence scores, for image detection.
   */
  result?: ImageBatchModerationResponseBodyDataResultsResult[];
  /**
   * @remarks
   * The risk level.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * The detection service supported by Image Moderation Enhanced Edition.
   * 
   * @example
   * baselineCheck
   */
  service?: string;
  static names(): { [key: string]: string } {
    return {
      ext: 'Ext',
      result: 'Result',
      riskLevel: 'RiskLevel',
      service: 'Service',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ext: ImageBatchModerationResponseBodyDataResultsExt,
      result: { 'type': 'array', 'itemType': ImageBatchModerationResponseBodyDataResultsResult },
      riskLevel: 'string',
      service: 'string',
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

export class ImageBatchModerationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The data ID of the moderation object.
   * 
   * @example
   * 26769ada6e264e7ba9aa048241e12be9
   */
  dataId?: string;
  /**
   * @remarks
   * The ID of the manual review task.
   * 
   * @example
   * xxxxx-xxxxx
   */
  manualTaskId?: string;
  /**
   * @remarks
   * The array of parameter results, such as risk labels and confidence scores, for image detection.
   */
  result?: ImageBatchModerationResponseBodyDataResult[];
  /**
   * @remarks
   * The array of parameter results, such as risk labels and confidence scores, for image detection of each service.
   */
  results?: ImageBatchModerationResponseBodyDataResults[];
  /**
   * @remarks
   * The risk level.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      manualTaskId: 'ManualTaskId',
      result: 'Result',
      results: 'Results',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      manualTaskId: 'string',
      result: { 'type': 'array', 'itemType': ImageBatchModerationResponseBodyDataResult },
      results: { 'type': 'array', 'itemType': ImageBatchModerationResponseBodyDataResults },
      riskLevel: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageBatchModerationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The results of the image content moderation.
   */
  data?: ImageBatchModerationResponseBodyData;
  /**
   * @remarks
   * The response message for the request.
   * 
   * @example
   * success
   */
  msg?: string;
  /**
   * @remarks
   * The ID of the request. It is a unique identifier generated by Alibaba Cloud for the request and can be used to troubleshoot and locate issues.
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
      data: ImageBatchModerationResponseBodyData,
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

