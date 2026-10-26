// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which you want to transfer the specified instance.
   * 
   * You can call the <props="china">[ListResourceGroups](https://help.aliyun.com/document_detail/158855.html)<props="intl">[ListResourceGroups](https://www.alibabacloud.com/help/resource-management/latest/listresourcegroups) operation to query existing resource groups.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-9gLOoK****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource ID, which is the ID of the ApsaraMQ for RocketMQ instance. This parameter specifies the MSMQ queue instance whose resource group you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * c2c5d1274a8d4317a13bc5b0d4******
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * Set the value to **instance**, which indicates that the resource is an instance.
   * 
   * This parameter is required.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'regionId',
      resourceGroupId: 'resourceGroupId',
      resourceId: 'resourceId',
      resourceType: 'resourceType',
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

