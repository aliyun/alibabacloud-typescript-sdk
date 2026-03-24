// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisecMatchedHostsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the hybrid cloud cluster.
   * 
   * > This parameter is used only in hybrid cloud scenarios. Call the [DescribeHybridCloudClusters](https://help.aliyun.com/document_detail/2849376.html) operation to obtain information about hybrid cloud clusters.
   * 
   * @example
   * 433
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > Call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to view the ID of the current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v2_public_cn-x0r37plpl0g
   */
  instanceId?: string;
  /**
   * @remarks
   * The domain name or IP address.
   * 
   * @example
   * bc.aliyun.com
   */
  matchedHost?: string;
  /**
   * @remarks
   * The number of the page to return for a paged query. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries to return on each page for a paged query. Default value: **10**.
   * 
   * @example
   * 8
   */
  pageSize?: string;
  /**
   * @remarks
   * The region of the WAF instance. Valid values:
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
   * rg-aekz5qqo7jthcsa
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The detection type. Valid values:
   * 
   * - **api**: the list of domain names for API assets.
   * 
   * - **abnormal**: the list of domain names that have threats.
   * 
   * - **event**: the list of domain names that have management events.
   * 
   * @example
   * event
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      instanceId: 'InstanceId',
      matchedHost: 'MatchedHost',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      instanceId: 'string',
      matchedHost: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

