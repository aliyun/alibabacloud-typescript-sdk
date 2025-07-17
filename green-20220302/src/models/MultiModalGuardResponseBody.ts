// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MultiModalGuardResponseBodyDataDetailResult extends $dara.Model {
  /**
   * @example
   * 0
   */
  confidence?: number;
  description?: string;
  /**
   * @example
   * {}
   */
  ext?: any;
  /**
   * @example
   * contraband_act
   */
  label?: string;
  /**
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
   * @example
   * none
   */
  level?: string;
  result?: MultiModalGuardResponseBodyDataDetailResult[];
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
   * @example
   * data1234
   */
  dataId?: string;
  detail?: MultiModalGuardResponseBodyDataDetail[];
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
   * @example
   * 200
   */
  code?: number;
  data?: MultiModalGuardResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
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

