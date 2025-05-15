// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the new resource group.
   * 
   * You can view resource group IDs in the [Resource Management console](https://resourcemanager.console.aliyun.com/resource-groups) .
   * 
   * @example
   * rg-acfmzmhzo******
   */
  newResourceGroupId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the cloud resource that you want to move to a new resource group.
   * 
   * @example
   * si-5dc794a7fd254e******
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * *   service: service
   * *   serviceinstance: service instance
   * 
   * @example
   * service
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

