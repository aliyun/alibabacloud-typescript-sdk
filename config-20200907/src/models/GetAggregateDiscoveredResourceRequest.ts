// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAggregateDiscoveredResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the account group.
   * 
   * For more information about how to obtain the ID of the account group, see [ListAggregators](https://help.aliyun.com/document_detail/255797.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ca-5885626622af0008****
   */
  aggregatorId?: string;
  /**
   * @remarks
   * Specifies whether to query the compliance results of the resource. Valid values:
   * 
   * *   0 (default): does not query the compliance results of the resource.
   * *   1: queries the compliance results of the resource.
   * 
   * @example
   * 0
   */
  complianceOption?: number;
  /**
   * @remarks
   * The ID of the region in which the resource resides.
   * 
   * For more information about how to query the ID of a region in which the resource resides, see [ListAggregateDiscoveredResources](https://help.aliyun.com/document_detail/411691.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * Required. The ID of the Alibaba Cloud account to which the specified resource belongs in the account group.
   * 
   * @example
   * 100931896542****
   */
  resourceAccountId?: number;
  /**
   * @remarks
   * The resource ID.
   * 
   * For more information about how to obtain the ID of a resource, see [ListAggregateDiscoveredResources](https://help.aliyun.com/document_detail/411691.html).
   * 
   * This parameter is required.
   * 
   * @example
   * new-bucket
   */
  resourceId?: string;
  /**
   * @deprecated
   */
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of the resource.
   * 
   * For more information about how to obtain the type of a resource, see [ListAggregateDiscoveredResources](https://help.aliyun.com/document_detail/411691.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ACS::OSS::Bucket
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      complianceOption: 'ComplianceOption',
      region: 'Region',
      resourceAccountId: 'ResourceAccountId',
      resourceId: 'ResourceId',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      complianceOption: 'number',
      region: 'string',
      resourceAccountId: 'number',
      resourceId: 'string',
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

