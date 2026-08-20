// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHybridCloudUnassignedMachinesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the hybrid cloud cluster.
   * > You can call the [DescribeHybridCloudClusters](https://help.aliyun.com/document_detail/2849376.html) operation and obtain the **Id** field value of the target hybrid cloud cluster from the **ClusterInfos** array in the response. If no cluster is available, call the [CreateHybridCloudCluster](https://help.aliyun.com/document_detail/2980286.html) operation to create a hybrid cloud cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  clusterId?: number;
  /**
   * @remarks
   * The hostname.
   * 
   * @example
   * online-xagent1
   */
  hostName?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-5yd****7009
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
   * The page number to return in a paged query. Default value: **1**. For more information about paging, see the PageSize parameter.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paged query. Default value: **10**, which indicates that each page contains 10 entries. For more information about paging, see the PageNumber parameter.
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
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
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

