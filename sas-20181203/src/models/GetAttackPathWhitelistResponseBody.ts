// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAttackPathWhitelistResponseBodyAttackPathWhitelistAttackPathAssetList extends $dara.Model {
  /**
   * @remarks
   * The subtype of the cloud service asset.
   * 
   * @example
   * 0
   */
  assetSubType?: number;
  /**
   * @remarks
   * The type of the cloud service asset.
   * 
   * @example
   * 1
   */
  assetType?: number;
  /**
   * @remarks
   * The instance ID of the cloud service asset.
   * 
   * @example
   * i-8vb0e8qdaj0yyxjo****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * xwl
   */
  instanceName?: string;
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
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The vendor of the cloud service asset.
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
      instanceName: 'InstanceName',
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
      instanceName: 'string',
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

export class GetAttackPathWhitelistResponseBodyAttackPathWhitelist extends $dara.Model {
  /**
   * @remarks
   * The list of cloud service assets in the attack path.
   */
  attackPathAssetList?: GetAttackPathWhitelistResponseBodyAttackPathWhitelistAttackPathAssetList[];
  /**
   * @remarks
   * The attack path whitelist ID.
   * 
   * @example
   * apwl-b33dec0acf9b42aabde032d656c0****
   */
  attackPathWhitelistId?: string;
  /**
   * @remarks
   * The timestamp of the last modification, in milliseconds.
   * 
   * @example
   * 1743004587000
   */
  lastModifiedTimestamp?: number;
  /**
   * @remarks
   * The path name.
   * 
   * @example
   * ecs_get_credential_by_create_login_profile
   */
  pathName?: string;
  /**
   * @remarks
   * The path type.
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
      lastModifiedTimestamp: 'LastModifiedTimestamp',
      pathName: 'PathName',
      pathType: 'PathType',
      remark: 'Remark',
      whitelistName: 'WhitelistName',
      whitelistType: 'WhitelistType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackPathAssetList: { 'type': 'array', 'itemType': GetAttackPathWhitelistResponseBodyAttackPathWhitelistAttackPathAssetList },
      attackPathWhitelistId: 'string',
      lastModifiedTimestamp: 'number',
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

export class GetAttackPathWhitelistResponseBody extends $dara.Model {
  /**
   * @remarks
   * The attack path whitelist.
   */
  attackPathWhitelist?: GetAttackPathWhitelistResponseBodyAttackPathWhitelist;
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique ID for each request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * D03DD0FD-6041-5107-AC00-383E28F1****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      attackPathWhitelist: 'AttackPathWhitelist',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackPathWhitelist: GetAttackPathWhitelistResponseBodyAttackPathWhitelist,
      requestId: 'string',
    };
  }

  validate() {
    if(this.attackPathWhitelist && typeof (this.attackPathWhitelist as any).validate === 'function') {
      (this.attackPathWhitelist as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

