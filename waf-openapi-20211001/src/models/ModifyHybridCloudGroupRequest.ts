// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyHybridCloudGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  clusterId?: number;
  /**
   * @remarks
   * The node group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  groupId?: number;
  /**
   * @remarks
   * The node group name.
   * 
   * This parameter is required.
   * 
   * @example
   * test-group
   */
  groupName?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > You can call [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) to query the ID of the current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf-cn-tl32ast****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the WAF instance is deployed. Valid values:
   * 
   * - **cn-hangzhou**: the Chinese mainland.
   * 
   * - **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * remarkTest
   */
  remark?: string;
  /**
   * @remarks
   * The Alibaba Cloud resource group ID.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      groupId: 'GroupId',
      groupName: 'GroupName',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      remark: 'Remark',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'number',
      groupId: 'number',
      groupName: 'string',
      instanceId: 'string',
      regionId: 'string',
      remark: 'string',
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

