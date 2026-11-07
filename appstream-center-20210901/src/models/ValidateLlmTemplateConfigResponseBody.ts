// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateLlmTemplateConfigResponseBodyDataValidationErrors extends $dara.Model {
  /**
   * @example
   * UNKNOWN_FIELD
   */
  code?: string;
  /**
   * @example
   * unknownField
   */
  field?: string;
  /**
   * @example
   * Unknown field "unknownField" is not recognized by Agent and will be ignored.
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      field: 'Field',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      field: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateLlmTemplateConfigResponseBodyData extends $dara.Model {
  valid?: boolean;
  validationErrors?: ValidateLlmTemplateConfigResponseBodyDataValidationErrors[];
  static names(): { [key: string]: string } {
    return {
      valid: 'Valid',
      validationErrors: 'ValidationErrors',
    };
  }

  static types(): { [key: string]: any } {
    return {
      valid: 'boolean',
      validationErrors: { 'type': 'array', 'itemType': ValidateLlmTemplateConfigResponseBodyDataValidationErrors },
    };
  }

  validate() {
    if(Array.isArray(this.validationErrors)) {
      $dara.Model.validateArray(this.validationErrors);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateLlmTemplateConfigResponseBody extends $dara.Model {
  data?: ValidateLlmTemplateConfigResponseBodyData;
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
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
      data: ValidateLlmTemplateConfigResponseBodyData,
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

