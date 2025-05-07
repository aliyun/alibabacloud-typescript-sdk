// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDefenseResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The protected objects that you want to add to the protected object group. Separate the protected objects with commas (,). If you leave this parameter empty, no protected objects are added to the protected object group.
   * 
   * @example
   * test1.aliyundoc.com,test2.aliyundoc.com
   */
  addList?: string;
  /**
   * @remarks
   * The protected objects that you want to remove from the protected object group. Separate the protected objects with commas (,). If you leave this parameter empty, no protected objects are removed from the protected object group.
   * 
   * @example
   * test14.waf.com,test24.waf.com
   */
  deleteList?: string;
  /**
   * @remarks
   * The description of the protected object group.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The name of the protected object group whose configurations you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * test01
   */
  groupName?: string;
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * *   **cn-hangzhou:** the Chinese mainland.
   * *   **ap-southeast-1:** outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      addList: 'AddList',
      deleteList: 'DeleteList',
      description: 'Description',
      groupName: 'GroupName',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addList: 'string',
      deleteList: 'string',
      description: 'string',
      groupName: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

