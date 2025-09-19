// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAttackPathSensitiveAssetConfigRequestAttackPathAssetList extends $dara.Model {
  /**
   * @remarks
   * Subtype of the cloud product asset.
   * 
   * > You can call [ListCloudAssetInstances](~~ListCloudAssetInstances~~) to query the subtype of the cloud product asset.
   * 
   * This parameter is required.
   * 
   * @example
   * 4
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
   * 18
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
   * i-2ze357b4mrkwi7tq****
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
   * Vendor of the cloud product asset.
   * 
   * > You can call [ListCloudAssetInstances](~~ListCloudAssetInstances~~) to query the vendor of the cloud product asset.
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

export class UpdateAttackPathSensitiveAssetConfigRequest extends $dara.Model {
  /**
   * @remarks
   * List of cloud product assets in the attack path.
   * 
   * This parameter is required.
   */
  attackPathAssetList?: UpdateAttackPathSensitiveAssetConfigRequestAttackPathAssetList[];
  /**
   * @remarks
   * ID of the sensitive asset setting for the attack path.
   * 
   * This parameter is required.
   * 
   * @example
   * apsac-123
   */
  attackPathSensitiveAssetConfigId?: string;
  static names(): { [key: string]: string } {
    return {
      attackPathAssetList: 'AttackPathAssetList',
      attackPathSensitiveAssetConfigId: 'AttackPathSensitiveAssetConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackPathAssetList: { 'type': 'array', 'itemType': UpdateAttackPathSensitiveAssetConfigRequestAttackPathAssetList },
      attackPathSensitiveAssetConfigId: 'string',
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

