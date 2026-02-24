// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IgnoreEvaluationResultsRequestResources extends $dara.Model {
  /**
   * @remarks
   * The ID of the region to which the resource belongs.
   * 
   * For more information about how to obtain the ID of the region to which the resource belongs, see [ListDiscoveredResources](https://help.aliyun.com/document_detail/169620.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resource belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 100931896542****
   */
  resourceAccountId?: number;
  /**
   * @remarks
   * The resource ID.
   * 
   * For more information about how to obtain the resource ID, see [ListDiscoveredResources](https://help.aliyun.com/document_detail/169620.html).
   * 
   * This parameter is required.
   * 
   * @example
   * lb-hp3a3b4ztyfm2plgm****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * For more information about how to obtain the resource type, see [ListDiscoveredResources](https://help.aliyun.com/document_detail/169620.html).
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

export class IgnoreEvaluationResultsRequest extends $dara.Model {
  /**
   * @remarks
   * The rule ID.
   * 
   * For more information about how to obtain the rule ID, see [ListConfigRules](https://help.aliyun.com/document_detail/169607.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cr-7e72626622af0051****
   */
  configRuleId?: string;
  /**
   * @remarks
   * The date on which the ignored evaluation results are automatically restored.
   * 
   * > If this parameter is left empty, the ignored evaluation results are not automatically restored. You must manually restore them.
   * 
   * @example
   * 2022-06-01
   */
  ignoreDate?: string;
  /**
   * @remarks
   * The reason for ignoring the resources.
   * 
   * @example
   * 无需检测。
   */
  reason?: string;
  /**
   * @remarks
   * The list of resources to be ignored.
   * 
   * This parameter is required.
   */
  resources?: IgnoreEvaluationResultsRequestResources[];
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
      ignoreDate: 'IgnoreDate',
      reason: 'Reason',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleId: 'string',
      ignoreDate: 'string',
      reason: 'string',
      resources: { 'type': 'array', 'itemType': IgnoreEvaluationResultsRequestResources },
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

