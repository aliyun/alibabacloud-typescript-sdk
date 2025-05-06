// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartConfigRuleEvaluationRequest extends $dara.Model {
  /**
   * @remarks
   * The compliance package ID.
   * 
   * For more information about how to obtain the ID of a compliance package, see [ListCompliancePacks](https://help.aliyun.com/document_detail/606968.html).
   * 
   * >  You must configure either the `CompliancePackId` or `ConfigRuleId` parameter.
   * 
   * @example
   * cp-ac16626622af0053****
   */
  compliancePackId?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * You can call the [ListConfigRules](https://help.aliyun.com/document_detail/609222.html) operation to obtain the rule ID.
   * 
   * >  You must configure either the `CompliancePackId` or `ConfigRuleId` parameter.
   * 
   * @example
   * cr-9920626622af0035****
   */
  configRuleId?: string;
  /**
   * @remarks
   * Specifies whether to re-evaluate the ignored non-compliant resource. Valid values:
   * 
   * *   true: re-evaluates the ignored non-compliant resource based on the rule.
   * *   false (default): does not re-evaluate the ignored non-compliant resource based on the rule.
   * 
   * @example
   * false
   */
  revertEvaluation?: boolean;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      configRuleId: 'ConfigRuleId',
      revertEvaluation: 'RevertEvaluation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
      configRuleId: 'string',
      revertEvaluation: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

