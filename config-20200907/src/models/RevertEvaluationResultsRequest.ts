// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevertEvaluationResultsRequestResources extends $dara.Model {
  /**
   * @remarks
   * The ID of the region in which the resource resides.
   * 
   * For more information about how to obtain the ID of the region in which a resource resides, see [ListDiscoveredResources](https://help.aliyun.com/document_detail/169620.html).
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
   * For more information about how to obtain the ID of a resource, see [ListDiscoveredResources](https://help.aliyun.com/document_detail/169620.html).
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
   * For more information about how to query the type of a resource, see [ListDiscoveredResources](https://help.aliyun.com/document_detail/169620.html).
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

export class RevertEvaluationResultsRequest extends $dara.Model {
  /**
   * @remarks
   * The rule ID.
   * 
   * For more information about how to obtain the ID of a rule, see [ListConfigRules](https://help.aliyun.com/document_detail/169607.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cr-7e72626622af0051****
   */
  configRuleId?: string;
  /**
   * @remarks
   * The resources that are to be re-evaluated.
   * 
   * This parameter is required.
   */
  resources?: RevertEvaluationResultsRequestResources[];
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleId: 'string',
      resources: { 'type': 'array', 'itemType': RevertEvaluationResultsRequestResources },
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

