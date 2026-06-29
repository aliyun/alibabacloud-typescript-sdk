// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageTranslationProResponseBodyDataGenFilesEditInfoGoodsRects extends $dara.Model {
  /**
   * @remarks
   * Text box rotation angle in degrees. Values less than 1 indicate a horizontal text box
   * 
   * @example
   * 0
   */
  degree?: number;
  /**
   * @remarks
   * Height
   * 
   * @example
   * 0
   */
  height?: number;
  /**
   * @remarks
   * Left coordinate
   * 
   * @example
   * 0
   */
  left?: number;
  /**
   * @remarks
   * Top coordinate
   * 
   * @example
   * 0
   */
  top?: number;
  /**
   * @remarks
   * Width
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
   * Text box rotation angle in degrees. Values less than 1 indicate a horizontal text box
   * 
   * @example
   * 0
   */
  degree?: number;
  /**
   * @remarks
   * Height
   * 
   * @example
   * 54
   */
  height?: number;
  /**
   * @remarks
   * Left coordinate
   * 
   * @example
   * 43
   */
  left?: number;
  /**
   * @remarks
   * Top coordinate
   * 
   * @example
   * 83
   */
  top?: number;
  /**
   * @remarks
   * Width
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
   * Text box rotation angle in degrees. Values less than 1 indicate a horizontal text box
   * 
   * @example
   * 0
   */
  degree?: number;
  /**
   * @remarks
   * Height
   * 
   * @example
   * 30
   */
  height?: number;
  /**
   * @remarks
   * Left coordinate
   * 
   * @example
   * 8
   */
  left?: number;
  /**
   * @remarks
   * Top coordinate
   * 
   * @example
   * 95
   */
  top?: number;
  /**
   * @remarks
   * Width
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
   * Translated text color
   * 
   * @example
   * #515151
   */
  color?: string;
  /**
   * @remarks
   * Font size of the translated text
   * 
   * @example
   * 29
   */
  fontsize?: number;
  /**
   * @remarks
   * Horizontal layout mode. Available values: center, left, right
   * 
   * @example
   * center
   */
  horizontalLayout?: string;
  /**
   * @remarks
   * Image repair area coordinates
   */
  imageRect?: ImageTranslationProResponseBodyDataGenFilesEditInfoTextAreasTextsImageRect;
  /**
   * @remarks
   * Translation target language code
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * Number of lines in the text box
   * 
   * @example
   * 1
   */
  lineCount?: number;
  /**
   * @remarks
   * Ovis model error message and execution time
   * 
   * @example
   * | ovis time: 0.748
   */
  ovisErrMsg?: string;
  /**
   * @remarks
   * Text box area coordinates
   */
  textRect?: ImageTranslationProResponseBodyDataGenFilesEditInfoTextAreasTextsTextRect;
  /**
   * @remarks
   * Whether the TextItem is valid. It is invalid when this value does not exist or is false.
   * 
   * @example
   * true
   */
  valid?: boolean;
  /**
   * @remarks
   * Translated text content
   * 
   * @example
   * Adorable Design · Crisp Bell Sound
   */
  value?: string;
  /**
   * @remarks
   * Vertical layout mode. Available values: center, top, down
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
   * Text color, e.g., #ffffff
   * 
   * @example
   * #515151
   */
  color?: string;
  /**
   * @remarks
   * Original text before translation
   * 
   * @example
   * 萌趣造型·清脆响铃
   */
  content?: string;
  /**
   * @remarks
   * Font size
   * 
   * @example
   * 32
   */
  fontsize?: number;
  /**
   * @remarks
   * Horizontal layout mode. Available values: center, left, right
   * 
   * @example
   * left
   */
  horizontalLayout?: string;
  /**
   * @remarks
   * Number of lines in the text box
   * 
   * @example
   * 1
   */
  lineCount?: number;
  /**
   * @remarks
   * Translated text list, where each element corresponds to the translation result for one target language
   */
  texts?: ImageTranslationProResponseBodyDataGenFilesEditInfoTextAreasTexts[];
  /**
   * @remarks
   * Vertical layout mode. Available values: center, top, down
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
   * Font type list
   */
  font?: string[];
  /**
   * @remarks
   * Product bounding box area coordinate information
   */
  goodsRects?: ImageTranslationProResponseBodyDataGenFilesEditInfoGoodsRects;
  /**
   * @remarks
   * Translation target language list
   */
  languages?: string[];
  /**
   * @remarks
   * Image URL after all text has been inpainted
   * 
   * @example
   * http://dashscope-a717.oss-cn-beijing.aliyuncs.com/repaired.png
   */
  repairedUrl?: string;
  /**
   * @remarks
   * Collection of translated image global IDs
   */
  resultImageIds?: string[];
  /**
   * @remarks
   * Text box list, containing information about all recognized text areas
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
   * Translated image file URL
   * 
   * @example
   * http://dashscope-a717.oss-cn-beijing.aliyuncs.com/xxx.jpg
   */
  fileUrl?: string;
  /**
   * @remarks
   * Translation target language
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
   * Editor information, containing recognized information such as text areas, product areas, and fonts
   */
  editInfo?: ImageTranslationProResponseBodyDataGenFilesEditInfo;
  /**
   * @remarks
   * Translation result collection
   */
  resultList?: ImageTranslationProResponseBodyDataGenFilesResultList[];
  /**
   * @remarks
   * Original image URL
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
   * Image translation result image URL
   * 
   * @example
   * http://dashscope-a717.oss-cn-beijing.aliyuncs.com/xxx.jpg
   */
  fileUrl?: string;
  /**
   * @remarks
   * Image translation target language
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
   * Editor protocol, containing translation result files and editing information
   */
  genFiles?: ImageTranslationProResponseBodyDataGenFiles[];
  /**
   * @remarks
   * Image translation result list
   */
  resultList?: ImageTranslationProResponseBodyDataResultList[];
  /**
   * @remarks
   * Asynchronous task ID, not returned during synchronous calls.
   * 
   * @example
   * abc123-task-id
   */
  taskId?: string;
  /**
   * @remarks
   * Usage information, including the number of processed images, etc.
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
   * Response code. 200 indicates a successful call. For other response codes, refer to the error code documentation.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Translation result data. ResultList contains the URL of the translation result, and GenFiles contains EditInfo with recognized text information.
   */
  data?: ImageTranslationProResponseBodyData;
  /**
   * @remarks
   * Error message. Returns "Success" during normal calls. Returns specific error information during exceptions, such as "Content contains sensitive data, please try other input".
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Request ID, used to identify a unique request call.
   * 
   * @example
   * 61785C32-80C2-19A3-9E55-2C3702C84B40
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the call was successful. true indicates success, false indicates failure.
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

