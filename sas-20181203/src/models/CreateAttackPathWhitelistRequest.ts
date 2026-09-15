// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAttackPathWhitelistRequestAttackPathAssetList extends $dara.Model {
  /**
   * @remarks
   * The subtype of the cloud service asset.
   * 
   * > You can call [ListCloudAssetInstances](~~ListCloudAssetInstances~~) to query the subtype of the cloud service asset.
   * 
   * @example
   * 0
   */
  assetSubType?: number;
  /**
   * @remarks
   * The type of the cloud service asset.
   * 
   * > You can call [ListCloudAssetInstances](~~ListCloudAssetInstances~~) to query the type of the cloud service asset.
   * 
   * @example
   * 0
   */
  assetType?: number;
  /**
   * @remarks
   * The instance ID of the cloud service asset.
   * 
   * > You can call [ListCloudAssetInstances](~~ListCloudAssetInstances~~) to query the instance ID of the cloud service asset.
   * 
   * @example
   * i-8vb0e8qdaj0yyxjo****
   */
  instanceId?: string;
  /**
   * @remarks
   * The node type. Valid values:
   * - **start**: start node.
   * - **end**: end node.
   * 
   * @example
   * start
   */
  nodeType?: string;
  /**
   * @remarks
   * The region ID of the cloud service asset instance.
   * 
   * > You can call [ListCloudAssetInstances](~~ListCloudAssetInstances~~) to query the region ID of the cloud service asset instance.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The vendor of the cloud service asset.
   * 
   * > You can call [ListCloudAssetInstances](~~ListCloudAssetInstances~~) to query the vendor of the cloud service asset.
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
   * The list of cloud service assets in the attack path.
   */
  attackPathAssetList?: CreateAttackPathWhitelistRequestAttackPathAssetList[];
  /**
   * @remarks
   * The path name.
   * 
   * > You can call [ListAvailableAttackPath](~~ListAvailableAttackPath~~) to query the path name.
   * > This parameter is required. If this parameter is not specified, the API returns a 400 InvalidParam error.
   * 
   * @example
   * ecs_get_credential_by_create_login_profile
   */
  pathName?: string;
  /**
   * @remarks
   * The path type.
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
   * The remarks.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The whitelist name.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  whitelistName?: string;
  /**
   * @remarks
   * The whitelist type. Valid values:
   * 
   * - **ALL_ASSET**: all assets.
   * - **PART_ASSET**: partial assets.
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

