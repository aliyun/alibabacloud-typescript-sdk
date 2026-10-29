// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MoveResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource group to which you want to move the VPC peering connection.
   * 
   * > A resource group is a mechanism that allows you to group and manage resources within an Alibaba Cloud account. Resource groups help you resolve the complexities of resource grouping and authorization management within a single cloud account. For more information, see [What is Resource Management](https://help.aliyun.com/document_detail/94475.html).
   * 
   * This parameter is required.
   * 
   * @example
   * rg-acfm3peow3k****
   */
  newResourceGroupId?: string;
  /**
   * @remarks
   * The region ID of the resource.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The instance ID of the VPC peering connection whose resource group you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * pcc-gu32s92f9ytsk9****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type. Valid value: **PeerConnection**: VPC peering connection.
   * 
   * This parameter is required.
   * 
   * @example
   * PeerConnection
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      newResourceGroupId: 'NewResourceGroupId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newResourceGroupId: 'string',
      regionId: 'string',
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

