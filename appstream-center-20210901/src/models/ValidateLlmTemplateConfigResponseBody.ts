// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateLlmTemplateConfigResponseBodyDataValidationErrors extends $dara.Model {
  /**
   * @remarks
   * The error code, such as MISSING_FIELD, UNKNOWN_FIELD, INVALID_TYPE, or INVALID_JSON.
   * 
   * @example
   * UNKNOWN_FIELD
   */
  code?: string;
  /**
   * @remarks
   * The name of the field where the error occurred, such as id, name, or contextWindow.
   * 
   * @example
   * unknownField
   */
  field?: string;
  /**
   * @remarks
   * The error message.
   * 
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
  /**
   * @remarks
   * Indicates whether the configuration is valid. The value is true if all validation checks pass.
   */
  valid?: boolean;
  /**
   * @remarks
   * The list of validation errors. This list is empty when Valid is true.
   */
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
  /**
   * @remarks
   * The validation result of the LLM template configuration, including whether the configuration is valid and the list of validation errors.
   */
  data?: ValidateLlmTemplateConfigResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
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

