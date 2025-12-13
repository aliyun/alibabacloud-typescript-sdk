// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunContractExtractResponseBodyDataExtractResultValue extends $dara.Model {
  /**
   * @example
   * HT-2022-0001
   */
  data?: string;
  originalText?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      originalText: 'originalText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      originalText: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunContractExtractResponseBodyDataExtractResult extends $dara.Model {
  desc?: string;
  extractItem?: string;
  /**
   * @example
   * null
   */
  option?: string;
  value?: RunContractExtractResponseBodyDataExtractResultValue[];
  static names(): { [key: string]: string } {
    return {
      desc: 'desc',
      extractItem: 'extractItem',
      option: 'option',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      extractItem: 'string',
      option: 'string',
      value: { 'type': 'array', 'itemType': RunContractExtractResponseBodyDataExtractResultValue },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunContractExtractResponseBodyData extends $dara.Model {
  contractText?: string;
  extractResult?: RunContractExtractResponseBodyDataExtractResult[];
  static names(): { [key: string]: string } {
    return {
      contractText: 'contractText',
      extractResult: 'extractResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contractText: 'string',
      extractResult: { 'type': 'array', 'itemType': RunContractExtractResponseBodyDataExtractResult },
    };
  }

  validate() {
    if(Array.isArray(this.extractResult)) {
      $dara.Model.validateArray(this.extractResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunContractExtractResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: RunContractExtractResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C844BE6B-33A9-5AC4-A1AE-97B131849E0F
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: RunContractExtractResponseBodyData,
      httpStatusCode: 'number',
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

