// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserApiRequestRequest extends $dara.Model {
  /**
   * @remarks
   * The API operation.
   * 
   * >Notice: 
   * 
   * This parameter is deprecated. Use the ApiId parameter instead.
   * 
   * @example
   * /api/v1/know
   * 
   * @deprecated
   */
  apiFormat?: string;
  /**
   * @remarks
   * The ID of the API.
   * 
   * This parameter is required.
   * 
   * @example
   * 3799f0695c0d687f3295d132fe49bc14
   */
  apiId?: string;
  /**
   * @remarks
   * The ID of the hybrid cloud cluster.
   * 
   * > This parameter applies only to hybrid cloud scenarios. Call the [DescribeHybridCloudClusters](https://help.aliyun.com/document_detail/2849376.html) operation to obtain information about hybrid cloud clusters.
   * 
   * @example
   * 428
   */
  clusterId?: string;
  /**
   * @remarks
   * The domain name or IP address of the API operation.
   * 
   * >Notice: 
   * 
   * This parameter is deprecated. Use the ApiId parameter instead.
   * 
   * @example
   * c.***.com
   * 
   * @deprecated
   */
  domain?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > Call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-zxu38***
   */
  instanceId?: string;
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
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The type of statistics. Valid values:
   * 
   * - **api_ip**: total traffic.
   * 
   * - **api_cross_border_ip**: cross-border traffic.
   * 
   * - **api_bot_ip**: bot traffic.
   * 
   * - **remote_region**: geographic location statistics.
   * 
   * - **client_id**: client type statistics.
   * 
   * - **http_referer**: Referer statistics.
   * 
   * - **api_cnt**: total number of calls.
   * 
   * - **bot_cnt**: number of bot requests.
   * 
   * - **cross_border_cnt**: number of cross-border requests.
   * 
   * - **api_freq**: call frequency.
   * 
   * @example
   * api_ip
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      apiFormat: 'ApiFormat',
      apiId: 'ApiId',
      clusterId: 'ClusterId',
      domain: 'Domain',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiFormat: 'string',
      apiId: 'string',
      clusterId: 'string',
      domain: 'string',
      instanceId: 'string',
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

