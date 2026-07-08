// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyApisecApiResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the API asset that you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * c68995b89069595c5c0399676f3ca64f
   */
  apiId?: string;
  /**
   * @remarks
   * The ID of the hybrid cloud cluster.
   * 
   * > This parameter is required only for hybrid cloud scenarios. You can call the [DescribeHybridCloudClusters](https://help.aliyun.com/document_detail/2849376.html) operation to query the ID of the hybrid cloud cluster.
   * 
   * @example
   * 428
   */
  clusterId?: string;
  /**
   * @remarks
   * Indicates whether to follow the API asset. Valid values:
   * 
   * - **1**: follows the API asset.
   * 
   * - **0** (default): does not follow the API asset.
   * 
   * @example
   * 0
   */
  follow?: number;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_elasticity-cn-0xldbqt****
   */
  instanceId?: string;
  /**
   * @remarks
   * The remarks of the API asset. You can use this parameter to add a custom annotation to the API asset for easier identification.
   * 
   * @example
   * know
   */
  note?: string;
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
   * The ID of the Alibaba Cloud resource group to which the WAF instance belongs.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      clusterId: 'ClusterId',
      follow: 'Follow',
      instanceId: 'InstanceId',
      note: 'Note',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      clusterId: 'string',
      follow: 'number',
      instanceId: 'string',
      note: 'string',
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

