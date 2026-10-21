// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateNormalizationRuleResponseBodyValidateResult extends $dara.Model {
  /**
   * @remarks
   * The name of the field.
   * 
   * @example
   * host
   */
  fieldName?: string;
  /**
   * @remarks
   * The field information.
   * 
   * @example
   * ze
   */
  fieldValue?: string;
  /**
   * @remarks
   * The name of the log field.
   * 
   * @example
   * aaa
   */
  logFieldName?: string;
  /**
   * @remarks
   * The value of the log field.
   * 
   * @example
   * bbb
   */
  logFieldValue?: string;
  /**
   * @remarks
   * The reason for the validation result. Valid values:
   * - OperationDenied.TheValueIsRequired: A required parameter is empty.
   * - OperationDenied.TheValueIsNull: The parameter value is null.
   * - OperationDenied.TheEnumValueNotSupport: The field value is not within the valid enum values.
   * - OperationDenied.TheValueLessThanMin: The field value is less than the specified minimum value.
   * - OperationDenied.TheValueMoreThanMax: The field value is greater than the specified maximum value.
   * - OperationDenied.TheValueNotMatchRegularExpression: The field value fails the regular expression match.
   * - success: The validation is passed.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The source of the normalized field. Valid values:
   * - preset: Built-in.
   * - custom: Custom.
   * 
   * @example
   * preset
   */
  normalizationFieldFrom?: string;
  /**
   * @remarks
   * The name of the normalized field.
   * 
   * @example
   * host
   */
  normalizationFieldName?: string;
  /**
   * @remarks
   * Specifies whether the normalized field is required.
   * 
   * @example
   * true
   */
  normalizationFieldRequired?: boolean;
  /**
   * @remarks
   * Specifies whether the normalized field name is built into the system.
   */
  normalizationFieldReserved?: boolean;
  /**
   * @remarks
   * The type of the normalized field. Valid values: text, long, double, and json.
   * 
   * @example
   * text
   */
  normalizationFieldType?: string;
  /**
   * @remarks
   * The reason why the normalized field fails the validation.
   * 
   * @example
   * OperationDenied.TheValueIsRequired
   */
  normalizationFieldValidationReason?: string;
  /**
   * @remarks
   * The validation status of the normalized field. Valid values: pass and fail.
   * 
   * @example
   * pass
   */
  normalizationFieldValidationStatus?: string;
  /**
   * @remarks
   * The validation result. Valid values:
   * - 1: The validation is passed.
   * - 0: A warning is returned.
   * - 1: The validation fails.
   * 
   * @example
   * 1
   */
  result?: number;
  static names(): { [key: string]: string } {
    return {
      fieldName: 'FieldName',
      fieldValue: 'FieldValue',
      logFieldName: 'LogFieldName',
      logFieldValue: 'LogFieldValue',
      message: 'Message',
      normalizationFieldFrom: 'NormalizationFieldFrom',
      normalizationFieldName: 'NormalizationFieldName',
      normalizationFieldRequired: 'NormalizationFieldRequired',
      normalizationFieldReserved: 'NormalizationFieldReserved',
      normalizationFieldType: 'NormalizationFieldType',
      normalizationFieldValidationReason: 'NormalizationFieldValidationReason',
      normalizationFieldValidationStatus: 'NormalizationFieldValidationStatus',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldName: 'string',
      fieldValue: 'string',
      logFieldName: 'string',
      logFieldValue: 'string',
      message: 'string',
      normalizationFieldFrom: 'string',
      normalizationFieldName: 'string',
      normalizationFieldRequired: 'boolean',
      normalizationFieldReserved: 'boolean',
      normalizationFieldType: 'string',
      normalizationFieldValidationReason: 'string',
      normalizationFieldValidationStatus: 'string',
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
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of validation results.
   */
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

