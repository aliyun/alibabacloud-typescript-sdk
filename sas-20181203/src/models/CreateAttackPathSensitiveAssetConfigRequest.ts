// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAttackPathSensitiveAssetConfigRequestAttackPathAssetList extends $dara.Model {
  /**
   * @remarks
   * Subtype of the cloud product asset.
   * 
   * > You can call [ListCloudAssetInstances](~~ListCloudAssetInstances~~) to query the subtype of the cloud product asset.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  assetSubType?: number;
  /**
   * @remarks
   * Type of the cloud product asset.
   * 
   * > You can call [ListCloudAssetInstances](~~ListCloudAssetInstances~~) to query the type of the cloud product asset.
   * 
   * This parameter is required.
   * 
   * @example
   * 17
   */
  assetType?: number;
  /**
   * @remarks
   * Cloud product asset instance ID.
   * 
   * > You can call [ListCloudAssetInstances](~~ListCloudAssetInstances~~) to query the cloud product asset instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * i-8vb0e8qdaj0yyxjo****
   */
  instanceId?: string;
  /**
   * @remarks
   * Region ID of the cloud product asset instance.
   * 
   * > You can call [ListCloudAssetInstances](~~ListCloudAssetInstances~~) to query the region ID of the cloud product asset instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Cloud product asset vendor.
   * 
   * > You can call [ListCloudAssetInstances](~~ListCloudAssetInstances~~) to query the cloud product asset vendor.
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
   * List of cloud product assets.
   * 
   * This parameter is required.
   */
  attackPathAssetList?: CreateAttackPathSensitiveAssetConfigRequestAttackPathAssetList[];
  /**
   * @remarks
   * Configuration type. Possible values:
   * - asset_instance: Asset.
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

