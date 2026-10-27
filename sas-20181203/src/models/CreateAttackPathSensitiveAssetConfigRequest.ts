// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAttackPathSensitiveAssetConfigRequestAttackPathAssetList extends $dara.Model {
  /**
   * @remarks
   * The subtype of the cloud service asset.
   * 
   * > You can call the [ListCloudAssetInstances](~~ListCloudAssetInstances~~) operation to query the subtype of the cloud service asset.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  assetSubType?: number;
  /**
   * @remarks
   * The type of the cloud service asset.
   * 
   * > You can call the [ListCloudAssetInstances](~~ListCloudAssetInstances~~) operation to query the type of the cloud service asset.
   * 
   * This parameter is required.
   * 
   * @example
   * 17
   */
  assetType?: number;
  /**
   * @remarks
   * The instance ID of the cloud service asset.
   * 
   * > You can call the [ListCloudAssetInstances](~~ListCloudAssetInstances~~) operation to query the instance ID of the cloud service asset.
   * 
   * This parameter is required.
   * 
   * @example
   * i-8vb0e8qdaj0yyxjo****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the cloud service asset instance.
   * 
   * > You can call the [ListCloudAssetInstances](~~ListCloudAssetInstances~~) operation to query the region ID of the cloud service asset instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The vendor of the cloud service asset.
   * 
   * > You can call the [ListCloudAssetInstances](~~ListCloudAssetInstances~~) operation to query the vendor of the cloud service asset.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  vendor?: number;
  static names(): { [key: string]: string } {
    return {
      assetSubType: 'AssetSubType',
      assetType: 'AssetType',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetSubType: 'number',
      assetType: 'number',
      instanceId: 'string',
      regionId: 'string',
      vendor: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAttackPathSensitiveAssetConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The list of cloud service assets.
   * 
   * This parameter is required.
   */
  attackPathAssetList?: CreateAttackPathSensitiveAssetConfigRequestAttackPathAssetList[];
  /**
   * @remarks
   * The configuration type. Valid values:
   * - asset_instance: asset.
   * 
   * This parameter is required.
   * 
   * @example
   * asset_instance
   */
  configType?: string;
  static names(): { [key: string]: string } {
    return {
      attackPathAssetList: 'AttackPathAssetList',
      configType: 'ConfigType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackPathAssetList: { 'type': 'array', 'itemType': CreateAttackPathSensitiveAssetConfigRequestAttackPathAssetList },
      configType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attackPathAssetList)) {
      $dara.Model.validateArray(this.attackPathAssetList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

