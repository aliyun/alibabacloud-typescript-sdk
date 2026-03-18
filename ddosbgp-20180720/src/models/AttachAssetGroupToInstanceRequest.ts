// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachAssetGroupToInstanceRequestAssetGroupList extends $dara.Model {
  /**
   * @remarks
   * The UID of the member to which the asset belongs.
   * 
   * @example
   * 1743970208320***
   */
  memberUid?: string;
  /**
   * @remarks
   * The ID of the asset that you want to add. If the asset is a Web Application Firewall (WAF) instance, specify the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf-test-001
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
   * The type of the asset.
   * 
   * This parameter is required.
   * 
   * @example
   * waf
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      memberUid: 'MemberUid',
      name: 'Name',
      region: 'Region',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberUid: 'string',
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

export class AttachAssetGroupToInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the asset to be associated.
   * 
   * This parameter is required.
   */
  assetGroupList?: AttachAssetGroupToInstanceRequestAssetGroupList[];
  /**
   * @remarks
   * The ID of the instance to query.
   * 
   * >  You can call the [DescribeInstanceList](https://help.aliyun.com/document_detail/118698.html) operation to query the IDs of all Anti-DDoS Origin instances of paid editions.
   * 
   * This parameter is required.
   * 
   * @example
   * ddosbgp-cn-n6w1r7nz****
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
      assetGroupList: { 'type': 'array', 'itemType': AttachAssetGroupToInstanceRequestAssetGroupList },
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

