// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ContentItem } from "./ContentItem";


export class AnalyzeVlRealtimeResponseBodyDataKvListInfoContextConfidence extends $dara.Model {
  /**
   * @remarks
   * The confidence level of the key.
   * 
   * @example
   * 0.9994202852249146
   */
  keyConfidence?: number;
  /**
   * @remarks
   * The confidence level of the value.
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

export class AnalyzeVlRealtimeResponseBodyDataKvListInfoContext extends $dara.Model {
  /**
   * @remarks
   * The confidence level.
   */
  confidence?: AnalyzeVlRealtimeResponseBodyDataKvListInfoContextConfidence;
  /**
   * @remarks
   * The details of the recalled key information.
   */
  key?: ContentItem[];
  /**
   * @remarks
   * The details of the recalled value information.
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
      confidence: AnalyzeVlRealtimeResponseBodyDataKvListInfoContextConfidence,
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

export class AnalyzeVlRealtimeResponseBodyDataKvListInfo extends $dara.Model {
  /**
   * @remarks
   * The recalled content.
   */
  context?: AnalyzeVlRealtimeResponseBodyDataKvListInfoContext;
  /**
   * @remarks
   * The name of the key.
   * 
   * @example
   * username
   */
  keyName?: string;
  /**
   * @remarks
   * The value of the key.
   * 
   * @example
   * bob
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
      context: AnalyzeVlRealtimeResponseBodyDataKvListInfoContext,
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

export class AnalyzeVlRealtimeResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The details of the document extraction result.
   */
  kvListInfo?: AnalyzeVlRealtimeResponseBodyDataKvListInfo[];
  static names(): { [key: string]: string } {
    return {
      kvListInfo: 'kvListInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kvListInfo: { 'type': 'array', 'itemType': AnalyzeVlRealtimeResponseBodyDataKvListInfo },
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

export class AnalyzeVlRealtimeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result.
   */
  data?: AnalyzeVlRealtimeResponseBodyData;
  /**
   * @remarks
   * The request ID.
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
      data: AnalyzeVlRealtimeResponseBodyData,
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

