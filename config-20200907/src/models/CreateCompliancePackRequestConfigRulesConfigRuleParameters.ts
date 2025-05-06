// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCompliancePackRequestConfigRulesConfigRuleParameters extends $dara.Model {
  /**
   * @remarks
   * The name of the input parameter.
   * 
   * You must specify both `ParameterName` and `ParameterValue` or neither of them. If the managed rule has an input parameter but no default value is specified, you must specify this parameter. You can call the [ListCompliancePackTemplates](https://help.aliyun.com/document_detail/261176.html) operation to obtain the names of input parameters of the managed rule.
   * 
   * @example
   * bandwidth
   */
  parameterName?: string;
  /**
   * @remarks
   * The value of the input parameter.
   * 
   * You must specify both `ParameterName` and `ParameterValue` or neither of them. If the managed rule has an input parameter but no default value is specified, you must specify this parameter. You can call the [ListCompliancePackTemplates](https://help.aliyun.com/document_detail/261176.html) operation to obtain the values of input parameters of the managed rule.
   * 
   * @example
   * 10
   */
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterName: 'ParameterName',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterName: 'string',
      parameterValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

