// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateNormalizationRuleResponseBodyValidateResult extends $dara.Model {
  /**
   * @remarks
   * The field name.
   * 
   * @example
   * host
   */
  fieldName?: string;
  /**
   * @remarks
   * The field value.
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
   * 
   * - OperationDenied.TheValueIsRequired: A required parameter is empty.
   * 
   * - OperationDenied.TheValueIsNull: The parameter value is empty.
   * 
   * - OperationDenied.TheEnumValueNotSupport: The field value is not within the valid enumeration.
   * 
   * - OperationDenied.TheValueLessThanMin: The field value is less than the minimum value.
   * 
   * - OperationDenied.TheValueMoreThanMax: The field value is greater than the maximum value.
   * 
   * - OperationDenied.TheValueNotMatchRegularExpression: The field value does not match the regular expression.
   * 
   * - success: The validation passed.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The source of the normalized field. Valid values: \\`preset\\` (built-in) and \\`custom\\`.
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
   * Indicates whether the normalized field is required.
   * 
   * @example
   * true
   */
  normalizationFieldRequired?: boolean;
  /**
   * @remarks
   * Indicates whether the name of the normalized field is a built-in field name.
   */
  normalizationFieldReserved?: boolean;
  /**
   * @remarks
   * The type of the normalized field. Supported types: \\`text\\`, \\`long\\`, \\`double\\`, and \\`json\\`.
   * 
   * @example
   * text
   */
  normalizationFieldType?: string;
  /**
   * @remarks
   * The reason why the validation of the normalized field failed.
   * 
   * @example
   * OperationDenied.TheValueIsRequired
   */
  normalizationFieldValidationReason?: string;
  /**
   * @remarks
   * The validation status of the normalized field. Valid values: \\`pass\\` and \\`fail\\`.
   * 
   * @example
   * pass
   */
  normalizationFieldValidationStatus?: string;
  /**
   * @remarks
   * The result of the validation. Valid values:
   * 
   * - 1: The validation passed.
   * 
   * - 0: A warning is returned.
   * 
   * - -1: The validation failed.
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
   * The request ID.
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

