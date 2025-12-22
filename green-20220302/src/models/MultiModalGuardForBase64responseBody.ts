// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MultiModalGuardForBase64ResponseBodyDataDetailResult extends $dara.Model {
  /**
   * @example
   * 100
   */
  confidence?: number;
  /**
   * @example
   * 未检测出风险
   */
  description?: string;
  /**
   * @example
   * json格式数据
   */
  ext?: any;
  /**
   * @example
   * nonLable
   */
  label?: string;
  /**
   * @example
   * low
   */
  level?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      description: 'Description',
      ext: 'Ext',
      label: 'Label',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      description: 'string',
      ext: 'any',
      label: 'string',
      level: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MultiModalGuardForBase64ResponseBodyDataDetail extends $dara.Model {
  /**
   * @example
   * low
   */
  level?: string;
  result?: MultiModalGuardForBase64ResponseBodyDataDetailResult[];
  /**
   * @example
   * pass
   */
  suggestion?: string;
  /**
   * @example
   * contentModeration
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      level: 'Level',
      result: 'Result',
      suggestion: 'Suggestion',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'string',
      result: { 'type': 'array', 'itemType': MultiModalGuardForBase64ResponseBodyDataDetailResult },
      suggestion: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MultiModalGuardForBase64ResponseBodyData extends $dara.Model {
  /**
   * @example
   * xxx
   */
  dataId?: string;
  detail?: MultiModalGuardForBase64ResponseBodyDataDetail[];
  /**
   * @example
   * pass
   */
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      detail: 'Detail',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      detail: { 'type': 'array', 'itemType': MultiModalGuardForBase64ResponseBodyDataDetail },
      suggestion: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.detail)) {
      $dara.Model.validateArray(this.detail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MultiModalGuardForBase64ResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: MultiModalGuardForBase64ResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: MultiModalGuardForBase64ResponseBodyData,
      message: 'string',
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

