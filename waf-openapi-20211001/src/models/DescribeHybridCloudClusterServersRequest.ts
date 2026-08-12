// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHybridCloudClusterServersRequest extends $dara.Model {
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
   * The name of the node group.
   * 
   * @example
   * groupTest
   */
  groupName?: string;
  /**
   * @remarks
   * The type of the hybrid cloud node group. Valid values:
   * 
   * - **protect**: protection.
   * 
   * - **control**: management.
   * 
   * - **storage**: storage.
   * 
   * - **controlStorage**: management and storage.
   * 
   * @example
   * protect
   */
  groupType?: string;
  /**
   * @remarks
   * The hostname.
   * 
   * @example
   * online-***wwq
   */
  hostName?: string;
  /**
   * @remarks
   * Instance ID of the WAF instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query instance ID of the current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-******nd07
   */
  instanceId?: string;
  /**
   * @remarks
   * The IP address of the server.
   * 
   * @example
   * 1.X.X.1
   */
  ip?: string;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for paging. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
   * The Alibaba Cloud resource group ID.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      groupName: 'GroupName',
      groupType: 'GroupType',
      hostName: 'HostName',
      instanceId: 'InstanceId',
      ip: 'Ip',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'number',
      groupName: 'string',
      groupType: 'string',
      hostName: 'string',
      instanceId: 'string',
      ip: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

