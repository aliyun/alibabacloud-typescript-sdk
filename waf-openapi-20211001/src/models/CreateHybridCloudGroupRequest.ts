// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHybridCloudGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The back-to-origin mark of the node group. The value is in the format of Carrier-Continent-City, which is used to identify the origin of back-to-origin requests.
   * 
   * @example
   * aliyun-asiapacific-beijing
   */
  backSourceMark?: string;
  /**
   * @remarks
   * The ID of the Hybrid Cloud WAF cluster.
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
   * test
   */
  groupName?: string;
  /**
   * @remarks
   * The type of the node group. Valid values:
   * 
   * - **protect**: a protection node group that processes traffic filtering.
   * 
   * - **control**: a control node group that manages cluster configurations.
   * 
   * - **storage**: a storage node group that stores logs and data.
   * 
   * - **controlStorage**: a node group that serves as both control and storage.
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
   * > Call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf-cn-n6w***x52m
   */
  instanceId?: string;
  /**
   * @remarks
   * The IP address of the load balancer that is associated with the node group.
   * 
   * This parameter is required.
   * 
   * @example
   * 3.3.3.3
   */
  loadBalanceIp?: string;
  /**
   * @remarks
   * The location code of the region where the node group resides. The value is in the format of Carrier-Continent-City.
   * 
   * @example
   * 0-410-0
   */
  locationCode?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
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
   * The remarks on the node group. You can use this parameter to add a brief description for the node group.
   * 
   * @example
   * test
   */
  remark?: string;
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

