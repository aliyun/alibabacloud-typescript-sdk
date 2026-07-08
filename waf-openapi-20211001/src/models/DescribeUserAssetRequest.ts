// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserAssetRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the hybrid cloud cluster.
   * > This parameter applies only to hybrid cloud scenarios. You can call the [DescribeHybridCloudClusters](https://help.aliyun.com/document_detail/2849376.html) operation to obtain hybrid cloud cluster information.
   * 
   * @example
   * 428
   */
  clusterId?: string;
  /**
   * @remarks
   * The type of statistics. Valid values:
   * - **asset_num**: total number of API assets.
   * - **asset_active**: number of active APIs.
   * - **asset_newborn**: number of APIs added today.
   * - **asset_offline**: number of inactive APIs.
   * - **asset_bot**: number of APIs with bot requests.
   * - **asset_cross_border**: number of APIs with cross-border data transfer.
   * - **sensitive_api**: number of APIs with sensitive data in responses.
   * - **sensitive_domain**: number of sites with sensitive data in responses.
   * 
   * This parameter is required.
   * 
   * @example
   * asset_num
   */
  dataType?: string;
  /**
   * @remarks
   * The query time in UNIX timestamp format (UTC). Unit: seconds.
   * >Notice: This parameter is deprecated.
   * 
   * @example
   * 1723435200
   * 
   * @deprecated
   */
  days?: string;
  /**
   * @remarks
   * Instance ID of the WAF instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query instance ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf-cn-uax37ijm***
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

