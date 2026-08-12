// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHybridCloudGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the hybrid cloud cluster.
   * 
   * @example
   * 428
   */
  clusterId?: number;
  /**
   * @remarks
   * The proxy type of the cluster. Valid values:
   * 
   * - **service**: SDK integration.
   * 
   * - **cname**: reverse proxy.
   * 
   * @example
   * cname
   */
  clusterProxyType?: string;
  /**
   * @remarks
   * The name of the hybrid cloud node group to query.
   * 
   * @example
   * testGroup
   */
  groupDisplayName?: string;
  /**
   * @remarks
   * **[Deprecated]** Use GroupDisplayName for queries instead.
   * 
   * @example
   * 1
   * 
   * @deprecated
   */
  groupName?: number;
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
   * The ID of the WAF instance.
   * 
   * > Call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-********w0b
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number to return in a paging query. Default value: **1**, which indicates that the first page is returned.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paged query. Default value: **10**.
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
      clusterProxyType: 'ClusterProxyType',
      groupDisplayName: 'GroupDisplayName',
      groupName: 'GroupName',
      groupType: 'GroupType',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'number',
      clusterProxyType: 'string',
      groupDisplayName: 'string',
      groupName: 'number',
      groupType: 'string',
      instanceId: 'string',
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

