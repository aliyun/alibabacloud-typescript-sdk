// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAttackPathEventRequestAttackPathAssetList extends $dara.Model {
  /**
   * @remarks
   * Subtype of the cloud product asset.
   * 
   * > You can call [ListSupportAttackPathAsset](~~ListSupportAttackPathAsset~~) to query the subtype of the cloud product asset.
   * 
   * @example
   * 2
   */
  assetSubType?: number;
  /**
   * @remarks
   * Type of the cloud product asset.
   * 
   * > You can call [ListSupportAttackPathAsset](~~ListSupportAttackPathAsset~~) to query the type of the cloud product asset.
   * 
   * @example
   * 17
   */
  assetType?: number;
  /**
   * @remarks
   * Node type, values:
   * - **start**: start point.
   * - **end**: end point.
   * 
   * @example
   * start
   */
  nodeType?: string;
  /**
   * @remarks
   * Vendor of the cloud product asset.
   * > You can call [ListSupportAttackPathAsset](~~ListSupportAttackPathAsset~~) to query the vendor of the cloud product asset.
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
   * List of cloud product assets in the attack path.
   */
  attackPathAssetList?: ListAttackPathEventRequestAttackPathAssetList[];
  /**
   * @remarks
   * Specifies from which page of the returned results the query results should be displayed. The default value is 1, indicating that the display starts from the first page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Timestamp of the end time. Unit: milliseconds.
   * 
   * @example
   * 1668064495000
   */
  endTime?: number;
  /**
   * @remarks
   * Sets the language type for requests and received messages, with the default being **zh**. Values:
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
   * The maximum number of data entries displayed per page in a paginated query. The default value is **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Description of the path name.
   * > You can call [ListAvailableAttackPath](~~ListAvailableAttackPath~~) to query the path name description.
   * 
   * @example
   * ECS Instance Can Obtain Long-term Access Credential by Enabling Console Logon for RAM User
   */
  pathNameDesc?: string;
  /**
   * @remarks
   * Path type.
   * > You can call [ListAvailableAttackPath](~~ListAvailableAttackPath~~) to query the path type.
   * 
   * @example
   * role_escalation
   */
  pathType?: string;
  /**
   * @remarks
   * List of risk level information.
   */
  riskLevelList?: string[];
  /**
   * @remarks
   * Timestamp of the start time. Unit: milliseconds.
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

