// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserAssetRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the hybrid cloud cluster.
   * >For hybrid cloud scenarios only, you can call the [DescribeHybridCloudClusters](https://help.aliyun.com/document_detail/2849376.html) operation to query the hybrid cloud clusters.
   * 
   * @example
   * 428
   */
  clusterId?: string;
  /**
   * @remarks
   * The type of the statistics. Valid values:
   * 
   * *   **asset_num**: total number of APIs
   * *   **asset_active**: number of active APIs
   * *   **asset_newborn**: number of new APIs
   * *   **asset_offline**: number of deactivated APIs
   * *   **asset_bot**: number of APIs that are called by bots
   * *   **asset_cross_border**: number of APIs that are called for cross-border data transfer
   * *   **sensitive_api**: number of response-sensitive APIs
   * *   **sensitive_domain**: number of response-sensitive domain names
   * 
   * This parameter is required.
   * 
   * @example
   * asset_num
   */
  dataType?: string;
  /**
   * @remarks
   * The time at which the API was called. The value is a UNIX timestamp displayed in UTC. Unit: seconds.
   * >Notice: The parameter has been deprecated.
   * 
   * @example
   * 1723435200
   */
  days?: string;
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf-cn-uax37ijm***
   */
  instanceId?: string;
  /**
   * @remarks
   * The region in which the WAF instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland
   * *   **ap-southeast-1**: outside the Chinese mainland
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
      dataType: 'DataType',
      days: 'Days',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dataType: 'string',
      days: 'string',
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

