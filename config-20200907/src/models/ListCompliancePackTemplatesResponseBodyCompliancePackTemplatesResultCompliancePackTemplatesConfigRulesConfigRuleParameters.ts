// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCompliancePackTemplatesResponseBodyCompliancePackTemplatesResultCompliancePackTemplatesConfigRulesConfigRuleParameters extends $dara.Model {
  /**
   * @remarks
   * The name of the input parameter of the managed rule.
   * 
   * @example
   * days
   */
  parameterName?: string;
  /**
   * @remarks
   * The value of the input parameter of the managed rule.
   * 
   * @example
   * 90
   */
  parameterValue?: string;
  /**
   * @remarks
   * Indicates whether the parameter is required in the managed rule. Valid values:
   * 
   * *   true: required
   * *   false: optional
   * 
   * @example
   * true
   */
  required?: boolean;
  static names(): { [key: string]: string } {
    return {
      parameterName: 'ParameterName',
      parameterValue: 'ParameterValue',
      required: 'Required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterName: 'string',
      parameterValue: 'string',
      required: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

