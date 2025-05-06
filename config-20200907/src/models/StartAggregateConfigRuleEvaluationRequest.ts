// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartAggregateConfigRuleEvaluationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the account group.
   * 
   * For more information about how to obtain the ID of an account group, see [ListAggregators](https://help.aliyun.com/document_detail/255797.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ca-3a58626622af0005****
   */
  aggregatorId?: string;
  /**
   * @remarks
   * The ID of the compliance package.
   * 
   * For more information about how to obtain the ID of a compliance package, see [ListAggregateCompliancePacks](https://help.aliyun.com/document_detail/262059.html).
   * 
   * > You must configure either the `CompliancePackId` or `ConfigRuleId` parameter.
   * 
   * @example
   * cp-ac16626622af0053****
   */
  compliancePackId?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * For more information about how to query the ID of a rule, see [ListAggregateConfigRules](https://help.aliyun.com/document_detail/264148.html).
   * 
   * >  You must configure either the `CompliancePackId` or `ConfigRuleId` parameter.
   * 
   * @example
   * cr-c169626622af009f****
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
      aggregatorId: 'AggregatorId',
      compliancePackId: 'CompliancePackId',
      configRuleId: 'ConfigRuleId',
      revertEvaluation: 'RevertEvaluation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
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

