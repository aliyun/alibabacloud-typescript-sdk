// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartConfigRuleEvaluationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the compliance package.
   * 
   * For more information, see [ListCompliancePacks](https://help.aliyun.com/document_detail/606968.html).
   * 
   * > Specify either `CompliancePackId` or `ConfigRuleId`.
   * 
   * @example
   * cp-ac16626622af0053****
   */
  compliancePackId?: string;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * For more information, see [ListConfigRules](https://help.aliyun.com/document_detail/609222.html).
   * 
   * > Specify either `CompliancePackId` or `ConfigRuleId`.
   * 
   * @example
   * cr-9920626622af0035****
   */
  configRuleId?: string;
  /**
   * @remarks
   * Specifies whether to restore evaluation results that were ignored. Valid values:
   * 
   * - true: Restores ignored evaluation results.
   * 
   * - false (default): Does not restore ignored evaluation results.
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

