// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageTranslationProResponseBodyDataGenFilesEditInfoGoodsRects extends $dara.Model {
  /**
   * @remarks
   * The rotation angle of the text box in degrees. A value less than 1 indicates a horizontal text box.
   * 
   * @example
   * 0
   */
  degree?: number;
  /**
   * @remarks
   * The height.
   * 
   * @example
   * 0
   */
  height?: number;
  /**
   * @remarks
   * The left coordinate.
   * 
   * @example
   * 0
   */
  left?: number;
  /**
   * @remarks
   * The top coordinate.
   * 
   * @example
   * 0
   */
  top?: number;
  /**
   * @remarks
   * The width.
   * 
   * @example
   * 0
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

export class ImageTranslationProResponseBodyDataGenFilesEditInfoTextAreasTextsImageRect extends $dara.Model {
  /**
   * @remarks
   * The rotation angle of the text box in degrees. A value less than 1 indicates a horizontal text box.
   * 
   * @example
   * 0
   */
  degree?: number;
  /**
   * @remarks
   * The height.
   * 
   * @example
   * 54
   */
  height?: number;
  /**
   * @remarks
   * The left coordinate.
   * 
   * @example
   * 43
   */
  left?: number;
  /**
   * @remarks
   * The top coordinate.
   * 
   * @example
   * 83
   */
  top?: number;
  /**
   * @remarks
   * The width.
   * 
   * @example
   * 418
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

export class ImageTranslationProResponseBodyDataGenFilesEditInfoTextAreasTextsTextRect extends $dara.Model {
  /**
   * @remarks
   * The rotation angle of the text box in degrees. A value less than 1 indicates a horizontal text box.
   * 
   * @example
   * 0
   */
  degree?: number;
  /**
   * @remarks
   * The height.
   * 
   * @example
   * 30
   */
  height?: number;
  /**
   * @remarks
   * The left coordinate.
   * 
   * @example
   * 8
   */
  left?: number;
  /**
   * @remarks
   * The top coordinate.
   * 
   * @example
   * 95
   */
  top?: number;
  /**
   * @remarks
   * The width.
   * 
   * @example
   * 488
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

export class ImageTranslationProResponseBodyDataGenFilesEditInfoTextAreasTexts extends $dara.Model {
  /**
   * @remarks
   * The color of the translated text.
   * 
   * @example
   * #515151
   */
  color?: string;
  /**
   * @remarks
   * The font size of the translated text.
   * 
   * @example
   * 29
   */
  fontsize?: number;
  /**
   * @remarks
   * The horizontal layout. Valid values: center, left, right.
   * 
   * @example
   * center
   */
  horizontalLayout?: string;
  /**
   * @remarks
   * The coordinates of the image repair area.
   */
  imageRect?: ImageTranslationProResponseBodyDataGenFilesEditInfoTextAreasTextsImageRect;
  /**
   * @remarks
   * The target language code for translation.
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * The number of lines in the text box.
   * 
   * @example
   * 1
   */
  lineCount?: number;
  /**
   * @remarks
   * The Ovis model error message and execution time.
   * 
   * @example
   * | ovis time: 0.748
   */
  ovisErrMsg?: string;
  /**
   * @remarks
   * The coordinates of the text box area.
   */
  textRect?: ImageTranslationProResponseBodyDataGenFilesEditInfoTextAreasTextsTextRect;
  /**
   * @remarks
   * Indicates whether the TextItem is valid. The item is invalid if this value does not exist or is false.
   * 
   * @example
   * true
   */
  valid?: boolean;
  /**
   * @remarks
   * The translated text content.
   * 
   * @example
   * Adorable Design · Crisp Bell Sound
   */
  value?: string;
  /**
   * @remarks
   * The vertical layout. Valid values: center, top, down.
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
      ovisErrMsg: 'OvisErrMsg',
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
      imageRect: ImageTranslationProResponseBodyDataGenFilesEditInfoTextAreasTextsImageRect,
      language: 'string',
      lineCount: 'number',
      ovisErrMsg: 'string',
      textRect: ImageTranslationProResponseBodyDataGenFilesEditInfoTextAreasTextsTextRect,
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

export class ImageTranslationProResponseBodyDataGenFilesEditInfoTextAreas extends $dara.Model {
  /**
   * @remarks
   * The text color, such as #ffffff.
   * 
   * @example
   * #515151
   */
  color?: string;
  /**
   * @remarks
   * The original text before translation.
   * 
   * @example
   * 萌趣造型·清脆响铃
   */
  content?: string;
  /**
   * @remarks
   * The font size.
   * 
   * @example
   * 32
   */
  fontsize?: number;
  /**
   * @remarks
   * The horizontal layout. Valid values: center, left, right.
   * 
   * @example
   * left
   */
  horizontalLayout?: string;
  /**
   * @remarks
   * The number of lines in the text box.
   * 
   * @example
   * 1
   */
  lineCount?: number;
  /**
   * @remarks
   * The list of translated texts. Each element corresponds to the translation result for a target language.
   */
  texts?: ImageTranslationProResponseBodyDataGenFilesEditInfoTextAreasTexts[];
  /**
   * @remarks
   * The vertical layout. Valid values: center, top, down.
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
      texts: { 'type': 'array', 'itemType': ImageTranslationProResponseBodyDataGenFilesEditInfoTextAreasTexts },
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

export class ImageTranslationProResponseBodyDataGenFilesEditInfo extends $dara.Model {
  /**
   * @remarks
   * The list of font types.
   */
  font?: string[];
  /**
   * @remarks
   * The coordinate information of the product bounding box area.
   */
  goodsRects?: ImageTranslationProResponseBodyDataGenFilesEditInfoGoodsRects;
  /**
   * @remarks
   * The list of target languages for translation.
   */
  languages?: string[];
  /**
   * @remarks
   * The URL of the image with all text removed.
   * 
   * @example
   * http://dashscope-a717.oss-cn-beijing.aliyuncs.com/repaired.png
   */
  repairedUrl?: string;
  /**
   * @remarks
   * The collection of global IDs of translated images.
   */
  resultImageIds?: string[];
  /**
   * @remarks
   * The list of text boxes, which contains information about all recognized text areas.
   */
  textAreas?: ImageTranslationProResponseBodyDataGenFilesEditInfoTextAreas[];
  static names(): { [key: string]: string } {
    return {
      font: 'Font',
      goodsRects: 'GoodsRects',
      languages: 'Languages',
      repairedUrl: 'RepairedUrl',
      resultImageIds: 'ResultImageIds',
      textAreas: 'TextAreas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      font: { 'type': 'array', 'itemType': 'string' },
      goodsRects: ImageTranslationProResponseBodyDataGenFilesEditInfoGoodsRects,
      languages: { 'type': 'array', 'itemType': 'string' },
      repairedUrl: 'string',
      resultImageIds: { 'type': 'array', 'itemType': 'string' },
      textAreas: { 'type': 'array', 'itemType': ImageTranslationProResponseBodyDataGenFilesEditInfoTextAreas },
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
    if(Array.isArray(this.resultImageIds)) {
      $dara.Model.validateArray(this.resultImageIds);
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

export class ImageTranslationProResponseBodyDataGenFilesResultList extends $dara.Model {
  /**
   * @remarks
   * The URL of the translated image file.
   * 
   * @example
   * http://dashscope-a717.oss-cn-beijing.aliyuncs.com/xxx.jpg
   */
  fileUrl?: string;
  /**
   * @remarks
   * The target language for translation.
   * 
   * @example
   * en
   */
  language?: string;
  static names(): { [key: string]: string } {
    return {
      fileUrl: 'FileUrl',
      language: 'Language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrl: 'string',
      language: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageTranslationProResponseBodyDataGenFiles extends $dara.Model {
  /**
   * @remarks
   * The editor information, which contains recognized information such as text areas, product areas, and fonts.
   */
  editInfo?: ImageTranslationProResponseBodyDataGenFilesEditInfo;
  /**
   * @remarks
   * The collection of translation results.
   */
  resultList?: ImageTranslationProResponseBodyDataGenFilesResultList[];
  /**
   * @remarks
   * The URL of the original image.
   * 
   * @example
   * https://img.alicdn.com/imgextra/i3/O1CN01HTDhDi28Fd85ZYs7H_!!6000000007903-0-tps-800-800.jpg
   */
  srcImage?: string;
  static names(): { [key: string]: string } {
    return {
      editInfo: 'EditInfo',
      resultList: 'ResultList',
      srcImage: 'SrcImage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      editInfo: ImageTranslationProResponseBodyDataGenFilesEditInfo,
      resultList: { 'type': 'array', 'itemType': ImageTranslationProResponseBodyDataGenFilesResultList },
      srcImage: 'string',
    };
  }

  validate() {
    if(this.editInfo && typeof (this.editInfo as any).validate === 'function') {
      (this.editInfo as any).validate();
    }
    if(Array.isArray(this.resultList)) {
      $dara.Model.validateArray(this.resultList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageTranslationProResponseBodyDataResultList extends $dara.Model {
  /**
   * @remarks
   * The URL of the image translation result image.
   * 
   * @example
   * http://dashscope-a717.oss-cn-beijing.aliyuncs.com/xxx.jpg
   */
  fileUrl?: string;
  /**
   * @remarks
   * The target language for image translation.
   * 
   * @example
   * en
   */
  language?: string;
  static names(): { [key: string]: string } {
    return {
      fileUrl: 'FileUrl',
      language: 'Language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrl: 'string',
      language: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageTranslationProResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The editor protocol, which contains the translation result files and editing information.
   */
  genFiles?: ImageTranslationProResponseBodyDataGenFiles[];
  /**
   * @remarks
   * The list of image translation results.
   */
  resultList?: ImageTranslationProResponseBodyDataResultList[];
  /**
   * @remarks
   * The asynchronous task ID. This is not returned for synchronous calls.
   * 
   * @example
   * abc123-task-id
   */
  taskId?: string;
  /**
   * @remarks
   * The usage information, including the number of processed images.
   */
  usageMap?: { [key: string]: number };
  static names(): { [key: string]: string } {
    return {
      genFiles: 'GenFiles',
      resultList: 'ResultList',
      taskId: 'TaskId',
      usageMap: 'UsageMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      genFiles: { 'type': 'array', 'itemType': ImageTranslationProResponseBodyDataGenFiles },
      resultList: { 'type': 'array', 'itemType': ImageTranslationProResponseBodyDataResultList },
      taskId: 'string',
      usageMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.genFiles)) {
      $dara.Model.validateArray(this.genFiles);
    }
    if(Array.isArray(this.resultList)) {
      $dara.Model.validateArray(this.resultList);
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

export class ImageTranslationProResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. A value of 200 indicates success. For other response codes, see the error codes.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The translation result data. ResultList contains the URL of the translation result. GenFiles contains EditInfo with the recognized text information.
   */
  data?: ImageTranslationProResponseBodyData;
  /**
   * @remarks
   * The error message. "Success" is returned for successful calls. A specific error message is returned for failed calls, such as "The content contains sensitive data. Try other input.".
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
   * 61785C32-80C2-19A3-9E55-2C3702C84B40
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. A value of true indicates success. A value of false indicates failure.
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
      data: ImageTranslationProResponseBodyData,
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

