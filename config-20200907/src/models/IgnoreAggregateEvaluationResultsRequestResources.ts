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

