// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ContentItem } from "./ContentItem";


export class GetDocExtractionResultResponseBodyDataKvListInfoContextConfidence extends $dara.Model {
  /**
   * @remarks
   * Key confidence level
   * 
   * @example
   * 0.9994202852249146
   */
  keyConfidence?: number;
  /**
   * @remarks
   * value confidence level
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

export class GetDocExtractionResultResponseBodyDataKvListInfoContext extends $dara.Model {
  /**
   * @remarks
   * Confidence level
   */
  confidence?: GetDocExtractionResultResponseBodyDataKvListInfoContextConfidence;
  /**
   * @remarks
   * Details of key recall information
   */
  key?: ContentItem[];
  /**
   * @remarks
   * Details of value recall information
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
      confidence: GetDocExtractionResultResponseBodyDataKvListInfoContextConfidence,
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

export class GetDocExtractionResultResponseBodyDataKvListInfo extends $dara.Model {
  /**
   * @remarks
   * Recalled content
   */
  context?: GetDocExtractionResultResponseBodyDataKvListInfoContext;
  /**
   * @remarks
   * Field key name
   * 
   * @example
   * Tenant
   */
  keyName?: string;
  /**
   * @remarks
   * Field key value
   * 
   * @example
   * Alibaba Cloud XXX Co., Ltd.
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
      context: GetDocExtractionResultResponseBodyDataKvListInfoContext,
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

export class GetDocExtractionResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Details of document extraction results
   */
  kvListInfo?: GetDocExtractionResultResponseBodyDataKvListInfo[];
  static names(): { [key: string]: string } {
    return {
      kvListInfo: 'kvListInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kvListInfo: { 'type': 'array', 'itemType': GetDocExtractionResultResponseBodyDataKvListInfo },
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

export class GetDocExtractionResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * Returned data structure.
   */
  data?: GetDocExtractionResultResponseBodyData;
  /**
   * @remarks
   * ID of the request
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
      data: GetDocExtractionResultResponseBodyData,
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

