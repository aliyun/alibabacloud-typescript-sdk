// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DettachAssetGroupToInstanceRequestAssetGroupList extends $dara.Model {
  /**
   * @remarks
   * The ID of the asset. If the asset is a Web Application Firewall (WAF) instance, specify the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v2_public_cn-lbj382l****
   */
  name?: string;
  /**
   * @remarks
   * The region ID of the asset.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The type of the asset. Valid values:
   * 
   * *   **waf**: WAF instance
   * *   **ga**: Global Accelerator (GA) instance
   * 
   * This parameter is required.
   * 
   * @example
   * waf
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      region: 'Region',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      region: 'string',
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

export class DettachAssetGroupToInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the asset that you want to dissociate.
   * 
   * This parameter is required.
   */
  assetGroupList?: DettachAssetGroupToInstanceRequestAssetGroupList[];
  /**
   * @remarks
   * The ID of the instance.
   * 
   * >  You can call the [DescribeInstanceList](https://help.aliyun.com/document_detail/118698.html) operation to query the IDs of all Anti-DDoS Origin instances of paid editions.
   * 
   * This parameter is required.
   * 
   * @example
   * ddosbgp-xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the region in which the instance resides.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/118703.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      assetGroupList: 'AssetGroupList',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetGroupList: { 'type': 'array', 'itemType': DettachAssetGroupToInstanceRequestAssetGroupList },
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.assetGroupList)) {
      $dara.Model.validateArray(this.assetGroupList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

