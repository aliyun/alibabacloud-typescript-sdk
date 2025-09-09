// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MoveResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the new resource group.
   * 
   * >  You can use resource groups to manage resources within your Alibaba Cloud account by group. This helps you resolve issues such as resource grouping and permission management for your Alibaba Cloud account. For more information, see [What is resource management?](https://help.aliyun.com/document_detail/94475.html)
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
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the VPC peering connection.
   * 
   * This parameter is required.
   * 
   * @example
   * pcc-gu32s92f9ytsk9****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type. Set the value to **PeerConnection**, which specifies a VPC peering connection.
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

