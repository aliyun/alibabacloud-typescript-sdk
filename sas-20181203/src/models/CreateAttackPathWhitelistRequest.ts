// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAttackPathWhitelistRequestAttackPathAssetList extends $dara.Model {
  /**
   * @remarks
   * Subtype of the cloud product asset.
   * 
   * > You can call [ListCloudAssetInstances](~~ListCloudAssetInstances~~) to query the subtype of the cloud product asset.
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
   * @example
   * 0
   */
  assetType?: number;
  /**
   * @remarks
   * Cloud product asset instance ID.
   * 
   * > You can call [ListCloudAssetInstances](~~ListCloudAssetInstances~~) to query the cloud product asset instance ID.
   * 
   * @example
   * i-8vb0e8qdaj0yyxjo****
   */
  instanceId?: string;
  /**
   * @remarks
   * Node type, with values:
   * - **start**: Start point.
   * - **end**: End point.
   * 
   * @example
   * start
   */
  nodeType?: string;
  /**
   * @remarks
   * Region ID of the cloud product asset instance.
   * 
   * > You can call [ListCloudAssetInstances](~~ListCloudAssetInstances~~) to query the region ID of the cloud product asset instance.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * Vendor of the cloud product asset.
   * 
   * > You can call [ListCloudAssetInstances](~~ListCloudAssetInstances~~) to query the vendor of the cloud product asset.
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
      nodeType: 'NodeType',
      regionId: 'RegionId',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetSubType: 'number',
      assetType: 'number',
      instanceId: 'string',
      nodeType: 'string',
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

export class CreateAttackPathWhitelistRequest extends $dara.Model {
  /**
   * @remarks
   * List of cloud product assets in the attack path.
   */
  attackPathAssetList?: CreateAttackPathWhitelistRequestAttackPathAssetList[];
  /**
   * @remarks
   * Path name.
   * 
   * > You can call [ListAvailableAttackPath](~~ListAvailableAttackPath~~) to query the path name.
   * 
   * @example
   * ecs_get_credential_by_create_login_profile
   */
  pathName?: string;
  /**
   * @remarks
   * Path type.
   * > You can call [ListAvailableAttackPath](~~ListAvailableAttackPath~~) to query the path type.
   * 
   * This parameter is required.
   * 
   * @example
   * role_escalation
   */
  pathType?: string;
  /**
   * @remarks
   * Remark information.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * Whitelist name.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  whitelistName?: string;
  /**
   * @remarks
   * Whitelist type. Values:
   * 
   * - **ALL_ASSET**: All assets
   * - **PART_ASSET**: Partial assets
   * 
   * This parameter is required.
   * 
   * @example
   * ALL_ASSET
   */
  whitelistType?: string;
  static names(): { [key: string]: string } {
    return {
      attackPathAssetList: 'AttackPathAssetList',
      pathName: 'PathName',
      pathType: 'PathType',
      remark: 'Remark',
      whitelistName: 'WhitelistName',
      whitelistType: 'WhitelistType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackPathAssetList: { 'type': 'array', 'itemType': CreateAttackPathWhitelistRequestAttackPathAssetList },
      pathName: 'string',
      pathType: 'string',
      remark: 'string',
      whitelistName: 'string',
      whitelistType: 'string',
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

