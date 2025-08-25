// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScanImageResponseBodyDataResultsSubResultsFrames extends $dara.Model {
  /**
   * @example
   * 89.85
   */
  rate?: number;
  /**
   * @example
   * http://xxx.xxx.com/xxx-0.jpg
   */
  URL?: string;
  static names(): { [key: string]: string } {
    return {
      rate: 'Rate',
      URL: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rate: 'number',
      URL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanImageResponseBodyDataResultsSubResultsHintWordsInfoList extends $dara.Model {
  /**
   * @example
   * abc
   */
  context?: string;
  static names(): { [key: string]: string } {
    return {
      context: 'Context',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanImageResponseBodyDataResultsSubResultsLogoDataList extends $dara.Model {
  /**
   * @example
   * 106
   */
  height?: number;
  /**
   * @example
   * abc
   */
  name?: string;
  /**
   * @example
   * TV
   */
  type?: string;
  /**
   * @example
   * 106
   */
  width?: number;
  /**
   * @example
   * 140
   */
  x?: number;
  /**
   * @example
   * 68
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      name: 'Name',
      type: 'Type',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      name: 'string',
      type: 'string',
      width: 'number',
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

export class ScanImageResponseBodyDataResultsSubResultsProgramCodeDataList extends $dara.Model {
  /**
   * @example
   * 413.0
   */
  height?: number;
  /**
   * @example
   * 402.0
   */
  width?: number;
  /**
   * @example
   * 11.0
   */
  x?: number;
  /**
   * @example
   * 0.0
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      width: 'number',
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

export class ScanImageResponseBodyDataResultsSubResultsSfaceDataListFaces extends $dara.Model {
  /**
   * @example
   * AliFace_0001234
   */
  id?: string;
  /**
   * @example
   * abc
   */
  name?: string;
  /**
   * @example
   * 91.54
   */
  rate?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      rate: 'Rate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      rate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanImageResponseBodyDataResultsSubResultsSfaceDataList extends $dara.Model {
  faces?: ScanImageResponseBodyDataResultsSubResultsSfaceDataListFaces[];
  /**
   * @example
   * 131
   */
  height?: number;
  /**
   * @example
   * 97
   */
  width?: number;
  /**
   * @example
   * 49
   */
  x?: number;
  /**
   * @example
   * 39
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      faces: 'Faces',
      height: 'Height',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faces: { 'type': 'array', 'itemType': ScanImageResponseBodyDataResultsSubResultsSfaceDataListFaces },
      height: 'number',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.faces)) {
      $dara.Model.validateArray(this.faces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanImageResponseBodyDataResultsSubResults extends $dara.Model {
  frames?: ScanImageResponseBodyDataResultsSubResultsFrames[];
  hintWordsInfoList?: ScanImageResponseBodyDataResultsSubResultsHintWordsInfoList[];
  /**
   * @example
   * normal
   */
  label?: string;
  logoDataList?: ScanImageResponseBodyDataResultsSubResultsLogoDataList[];
  /**
   * @remarks
   * 1
   */
  OCRDataList?: string[];
  programCodeDataList?: ScanImageResponseBodyDataResultsSubResultsProgramCodeDataList[];
  /**
   * @example
   * 99.91
   */
  rate?: number;
  /**
   * @example
   * ad
   */
  scene?: string;
  sfaceDataList?: ScanImageResponseBodyDataResultsSubResultsSfaceDataList[];
  /**
   * @example
   * block
   */
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      frames: 'Frames',
      hintWordsInfoList: 'HintWordsInfoList',
      label: 'Label',
      logoDataList: 'LogoDataList',
      OCRDataList: 'OCRDataList',
      programCodeDataList: 'ProgramCodeDataList',
      rate: 'Rate',
      scene: 'Scene',
      sfaceDataList: 'SfaceDataList',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frames: { 'type': 'array', 'itemType': ScanImageResponseBodyDataResultsSubResultsFrames },
      hintWordsInfoList: { 'type': 'array', 'itemType': ScanImageResponseBodyDataResultsSubResultsHintWordsInfoList },
      label: 'string',
      logoDataList: { 'type': 'array', 'itemType': ScanImageResponseBodyDataResultsSubResultsLogoDataList },
      OCRDataList: { 'type': 'array', 'itemType': 'string' },
      programCodeDataList: { 'type': 'array', 'itemType': ScanImageResponseBodyDataResultsSubResultsProgramCodeDataList },
      rate: 'number',
      scene: 'string',
      sfaceDataList: { 'type': 'array', 'itemType': ScanImageResponseBodyDataResultsSubResultsSfaceDataList },
      suggestion: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.frames)) {
      $dara.Model.validateArray(this.frames);
    }
    if(Array.isArray(this.hintWordsInfoList)) {
      $dara.Model.validateArray(this.hintWordsInfoList);
    }
    if(Array.isArray(this.logoDataList)) {
      $dara.Model.validateArray(this.logoDataList);
    }
    if(Array.isArray(this.OCRDataList)) {
      $dara.Model.validateArray(this.OCRDataList);
    }
    if(Array.isArray(this.programCodeDataList)) {
      $dara.Model.validateArray(this.programCodeDataList);
    }
    if(Array.isArray(this.sfaceDataList)) {
      $dara.Model.validateArray(this.sfaceDataList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanImageResponseBodyDataResults extends $dara.Model {
  /**
   * @example
   * uuid-xxxx-xxx-1234
   */
  dataId?: string;
  /**
   * @example
   * http://xxx.xxx.xxx/xxx.jpg
   */
  imageURL?: string;
  subResults?: ScanImageResponseBodyDataResultsSubResults[];
  /**
   * @example
   * img4wlJcb7p4wH4lAP3111111-123456
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      imageURL: 'ImageURL',
      subResults: 'SubResults',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      imageURL: 'string',
      subResults: { 'type': 'array', 'itemType': ScanImageResponseBodyDataResultsSubResults },
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.subResults)) {
      $dara.Model.validateArray(this.subResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanImageResponseBodyData extends $dara.Model {
  results?: ScanImageResponseBodyDataResults[];
  static names(): { [key: string]: string } {
    return {
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      results: { 'type': 'array', 'itemType': ScanImageResponseBodyDataResults },
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanImageResponseBody extends $dara.Model {
  data?: ScanImageResponseBodyData;
  /**
   * @example
   * 69B41AE8-1234-1234-1234-12D395695D2D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ScanImageResponseBodyData,
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

