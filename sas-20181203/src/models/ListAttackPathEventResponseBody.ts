// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAttackPathEventResponseBodyAttackPathEventListDstAsset extends $dara.Model {
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
   * The ID of the cloud service asset instance.
   * 
   * @example
   * i-uf6a1tt9umxwoxqn****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * test
   */
  instanceName?: string;
  /**
   * @remarks
   * The region ID of the cloud service asset instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The sensitive asset flag. Valid values:
   * - **0**: Not a sensitive asset.
   * - **1**: A sensitive asset.
   * 
   * @example
   * 1
   */
  sensitiveAssetFlag?: number;
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
   * The subtype of the cloud service asset.
   * 
   * @example
   * 1
   */
  assetSubType?: number;
  /**
   * @remarks
   * The type of the cloud service asset.
   * 
   * @example
   * 0
   */
  assetType?: number;
  /**
   * @remarks
   * The ID of the cloud service asset instance.
   * 
   * @example
   * i-bp18ifsr1tu1dx39****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * test
   */
  instanceName?: string;
  /**
   * @remarks
   * The region ID of the cloud service asset instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The sensitive asset flag. Valid values:
   * - **0**: Not a sensitive asset.
   * - **1**: A sensitive asset.
   * 
   * @example
   * 0
   */
  sensitiveAssetFlag?: number;
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
   * The destination asset.
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
   * The timestamp of the most recent detection. Unit: milliseconds.
   * 
   * @example
   * 1742869699000
   */
  lastTime?: number;
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
   * The path name description.
   * 
   * @example
   * ECS Instance Can Obtain Long-term Access Credential by Enabling Console Logon for RAM User
   */
  pathNameDesc?: string;
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
   * The path type description.
   * 
   * @example
   * Privilege Escalation by Role
   */
  pathTypeDesc?: string;
  /**
   * @remarks
   * The risk level.
   * 
   * @example
   * suspicious
   */
  riskLevel?: string;
  /**
   * @remarks
   * The source asset.
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
   * The number of entries on the current page in a paged query.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * The page number of the current page in a paged query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
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
   * The list of attack path events.
   */
  attackPathEventList?: ListAttackPathEventResponseBodyAttackPathEventList[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListAttackPathEventResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID, which is a unique identifier generated by Alibaba Cloud for the request. You can use this ID to troubleshoot issues.
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

