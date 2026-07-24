// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageTranslationStandardResponseBodyDataEditInfoGoodsRects extends $dara.Model {
  /**
   * @remarks
   * The rotation angle.
   */
  degree?: number;
  /**
   * @remarks
   * The height.
   */
  height?: number;
  /**
   * @remarks
   * The left coordinate.
   */
  left?: number;
  /**
   * @remarks
   * The top coordinate.
   */
  top?: number;
  /**
   * @remarks
   * The width.
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      degree: 'Degree',
      height: 'Height',
      left: 'Left',
      top: 'Top',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      degree: 'number',
      height: 'number',
      left: 'number',
      top: 'number',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageTranslationStandardResponseBodyDataEditInfoTextAreasTextsImageRect extends $dara.Model {
  /**
   * @remarks
   * The rotation angle.
   */
  degree?: number;
  /**
   * @remarks
   * The height.
   */
  height?: number;
  /**
   * @remarks
   * The left coordinate.
   */
  left?: number;
  /**
   * @remarks
   * The top coordinate.
   */
  top?: number;
  /**
   * @remarks
   * The width.
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      degree: 'Degree',
      height: 'Height',
      left: 'Left',
      top: 'Top',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      degree: 'number',
      height: 'number',
      left: 'number',
      top: 'number',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageTranslationStandardResponseBodyDataEditInfoTextAreasTextsTextRect extends $dara.Model {
  /**
   * @remarks
   * The rotation angle.
   */
  degree?: number;
  /**
   * @remarks
   * The height.
   */
  height?: number;
  /**
   * @remarks
   * The left coordinate.
   */
  left?: number;
  /**
   * @remarks
   * The top coordinate.
   */
  top?: number;
  /**
   * @remarks
   * The width.
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      degree: 'Degree',
      height: 'Height',
      left: 'Left',
      top: 'Top',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      degree: 'number',
      height: 'number',
      left: 'number',
      top: 'number',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageTranslationStandardResponseBodyDataEditInfoTextAreasTexts extends $dara.Model {
  /**
   * @remarks
   * The color.
   * 
   * @example
   * #9d7746
   */
  color?: string;
  /**
   * @remarks
   * The font size.
   * 
   * @example
   * 42
   */
  fontsize?: number;
  /**
   * @remarks
   * The horizontal layout.
   * 
   * @example
   * left
   */
  horizontalLayout?: string;
  /**
   * @remarks
   * The image area.
   */
  imageRect?: ImageTranslationStandardResponseBodyDataEditInfoTextAreasTextsImageRect;
  /**
   * @remarks
   * The language.
   * 
   * @example
   * zh
   */
  language?: string;
  /**
   * @remarks
   * The line count.
   * 
   * @example
   * 1
   */
  lineCount?: number;
  /**
   * @remarks
   * The text area.
   */
  textRect?: ImageTranslationStandardResponseBodyDataEditInfoTextAreasTextsTextRect;
  /**
   * @remarks
   * Indicates whether the text is valid.
   * 
   * @example
   * true
   */
  valid?: boolean;
  /**
   * @remarks
   * The text value.
   * 
   * @example
   * Solid Wood Wardrobe.
   */
  value?: string;
  /**
   * @remarks
   * The vertical layout.
   * 
   * @example
   * center
   */
  verticalLayout?: string;
  static names(): { [key: string]: string } {
    return {
      color: 'Color',
      fontsize: 'Fontsize',
      horizontalLayout: 'HorizontalLayout',
      imageRect: 'ImageRect',
      language: 'Language',
      lineCount: 'LineCount',
      textRect: 'TextRect',
      valid: 'Valid',
      value: 'Value',
      verticalLayout: 'VerticalLayout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      color: 'string',
      fontsize: 'number',
      horizontalLayout: 'string',
      imageRect: ImageTranslationStandardResponseBodyDataEditInfoTextAreasTextsImageRect,
      language: 'string',
      lineCount: 'number',
      textRect: ImageTranslationStandardResponseBodyDataEditInfoTextAreasTextsTextRect,
      valid: 'boolean',
      value: 'string',
      verticalLayout: 'string',
    };
  }

  validate() {
    if(this.imageRect && typeof (this.imageRect as any).validate === 'function') {
      (this.imageRect as any).validate();
    }
    if(this.textRect && typeof (this.textRect as any).validate === 'function') {
      (this.textRect as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageTranslationStandardResponseBodyDataEditInfoTextAreas extends $dara.Model {
  /**
   * @remarks
   * The color.
   * 
   * @example
   * #000000
   */
  color?: string;
  /**
   * @remarks
   * The content.
   * 
   * @example
   * SOLIDWOOD WARDROBE
   */
  content?: string;
  /**
   * @remarks
   * The font size.
   * 
   * @example
   * 36
   */
  fontsize?: number;
  /**
   * @remarks
   * The horizontal layout.
   * 
   * @example
   * left
   */
  horizontalLayout?: string;
  /**
   * @remarks
   * The line count.
   * 
   * @example
   * 2
   */
  lineCount?: number;
  /**
   * @remarks
   * The list of texts.
   */
  texts?: ImageTranslationStandardResponseBodyDataEditInfoTextAreasTexts[];
  /**
   * @remarks
   * The vertical layout.
   * 
   * @example
   * center
   */
  verticalLayout?: string;
  static names(): { [key: string]: string } {
    return {
      color: 'Color',
      content: 'Content',
      fontsize: 'Fontsize',
      horizontalLayout: 'HorizontalLayout',
      lineCount: 'LineCount',
      texts: 'Texts',
      verticalLayout: 'VerticalLayout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      color: 'string',
      content: 'string',
      fontsize: 'number',
      horizontalLayout: 'string',
      lineCount: 'number',
      texts: { 'type': 'array', 'itemType': ImageTranslationStandardResponseBodyDataEditInfoTextAreasTexts },
      verticalLayout: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.texts)) {
      $dara.Model.validateArray(this.texts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageTranslationStandardResponseBodyDataEditInfo extends $dara.Model {
  /**
   * @remarks
   * The list of fonts used.
   * 
   * @example
   * ["NotoSansSC-Bold"]
   */
  font?: string[];
  /**
   * @remarks
   * The product area rectangles.
   */
  goodsRects?: ImageTranslationStandardResponseBodyDataEditInfoGoodsRects;
  /**
   * @remarks
   * The product image URL.
   * 
   * @example
   * https://xiuxiu-pro.meitudata.com/posters/34d78f9157e5560a4d612949ca6f6485.jpg
   */
  goodsUrl?: string;
  /**
   * @remarks
   * The list of target languages.
   * 
   * @example
   * ["zh"]
   */
  languages?: string[];
  /**
   * @remarks
   * The original image URL.
   * 
   * @example
   * https://xiuxiu-pro.meitudata.com/posters/34d78f9157e5560a4d612949ca6f6485.jpg
   */
  pictUrl?: string;
  /**
   * @remarks
   * The repaired image URL.
   * 
   * @example
   * http://dashscope-a717.oss-cn-beijing.aliyuncs.com/xxx.png
   */
  repairedUrl?: string;
  /**
   * @remarks
   * The list of repaired image URLs.
   * 
   * @example
   * ["http://dashscope-a717.oss-cn-beijing.aliyuncs.com/xxx.png"]
   */
  repairedUrls?: string[];
  /**
   * @remarks
   * The list of result image IDs.
   * 
   * @example
   * ["c18ab570-81aa-11f1-a14a-5ee00dcfdc3c"]
   */
  resultImageIds?: string[];
  /**
   * @remarks
   * The list of result image URLs.
   * 
   * @example
   * ["http://dashscope-a717.oss-cn-beijing.aliyuncs.com/xxx.jpg"]
   */
  resultUrls?: string[];
  /**
   * @remarks
   * The list of text areas.
   */
  textAreas?: ImageTranslationStandardResponseBodyDataEditInfoTextAreas[];
  static names(): { [key: string]: string } {
    return {
      font: 'Font',
      goodsRects: 'GoodsRects',
      goodsUrl: 'GoodsUrl',
      languages: 'Languages',
      pictUrl: 'PictUrl',
      repairedUrl: 'RepairedUrl',
      repairedUrls: 'RepairedUrls',
      resultImageIds: 'ResultImageIds',
      resultUrls: 'ResultUrls',
      textAreas: 'TextAreas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      font: { 'type': 'array', 'itemType': 'string' },
      goodsRects: ImageTranslationStandardResponseBodyDataEditInfoGoodsRects,
      goodsUrl: 'string',
      languages: { 'type': 'array', 'itemType': 'string' },
      pictUrl: 'string',
      repairedUrl: 'string',
      repairedUrls: { 'type': 'array', 'itemType': 'string' },
      resultImageIds: { 'type': 'array', 'itemType': 'string' },
      resultUrls: { 'type': 'array', 'itemType': 'string' },
      textAreas: { 'type': 'array', 'itemType': ImageTranslationStandardResponseBodyDataEditInfoTextAreas },
    };
  }

  validate() {
    if(Array.isArray(this.font)) {
      $dara.Model.validateArray(this.font);
    }
    if(this.goodsRects && typeof (this.goodsRects as any).validate === 'function') {
      (this.goodsRects as any).validate();
    }
    if(Array.isArray(this.languages)) {
      $dara.Model.validateArray(this.languages);
    }
    if(Array.isArray(this.repairedUrls)) {
      $dara.Model.validateArray(this.repairedUrls);
    }
    if(Array.isArray(this.resultImageIds)) {
      $dara.Model.validateArray(this.resultImageIds);
    }
    if(Array.isArray(this.resultUrls)) {
      $dara.Model.validateArray(this.resultUrls);
    }
    if(Array.isArray(this.textAreas)) {
      $dara.Model.validateArray(this.textAreas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageTranslationStandardResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The edit information.
   */
  editInfo?: ImageTranslationStandardResponseBodyDataEditInfo;
  /**
   * @remarks
   * The URL of the image generated after image translation.
   * 
   * @example
   * http://dashscope-a717.oss-cn-beijing.aliyuncs.com/xxx.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * The usage information, including the number of images processed.
   * 
   * @example
   * {"ProcessedImageCount":1}
   */
  usageMap?: { [key: string]: number };
  static names(): { [key: string]: string } {
    return {
      editInfo: 'EditInfo',
      imageUrl: 'ImageUrl',
      usageMap: 'UsageMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      editInfo: ImageTranslationStandardResponseBodyDataEditInfo,
      imageUrl: 'string',
      usageMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
    };
  }

  validate() {
    if(this.editInfo && typeof (this.editInfo as any).validate === 'function') {
      (this.editInfo as any).validate();
    }
    if(this.usageMap) {
      $dara.Model.validateMap(this.usageMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageTranslationStandardResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. A value of 200 indicates a successful call. For other response codes, refer to the error code information.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The translation result data, including the translated image URL and usage information.
   */
  data?: ImageTranslationStandardResponseBodyData;
  /**
   * @remarks
   * The error message. Returns "Success" for successful calls, and returns specific error information for failed calls.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID, which uniquely identifies the request.
   * 
   * @example
   * 1CEC4D94-905A-1ED1-A7B4-1BFEFFB3D850
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. A value of true indicates success, and a value of false indicates failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ImageTranslationStandardResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

