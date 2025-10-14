// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateNormalizationRuleResponseBodyValidateResult extends $dara.Model {
  /**
   * @example
   * host。
   */
  fieldName?: string;
  /**
   * @example
   * ze。
   */
  fieldValue?: string;
  /**
   * @example
   * success。
   */
  message?: string;
  /**
   * @example
   * host。
   */
  normalizationFieldName?: string;
  /**
   * @example
   * true。
   */
  normalizationFieldRequired?: boolean;
  /**
   * @example
   * 1。
   */
  result?: number;
  static names(): { [key: string]: string } {
    return {
      fieldName: 'FieldName',
      fieldValue: 'FieldValue',
      message: 'Message',
      normalizationFieldName: 'NormalizationFieldName',
      normalizationFieldRequired: 'NormalizationFieldRequired',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldName: 'string',
      fieldValue: 'string',
      message: 'string',
      normalizationFieldName: 'string',
      normalizationFieldRequired: 'boolean',
      result: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateNormalizationRuleResponseBody extends $dara.Model {
  /**
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****。
   */
  requestId?: string;
  validateResult?: ValidateNormalizationRuleResponseBodyValidateResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      validateResult: 'ValidateResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      validateResult: { 'type': 'array', 'itemType': ValidateNormalizationRuleResponseBodyValidateResult },
    };
  }

  validate() {
    if(Array.isArray(this.validateResult)) {
      $dara.Model.validateArray(this.validateResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

