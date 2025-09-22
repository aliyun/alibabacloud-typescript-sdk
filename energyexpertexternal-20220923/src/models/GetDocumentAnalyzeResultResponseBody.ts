// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ContentItem } from "./ContentItem";


export class GetDocumentAnalyzeResultResponseBodyDataKvListInfoContextConfidence extends $dara.Model {
  /**
   * @remarks
   * Confidence of Key
   * 
   * @example
   * 0.9994202852249146
   */
  keyConfidence?: number;
  /**
   * @remarks
   * Confidence of Value
   * 
   * @example
   * 0.9794202852249146
   */
  valueConfidence?: number;
  static names(): { [key: string]: string } {
    return {
      keyConfidence: 'keyConfidence',
      valueConfidence: 'valueConfidence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyConfidence: 'number',
      valueConfidence: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentAnalyzeResultResponseBodyDataKvListInfoContext extends $dara.Model {
  /**
   * @remarks
   * Confidence
   */
  confidence?: GetDocumentAnalyzeResultResponseBodyDataKvListInfoContextConfidence;
  /**
   * @remarks
   * Key Recall Information
   */
  key?: ContentItem[];
  /**
   * @remarks
   * Value Recall Information
   */
  value?: ContentItem[];
  static names(): { [key: string]: string } {
    return {
      confidence: 'confidence',
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: GetDocumentAnalyzeResultResponseBodyDataKvListInfoContextConfidence,
      key: { 'type': 'array', 'itemType': ContentItem },
      value: { 'type': 'array', 'itemType': ContentItem },
    };
  }

  validate() {
    if(this.confidence && typeof (this.confidence as any).validate === 'function') {
      (this.confidence as any).validate();
    }
    if(Array.isArray(this.key)) {
      $dara.Model.validateArray(this.key);
    }
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentAnalyzeResultResponseBodyDataKvListInfo extends $dara.Model {
  /**
   * @remarks
   * Recalled Content
   */
  context?: GetDocumentAnalyzeResultResponseBodyDataKvListInfoContext;
  /**
   * @remarks
   * Field Key Name
   * 
   * @example
   * Tenant
   */
  keyName?: string;
  /**
   * @remarks
   * Field Key Value
   * 
   * @example
   * Aliyun XXX Co., Ltd.
   */
  keyValue?: string;
  static names(): { [key: string]: string } {
    return {
      context: 'context',
      keyName: 'keyName',
      keyValue: 'keyValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: GetDocumentAnalyzeResultResponseBodyDataKvListInfoContext,
      keyName: 'string',
      keyValue: 'string',
    };
  }

  validate() {
    if(this.context && typeof (this.context as any).validate === 'function') {
      (this.context as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentAnalyzeResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Document Parsing Result
   */
  kvListInfo?: GetDocumentAnalyzeResultResponseBodyDataKvListInfo[];
  static names(): { [key: string]: string } {
    return {
      kvListInfo: 'kvListInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kvListInfo: { 'type': 'array', 'itemType': GetDocumentAnalyzeResultResponseBodyDataKvListInfo },
    };
  }

  validate() {
    if(Array.isArray(this.kvListInfo)) {
      $dara.Model.validateArray(this.kvListInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentAnalyzeResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * Returned Data
   */
  data?: GetDocumentAnalyzeResultResponseBodyData;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 83A5A7DD-8974-5769-952E-590A97BEA34E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDocumentAnalyzeResultResponseBodyData,
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

