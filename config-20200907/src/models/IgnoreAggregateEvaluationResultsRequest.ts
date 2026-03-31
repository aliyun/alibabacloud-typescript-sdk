// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IgnoreAggregateEvaluationResultsRequestResources extends $dara.Model {
  /**
   * @remarks
   * The ID of the region in which the resource resides.
   * 
   * For more information about how to obtain the ID of a region, see [ListAggregateDiscoveredResources](https://help.aliyun.com/document_detail/265983.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resources belong.
   * 
   * >  You must specify the ID of the current management account or a member account in the account group of the management account.
   * 
   * This parameter is required.
   * 
   * @example
   * 120886317861****
   */
  resourceAccountId?: number;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * For more information about how to query the ID of a resource, see [ListAggregateDiscoveredResources](https://help.aliyun.com/document_detail/265983.html).
   * 
   * This parameter is required.
   * 
   * @example
   * lb-hp3a3b4ztyfm2plgm****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * For more information about how to query the type of a resource, see [ListAggregateDiscoveredResources](https://help.aliyun.com/document_detail/265983.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ACS::SLB::LoadBalancer
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      resourceAccountId: 'ResourceAccountId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      resourceAccountId: 'number',
      resourceId: 'string',
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

export class IgnoreAggregateEvaluationResultsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the account group.
   * 
   * For more information about how to obtain the ID of an account group, see [ListAggregators](https://help.aliyun.com/document_detail/255797.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ca-5b6c626622af008f****
   */
  aggregatorId?: string;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * For more information about how to obtain the ID of a rule, see [ListAggregateConfigRules](https://help.aliyun.com/document_detail/264148.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cr-7e72626622af0051****
   */
  configRuleId?: string;
  /**
   * @remarks
   * The date from which the system automatically re-evaluates the ignored incompliant resources.
   * 
   * >  If you leave this parameter empty, the system does not automatically re-evaluate the ignored incompliant resources. You must manually re-evaluate the ignored incompliant resources.
   * 
   * @example
   * 2022-06-01
   */
  ignoreDate?: string;
  /**
   * @remarks
   * The reason why you ignore the resource.
   * 
   * @example
   * The reason why you ignore the resource.
   */
  reason?: string;
  /**
   * @remarks
   * The resources to be ignored.
   * 
   * This parameter is required.
   */
  resources?: IgnoreAggregateEvaluationResultsRequestResources[];
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      configRuleId: 'ConfigRuleId',
      ignoreDate: 'IgnoreDate',
      reason: 'Reason',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      configRuleId: 'string',
      ignoreDate: 'string',
      reason: 'string',
      resources: { 'type': 'array', 'itemType': IgnoreAggregateEvaluationResultsRequestResources },
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

