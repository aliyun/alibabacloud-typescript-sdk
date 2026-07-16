// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MultiModalGuardResponseBodyDataDetailResult extends $dara.Model {
  /**
   * @remarks
   * The confidence score. Valid values: 0 to 100. The value is accurate to two decimal places.
   * 
   * @example
   * 100
   */
  confidence?: number;
  /**
   * @remarks
   * The description of the label.
   * 
   * @example
   * 疑似违禁行为
   */
  description?: string;
  /**
   * @remarks
   * The extended information about the detection results.
   * 
   * @example
   * {}
   */
  ext?: any;
  /**
   * @remarks
   * The label.
   * 
   * @example
   * contraband_act
   */
  label?: string;
  /**
   * @remarks
   * The risk level.
   * 
   * @example
   * none
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

export class MultiModalGuardResponseBodyDataDetail extends $dara.Model {
  /**
   * @remarks
   * The risk level.
   * 
   * @example
   * none
   */
  level?: string;
  /**
   * @remarks
   * The detection results.
   */
  result?: MultiModalGuardResponseBodyDataDetailResult[];
  /**
   * @remarks
   * The moderation suggestion. Valid values: -**block**: The content is non-compliant. -**pass**: The content is compliant.
   * 
   * @example
   * pass
   */
  suggestion?: string;
  /**
   * @remarks
   * The type.
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
      result: { 'type': 'array', 'itemType': MultiModalGuardResponseBodyDataDetailResult },
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

export class MultiModalGuardResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The data ID of the detection object.
   * 
   * @example
   * data1234
   */
  dataId?: string;
  /**
   * @remarks
   * The detection details.
   */
  detail?: MultiModalGuardResponseBodyDataDetail[];
  /**
   * @remarks
   * The moderation suggestion. Valid values: -block: The content is non-compliant. -pass: The content is compliant.
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
      detail: { 'type': 'array', 'itemType': MultiModalGuardResponseBodyDataDetail },
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

export class MultiModalGuardResponseBody extends $dara.Model {
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
   * The returned data.
   */
  data?: MultiModalGuardResponseBodyData;
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
   * The request ID.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
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
      data: MultiModalGuardResponseBodyData,
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

