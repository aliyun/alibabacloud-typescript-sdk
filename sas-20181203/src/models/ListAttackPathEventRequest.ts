// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAttackPathEventRequestAttackPathAssetList extends $dara.Model {
  /**
   * @remarks
   * The subtype of the cloud service asset.
   * 
   * > You can call the [ListSupportAttackPathAsset](~~ListSupportAttackPathAsset~~) operation to query the subtype of the cloud service asset.
   * 
   * @example
   * 2
   */
  assetSubType?: number;
  /**
   * @remarks
   * The type of the cloud service asset.
   * 
   * > You can call the [ListSupportAttackPathAsset](~~ListSupportAttackPathAsset~~) operation to query the type of the cloud service asset.
   * 
   * @example
   * 17
   */
  assetType?: number;
  /**
   * @remarks
   * The node type. Valid values:
   * - **start**: the start node
   * - **end**: the end node
   * 
   * @example
   * start
   */
  nodeType?: string;
  /**
   * @remarks
   * The vendor of the cloud service asset.
   * > You can call the [ListSupportAttackPathAsset](~~ListSupportAttackPathAsset~~) operation to query the vendor of the cloud service asset.
   * 
   * @example
   * 0
   */
  vendor?: number;
  static names(): { [key: string]: string } {
    return {
      assetSubType: 'AssetSubType',
      assetType: 'AssetType',
      nodeType: 'NodeType',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetSubType: 'number',
      assetType: 'number',
      nodeType: 'string',
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

export class ListAttackPathEventRequest extends $dara.Model {
  /**
   * @remarks
   * The list of cloud service assets in the attack path.
   */
  attackPathAssetList?: ListAttackPathEventRequestAttackPathAssetList[];
  /**
   * @remarks
   * The number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The timestamp of the end time. Unit: milliseconds.
   * 
   * @example
   * 1668064495000
   */
  endTime?: number;
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page in a paging query. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The description of the path name.
   * > You can call the [ListAvailableAttackPath](~~ListAvailableAttackPath~~) operation to query the description of the path name.
   * 
   * @example
   * ECS Instance Can Obtain Long-term Access Credential by Enabling Console Logon for RAM User
   */
  pathNameDesc?: string;
  /**
   * @remarks
   * The path type.
   * > You can call the [ListAvailableAttackPath](~~ListAvailableAttackPath~~) operation to query the path type.
   * 
   * @example
   * role_escalation
   */
  pathType?: string;
  /**
   * @remarks
   * The list of risk levels.
   */
  riskLevelList?: string[];
  /**
   * @remarks
   * The timestamp of the start time. Unit: milliseconds.
   * 
   * @example
   * 1666886400000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      attackPathAssetList: 'AttackPathAssetList',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      lang: 'Lang',
      pageSize: 'PageSize',
      pathNameDesc: 'PathNameDesc',
      pathType: 'PathType',
      riskLevelList: 'RiskLevelList',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackPathAssetList: { 'type': 'array', 'itemType': ListAttackPathEventRequestAttackPathAssetList },
      currentPage: 'number',
      endTime: 'number',
      lang: 'string',
      pageSize: 'number',
      pathNameDesc: 'string',
      pathType: 'string',
      riskLevelList: { 'type': 'array', 'itemType': 'string' },
      startTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.attackPathAssetList)) {
      $dara.Model.validateArray(this.attackPathAssetList);
    }
    if(Array.isArray(this.riskLevelList)) {
      $dara.Model.validateArray(this.riskLevelList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

