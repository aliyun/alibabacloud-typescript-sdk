// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevertAggregateEvaluationResultsRequestResources extends $dara.Model {
  /**
   * @remarks
   * The ID of the region in which your resources reside.
   * 
   * For more information about how to obtain the ID of the region in which your resources reside, see [ListAggregateDiscoveredResources](https://help.aliyun.com/document_detail/265983.html).
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
   * >  You must specify the ID of the current management account or a member in the account group of the management account.
   * 
   * This parameter is required.
   * 
   * @example
   * 120886317861****
   */
  resourceAccountId?: number;
  /**
   * @remarks
   * The resource ID.
   * 
   * For more information about how to obtain the ID of a resource, see [ListAggregateDiscoveredResources](https://help.aliyun.com/document_detail/265983.html).
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
   * For more information about how to obtain the type of a resource, see [ListAggregateDiscoveredResources](https://help.aliyun.com/document_detail/265983.html).
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

