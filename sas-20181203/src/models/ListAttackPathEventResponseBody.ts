// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAttackPathEventResponseBodyAttackPathEventListDstAsset extends $dara.Model {
  /**
   * @remarks
   * Subtype of the cloud product asset.
   * 
   * @example
   * 0
   */
  assetSubType?: number;
  /**
   * @remarks
   * Type of the cloud product asset.
   * 
   * @example
   * 1
   */
  assetType?: number;
  /**
   * @remarks
   * ID of the cloud product asset instance.
   * 
   * @example
   * i-uf6a1tt9umxwoxqn****
   */
  instanceId?: string;
  /**
   * @remarks
   * Instance name.
   * 
   * @example
   * test
   */
  instanceName?: string;
  /**
   * @remarks
   * ID of the region where the cloud product asset instance is located.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Sensitive asset flag. Values:
   * - **0**: Non-sensitive asset.
   * - **1**: Sensitive asset.
   * 
   * @example
   * 1
   */
  sensitiveAssetFlag?: number;
  /**
   * @remarks
   * Vendor of the cloud product asset.
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
      regionId: 'RegionId',
      sensitiveAssetFlag: 'SensitiveAssetFlag',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetSubType: 'number',
      assetType: 'number',
      instanceId: 'string',
      instanceName: 'string',
      regionId: 'string',
      sensitiveAssetFlag: 'number',
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

export class ListAttackPathEventResponseBodyAttackPathEventListSrcAsset extends $dara.Model {
  /**
   * @remarks
   * Subtype of the cloud product asset.
   * 
   * @example
   * 1
   */
  assetSubType?: number;
  /**
   * @remarks
   * Type of the cloud product asset.
   * 
   * @example
   * 0
   */
  assetType?: number;
  /**
   * @remarks
   * ID of the cloud product asset instance.
   * 
   * @example
   * i-bp18ifsr1tu1dx39****
   */
  instanceId?: string;
  /**
   * @remarks
   * Instance name.
   * 
   * @example
   * test
   */
  instanceName?: string;
  /**
   * @remarks
   * ID of the region where the cloud product asset instance is located.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Sensitive asset flag. Values:
   * - **0**: Non-sensitive asset.
   * - **1**: Sensitive asset.
   * 
   * @example
   * 0
   */
  sensitiveAssetFlag?: number;
  /**
   * @remarks
   * Vendor of the cloud product asset.
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
      regionId: 'RegionId',
      sensitiveAssetFlag: 'SensitiveAssetFlag',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetSubType: 'number',
      assetType: 'number',
      instanceId: 'string',
      instanceName: 'string',
      regionId: 'string',
      sensitiveAssetFlag: 'number',
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

export class ListAttackPathEventResponseBodyAttackPathEventList extends $dara.Model {
  /**
   * @remarks
   * Destination asset.
   */
  dstAsset?: ListAttackPathEventResponseBodyAttackPathEventListDstAsset;
  /**
   * @remarks
   * The ID of the alert event.
   * 
   * @example
   * 123
   */
  eventId?: number;
  /**
   * @remarks
   * Timestamp of the latest discovery. Unit: milliseconds.
   * 
   * @example
   * 1742869699000
   */
  lastTime?: number;
  /**
   * @remarks
   * Path name.
   * 
   * @example
   * ecs_get_credential_by_create_login_profile
   */
  pathName?: string;
  /**
   * @remarks
   * Description of the path name.
   * 
   * @example
   * ECS Instance Can Obtain Long-term Access Credential by Enabling Console Logon for RAM User
   */
  pathNameDesc?: string;
  /**
   * @remarks
   * Path type.
   * 
   * @example
   * role_escalation
   */
  pathType?: string;
  /**
   * @remarks
   * Description of the path type.
   * 
   * @example
   * Privilege Escalation by Role
   */
  pathTypeDesc?: string;
  /**
   * @remarks
   * Risk level.
   * 
   * @example
   * suspicious
   */
  riskLevel?: string;
  /**
   * @remarks
   * Source asset.
   */
  srcAsset?: ListAttackPathEventResponseBodyAttackPathEventListSrcAsset;
  static names(): { [key: string]: string } {
    return {
      dstAsset: 'DstAsset',
      eventId: 'EventId',
      lastTime: 'LastTime',
      pathName: 'PathName',
      pathNameDesc: 'PathNameDesc',
      pathType: 'PathType',
      pathTypeDesc: 'PathTypeDesc',
      riskLevel: 'RiskLevel',
      srcAsset: 'SrcAsset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstAsset: ListAttackPathEventResponseBodyAttackPathEventListDstAsset,
      eventId: 'number',
      lastTime: 'number',
      pathName: 'string',
      pathNameDesc: 'string',
      pathType: 'string',
      pathTypeDesc: 'string',
      riskLevel: 'string',
      srcAsset: ListAttackPathEventResponseBodyAttackPathEventListSrcAsset,
    };
  }

  validate() {
    if(this.dstAsset && typeof (this.dstAsset as any).validate === 'function') {
      (this.dstAsset as any).validate();
    }
    if(this.srcAsset && typeof (this.srcAsset as any).validate === 'function') {
      (this.srcAsset as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAttackPathEventResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of data entries displayed on the current page when performing a paginated query.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * The page number displayed in the pagination query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of data items displayed per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of data items.
   * 
   * @example
   * 30
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAttackPathEventResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of attack path events.
   */
  attackPathEventList?: ListAttackPathEventResponseBodyAttackPathEventList[];
  /**
   * @remarks
   * Pagination information.
   */
  pageInfo?: ListAttackPathEventResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of this request, which is a unique identifier generated by Alibaba Cloud for the request. It can be used for troubleshooting and problem localization.
   * 
   * @example
   * 3956048F-9D73-5EDB-834B-4827BB48****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      attackPathEventList: 'AttackPathEventList',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackPathEventList: { 'type': 'array', 'itemType': ListAttackPathEventResponseBodyAttackPathEventList },
      pageInfo: ListAttackPathEventResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attackPathEventList)) {
      $dara.Model.validateArray(this.attackPathEventList);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

