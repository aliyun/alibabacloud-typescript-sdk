// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAggregateResourceCountsGroupByRegionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the account group.
   * 
   * For more information about how to obtain the ID of an account group, see [ListAggregators](https://help.aliyun.com/document_detail/255797.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ca-a260626622af0005****
   */
  aggregatorId?: string;
  /**
   * @remarks
   * The ID of the folder in the resource directory. For more information about how to obtain the ID of a folder, see [View the basic information of a folder](https://help.aliyun.com/document_detail/111223.html).
   * 
   * @example
   * r-BU****
   */
  folderId?: string;
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
  /**
   * @remarks
   * The resource type.
   * 
   * For more information about how to obtain the type of a resource, see [ListAggregateDiscoveredResources](https://help.aliyun.com/document_detail/265983.html).
   * 
   * @example
   * ACS::ECS::Instance
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      folderId: 'FolderId',
      resourceAccountId: 'ResourceAccountId',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      folderId: 'string',
      resourceAccountId: 'number',
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

