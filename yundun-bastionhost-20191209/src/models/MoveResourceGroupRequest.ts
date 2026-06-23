// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MoveResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID of the Bastionhost instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the destination resource group.
   * 
   * > Call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain the resource group ID of the Bastionhost instance.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-aekznp3oyo****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the Bastionhost instance whose resource group you want to change.
   * 
   * > Call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain the ID of the Bastionhost instance.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-78v1gh****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type. Set the value to **INSTANCE**, which indicates that the resource is a Bastionhost instance.
   * 
   * This parameter is required.
   * 
   * @example
   * INSTANCE
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceGroupId: 'string',
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

