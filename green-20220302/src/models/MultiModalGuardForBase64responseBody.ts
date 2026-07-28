// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MultiModalGuardForBase64ResponseBodyDataDetailResult extends $dara.Model {
  /**
   * @remarks
   * The confidence level.
   * 
   * @example
   * 100
   */
  confidence?: number;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * No risk detected.
   */
  description?: string;
  /**
   * @remarks
   * The extension information.
   * 
   * @example
   * JSON format data.
   */
  ext?: any;
  /**
   * @remarks
   * The label.
   * 
   * @example
   * nonLable
   */
  label?: string;
  /**
   * @remarks
   * The risk level.
   * 
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
   * @remarks
   * The risk level.
   * 
   * @example
   * low
   */
  level?: string;
  /**
   * @remarks
   * The result.
   */
  result?: MultiModalGuardForBase64ResponseBodyDataDetailResult[];
  /**
   * @remarks
   * The suggested action.
   * 
   * @example
   * pass
   */
  suggestion?: string;
  /**
   * @remarks
   * The category.
   * 
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
   * @remarks
   * The data ID.
   * 
   * @example
   * xxx
   */
  dataId?: string;
  /**
   * @remarks
   * The details.
   */
  detail?: MultiModalGuardForBase64ResponseBodyDataDetail[];
  /**
   * @remarks
   * The suggested action.
   * 
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
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The response data.
   */
  data?: MultiModalGuardForBase64ResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier of the request.
   * 
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

