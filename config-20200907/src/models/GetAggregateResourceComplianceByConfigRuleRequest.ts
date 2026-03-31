// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAggregateResourceComplianceByConfigRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the account group.
   * 
   * For more information about how to obtain the ID of the account group, see [ListAggregators](https://help.aliyun.com/document_detail/255797.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ca-a4e5626622af0079****
   */
  aggregatorId?: string;
  /**
   * @remarks
   * The compliance evaluation result of the resources. Valid values:
   * 
   * *   COMPLIANT: The resource is evaluated as compliant.
   * *   NON_COMPLIANT: The resource is evaluated as incompliant.
   * *   NOT_APPLICABLE: The rule does not apply to your resources.
   * *   INSUFFICIENT_DATA: No resource data is available.
   * 
   * @example
   * COMPLIANT
   */
  complianceType?: string;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * For more information about how to obtain the ID of a rule, see [ListAggregateConfigRules](https://help.aliyun.com/document_detail/264148.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cr-d369626622af008e****
   */
  configRuleId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resources in the account group belong.
   * 
   * > You can use either the ResourceAccountId or ResourceOwnerId parameter. We recommend that you use the ResourceAccountId parameter.
   * 
   * @example
   * 100931896542****
   */
  resourceAccountId?: number;
  /**
   * @deprecated
   */
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      complianceType: 'ComplianceType',
      configRuleId: 'ConfigRuleId',
      resourceAccountId: 'ResourceAccountId',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      complianceType: 'string',
      configRuleId: 'string',
      resourceAccountId: 'number',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

