// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAggregateConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifierEvaluationResultQualifier extends $dara.Model {
  /**
   * @remarks
   * The ID of the compliance package to which the rule belongs.
   * 
   * @example
   * cr-7263fd26622af00bc****
   */
  compliancePackId?: string;
  /**
   * @remarks
   * The ARN of the rule.
   * 
   * @example
   * acs:config::100931896542****:rule/cr-888f626622af00ae****
   */
  configRuleArn?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * cr-888f626622af00ae****
   */
  configRuleId?: string;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * test-rule-name
   */
  configRuleName?: string;
  /**
   * @remarks
   * The date on which the system automatically re-evaluates the ignored incompliant resources.
   * 
   * >  If the value of this parameter is left empty, the system does not automatically re-evaluate the ignored incompliant resources. You must manually re-evaluate the ignored incompliant resources.
   * 
   * @example
   * 2022-06-01
   */
  ignoreDate?: string;
  /**
   * @remarks
   * The ID of the region in which your resources reside.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * Bucket-test
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource name.
   * 
   * @example
   * Bucket-test
   */
  resourceName?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resource belongs.
   * 
   * @example
   * 173808452267****
   */
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of the resource.
   * 
   * @example
   * ACS::OSS::Bucket
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      configRuleArn: 'ConfigRuleArn',
      configRuleId: 'ConfigRuleId',
      configRuleName: 'ConfigRuleName',
      ignoreDate: 'IgnoreDate',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
      configRuleArn: 'string',
      configRuleId: 'string',
      configRuleName: 'string',
      ignoreDate: 'string',
      regionId: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

