// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserAssetRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the hybrid cloud cluster.
   * 
   * > This parameter applies only to hybrid cloud scenarios. Call the [DescribeHybridCloudClusters](https://help.aliyun.com/document_detail/2849376.html) operation to query information about hybrid cloud clusters.
   * 
   * @example
   * 428
   */
  clusterId?: string;
  /**
   * @remarks
   * The type of statistics. Valid values:
   * 
   * - **asset_num**: the total number of API assets.
   * 
   * - **asset_active**: the number of active APIs.
   * 
   * - **asset_newborn**: the number of APIs that are added today.
   * 
   * - **asset_offline**: the number of inactive APIs.
   * 
   * - **asset_bot**: the number of APIs that receive bot requests.
   * 
   * - **asset_cross_border**: the number of APIs that are used for cross-border data transmission.
   * 
   * - **sensitive_api**: the number of APIs whose responses contain sensitive data.
   * 
   * - **sensitive_domain**: the number of sites whose responses contain sensitive data.
   * 
   * This parameter is required.
   * 
   * @example
   * asset_num
   */
  dataType?: string;
  /**
   * @remarks
   * The time to query. The value is a UNIX timestamp in seconds. The time is in Coordinated Universal Time (UTC).
   * 
   * >Notice: 
   * 
   * This parameter is deprecated.
   * 
   * @example
   * 1723435200
   * 
   * @deprecated
   */
  days?: string;
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * > Call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf-cn-uax37ijm***
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

