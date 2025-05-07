// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHybridCloudGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The region in which the node resides. Specify the parameter in the Carrier code-Continent code-City code format.
   * 
   * @example
   * aliyun-asiapacific-beijing
   */
  backSourceMark?: string;
  /**
   * @remarks
   * The ID of the hybrid cloud cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  clusterId?: number;
  /**
   * @remarks
   * The name of the node group.
   * 
   * This parameter is required.
   * 
   * @example
   * demoGroupName
   */
  groupName?: string;
  /**
   * @remarks
   * The type of the node group. Valid values:
   * 
   * *   **protect**
   * *   **control**
   * *   **storage**
   * *   **controlStorage**
   * 
   * This parameter is required.
   * 
   * @example
   * protect
   */
  groupType?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf-cn-n6w***x52m
   */
  instanceId?: string;
  /**
   * @remarks
   * The IP address of the server used for load balancing.
   * 
   * This parameter is required.
   * 
   * @example
   * 3.3.3.3
   */
  loadBalanceIp?: string;
  /**
   * @remarks
   * The region in which the node resides. Specify the parameter in the Carrier code-Continent code-City code format.
   * 
   * @example
   * 0-410-0
   */
  locationCode?: string;
  /**
   * @remarks
   * The region ID of the WAF instance. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
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
   * demoRamark
   */
  remark?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      backSourceMark: 'BackSourceMark',
      clusterId: 'ClusterId',
      groupName: 'GroupName',
      groupType: 'GroupType',
      instanceId: 'InstanceId',
      loadBalanceIp: 'LoadBalanceIp',
      locationCode: 'LocationCode',
      regionId: 'RegionId',
      remark: 'Remark',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backSourceMark: 'string',
      clusterId: 'number',
      groupName: 'string',
      groupType: 'string',
      instanceId: 'string',
      loadBalanceIp: 'string',
      locationCode: 'string',
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

