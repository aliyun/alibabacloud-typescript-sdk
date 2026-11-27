// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the new resource group.
   * 
   * You can view the resource group ID in the [Resource Management console](https://resourcemanager.console.aliyun.com/resource-groups?).
   * 
   * This parameter is required.
   * 
   * @example
   * rg-acfmwavnfdf****
   */
  newResourceGroupId?: string;
  /**
   * @remarks
   * The ID of the region where the zone is located.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/2412111.html) operation to query the latest region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 31a8e4****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * Valid values:
   * - filesystem: file system.
   * 
   * This parameter is required.
   * 
   * @example
   * filesystem
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

