// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecognizeQrCodeResponseBodyDataElementsResults extends $dara.Model {
  /**
   * @example
   * qrcode
   */
  label?: string;
  /**
   * @remarks
   * 1
   */
  qrCodesData?: string[];
  /**
   * @example
   * 99.91
   */
  rate?: number;
  /**
   * @example
   * review
   */
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      qrCodesData: 'QrCodesData',
      rate: 'Rate',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      qrCodesData: { 'type': 'array', 'itemType': 'string' },
      rate: 'number',
      suggestion: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.qrCodesData)) {
      $dara.Model.validateArray(this.qrCodesData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeQrCodeResponseBodyDataElements extends $dara.Model {
  /**
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/ocr/RecognizeQrCode/RecognizeQrCode6.jpg
   */
  imageURL?: string;
  results?: RecognizeQrCodeResponseBodyDataElementsResults[];
  /**
   * @example
   * img5iGtwVIxQzc4Nqy$L84yHd-1v****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      results: 'Results',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      results: { 'type': 'array', 'itemType': RecognizeQrCodeResponseBodyDataElementsResults },
      taskId: 'string',
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

export class RecognizeQrCodeResponseBodyData extends $dara.Model {
  elements?: RecognizeQrCodeResponseBodyDataElements[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': RecognizeQrCodeResponseBodyDataElements },
    };
  }

  validate() {
    if(Array.isArray(this.elements)) {
      $dara.Model.validateArray(this.elements);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeQrCodeResponseBody extends $dara.Model {
  data?: RecognizeQrCodeResponseBodyData;
  /**
   * @example
   * A53DC437-F883-4968-86D5-EB21FB044692
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
      data: RecognizeQrCodeResponseBodyData,
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

