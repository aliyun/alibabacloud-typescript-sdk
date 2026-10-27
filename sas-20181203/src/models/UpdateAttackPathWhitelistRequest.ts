// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAttackPathWhitelistRequestAttackPathAssetList extends $dara.Model {
  /**
   * @remarks
   * The subtype of the cloud asset.
   * 
   * > You can call [ListCloudAssetInstances](~~ListCloudAssetInstances~~) to query the subtype of the cloud asset.
   * 
   * @example
   * 0
   */
  assetSubType?: number;
  /**
   * @remarks
   * The type of the cloud asset.
   * 
   * > You can call [ListCloudAssetInstances](~~ListCloudAssetInstances~~) to query the type of the cloud asset.
   * 
   * @example
   * 0
   */
  assetType?: number;
  /**
   * @remarks
   * Instance ID of the cloud asset instance.
   * 
   * > You can call [ListCloudAssetInstances](~~ListCloudAssetInstances~~) to query instance ID of the cloud asset instance.
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
   * The region ID of the cloud asset instance.
   * 
   * > You can call [ListCloudAssetInstances](~~ListCloudAssetInstances~~) to query the region ID of the cloud asset instance.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The vendor of the cloud asset.
   * 
   * > You can call [ListCloudAssetInstances](~~ListCloudAssetInstances~~) to query the vendor of the cloud asset.
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

export class UpdateAttackPathWhitelistRequest extends $dara.Model {
  /**
   * @remarks
   * The list of cloud assets in the attack path.
   */
  attackPathAssetList?: UpdateAttackPathWhitelistRequestAttackPathAssetList[];
  /**
   * @remarks
   * The ID of the attack path whitelist.
   * > You can call [ListAttackPathWhitelist](~~ListAttackPathWhitelist~~) to query the ID of the attack path whitelist.
   * 
   * This parameter is required.
   * 
   * @example
   * apwl-b33dec0acf9b42aabde032d656c0****
   */
  attackPathWhitelistId?: string;
  /**
   * @remarks
   * The path name.
   * 
   * > You can call [ListAvailableAttackPath](~~ListAvailableAttackPath~~) to query the path name.
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
   * @example
   * role_escalation
   */
  pathType?: string;
  /**
   * @remarks
   * The remark.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The name of the whitelist.
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
   * @example
   * ALL_ASSET
   */
  whitelistType?: string;
  static names(): { [key: string]: string } {
    return {
      attackPathAssetList: 'AttackPathAssetList',
      attackPathWhitelistId: 'AttackPathWhitelistId',
      pathName: 'PathName',
      pathType: 'PathType',
      remark: 'Remark',
      whitelistName: 'WhitelistName',
      whitelistType: 'WhitelistType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackPathAssetList: { 'type': 'array', 'itemType': UpdateAttackPathWhitelistRequestAttackPathAssetList },
      attackPathWhitelistId: 'string',
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

