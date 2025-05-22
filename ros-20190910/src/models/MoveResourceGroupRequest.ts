// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MoveResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource group to which you want to move the resource. For more information about resource groups, see the "Resource Group" section of the [What is Resource Management?](https://help.aliyun.com/document_detail/94475.html) topic.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-acfm3peow3k****
   */
  newResourceGroupId?: string;
  /**
   * @remarks
   * The region ID of the resource.\\
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * 4e8611cb-251e-42b7-b9cb-3496362c****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource. Valid values:
   * 
   * *   stack: stack
   * *   stackgroup: stack group
   * *   template: template
   * 
   * This parameter is required.
   * 
   * @example
   * stack
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

