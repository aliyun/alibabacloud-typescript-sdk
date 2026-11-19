// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBizEntityInfoByVersionResponseBodyBizEntityInfoBizObject extends $dara.Model {
  /**
   * @remarks
   * The ID of the approval process.
   * 
   * @example
   * 221323121212
   */
  approvalId?: string;
  /**
   * @remarks
   * The approval status. For more information, see the operation for querying business entity details.
   * 
   * @example
   * APPROVING
   */
  approvalStatus?: string;
  /**
   * @remarks
   * The list of IDs of child business objects.
   */
  childBizEntityIdList?: number[];
  /**
   * @remarks
   * The description of the business object.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The display name of the business object.
   * 
   * @example
   * create_object_name
   */
  displayName?: string;
  /**
   * @remarks
   * The time when the business object was created.
   * 
   * @example
   * 2024-10-10 10:00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the business object was last updated.
   * 
   * @example
   * 2024-10-10 10:00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the business object.
   * 
   * @example
   * 1011
   */
  id?: number;
  /**
   * @remarks
   * The ID of the user who last modified the business object.
   * 
   * @example
   * 30010010
   */
  lastModifier?: string;
  /**
   * @remarks
   * The name of the user who last modified the business object.
   * 
   * @example
   * Zhang San
   */
  lastModifierName?: string;
  /**
   * @remarks
   * The code of the business object.
   * 
   * @example
   * create_object_code_name
   */
  name?: string;
  /**
   * @remarks
   * The online status. For more information, see the operation for querying business entity details.
   * 
   * @example
   * 1
   */
  onlineStatus?: string;
  /**
   * @remarks
   * The ID of the owner of the business object.
   * 
   * @example
   * Zhang San
   */
  ownerName?: string;
  /**
   * @remarks
   * The ID of the owner of the business object.
   * 
   * @example
   * 30010010
   */
  ownerUserId?: string;
  /**
   * @remarks
   * The ID of the parent entity inherited by the business object. Only common business objects can be configured to inherit entities, and they can only inherit online business objects.
   * 
   * @example
   * 116306
   */
  parentId?: number;
  /**
   * @remarks
   * The list of IDs of associated online business entities.
   */
  refBizEntityIdList?: number[];
  /**
   * @remarks
   * The number of associated logical dimension tables.
   * 
   * @example
   * 1
   */
  refDimTableCount?: number;
  /**
   * @remarks
   * The number of associated logical aggregate tables.
   * 
   * @example
   * 1
   */
  refSummaryTableCount?: number;
  /**
   * @remarks
   * The status. For more information, see the operation for querying business entity details.
   * 
   * @example
   * 100
   */
  status?: string;
  /**
   * @remarks
   * The object type of the business object. For more information, see the operation for querying business entity details.
   * 
   * @example
   * NORMAL
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      approvalId: 'ApprovalId',
      approvalStatus: 'ApprovalStatus',
      childBizEntityIdList: 'ChildBizEntityIdList',
      description: 'Description',
      displayName: 'DisplayName',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      lastModifier: 'LastModifier',
      lastModifierName: 'LastModifierName',
      name: 'Name',
      onlineStatus: 'OnlineStatus',
      ownerName: 'OwnerName',
      ownerUserId: 'OwnerUserId',
      parentId: 'ParentId',
      refBizEntityIdList: 'RefBizEntityIdList',
      refDimTableCount: 'RefDimTableCount',
      refSummaryTableCount: 'RefSummaryTableCount',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalId: 'string',
      approvalStatus: 'string',
      childBizEntityIdList: { 'type': 'array', 'itemType': 'number' },
      description: 'string',
      displayName: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      lastModifier: 'string',
      lastModifierName: 'string',
      name: 'string',
      onlineStatus: 'string',
      ownerName: 'string',
      ownerUserId: 'string',
      parentId: 'number',
      refBizEntityIdList: { 'type': 'array', 'itemType': 'number' },
      refDimTableCount: 'number',
      refSummaryTableCount: 'number',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.childBizEntityIdList)) {
      $dara.Model.validateArray(this.childBizEntityIdList);
    }
    if(Array.isArray(this.refBizEntityIdList)) {
      $dara.Model.validateArray(this.refBizEntityIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBizEntityInfoByVersionResponseBodyBizEntityInfoBizProcess extends $dara.Model {
  /**
   * @remarks
   * The ID of the approval process.
   * 
   * @example
   * 221323121212
   */
  approvalId?: string;
  /**
   * @remarks
   * The approval status. For more information, see the operation for querying business entity details.
   * 
   * @example
   * APPROVING
   */
  approvalStatus?: string;
  /**
   * @remarks
   * The list of business event activity IDs included in the business process activity. This field is valid only when the entity is a business process activity.
   */
  bizEventEntityIdList?: number[];
  /**
   * @remarks
   * The description of the business activity.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The display name of the business activity.
   * 
   * @example
   * Business activity test
   */
  displayName?: string;
  /**
   * @remarks
   * The time when the business object was created.
   * 
   * @example
   * 2024-10-10 10:00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the business object was last updated.
   * 
   * @example
   * 2024-10-10 10:00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * Indicates whether the business process activity has dependents.
   */
  hasDependent?: boolean;
  /**
   * @remarks
   * The ID of the business activity.
   * 
   * @example
   * 1011
   */
  id?: number;
  /**
   * @remarks
   * The ID of the user who last modified the business object.
   * 
   * @example
   * 30010010
   */
  lastModifier?: string;
  /**
   * @remarks
   * The name of the user who last modified the business object.
   * 
   * @example
   * Zhang San
   */
  lastModifierName?: string;
  /**
   * @remarks
   * The name of the business activity.
   * 
   * @example
   * create_process_code_name
   */
  name?: string;
  /**
   * @remarks
   * The online status. For more information, see the operation for querying business entity details.
   * 
   * @example
   * 1
   */
  onlineStatus?: string;
  /**
   * @remarks
   * The ID of the owner of the business object.
   * 
   * @example
   * Zhang San
   */
  ownerName?: string;
  /**
   * @remarks
   * The ID of the owner of the business object.
   * 
   * @example
   * 30010010
   */
  ownerUserId?: string;
  /**
   * @remarks
   * The preceding business process activities of the current business process activity.
   */
  preBizProcessIdList?: number[];
  /**
   * @remarks
   * The list of IDs of associated online business entities.
   */
  refBizEntityIdList?: number[];
  /**
   * @remarks
   * The number of associated logical fact tables.
   * 
   * @example
   * 1
   */
  refFactTableCount?: number;
  /**
   * @remarks
   * The status. For more information, see the operation for querying business entity details.
   * 
   * @example
   * 100
   */
  status?: string;
  /**
   * @remarks
   * The type of the business activity. For more information, see the operation for querying business entity details.
   * 
   * @example
   * BIZ_EVENT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      approvalId: 'ApprovalId',
      approvalStatus: 'ApprovalStatus',
      bizEventEntityIdList: 'BizEventEntityIdList',
      description: 'Description',
      displayName: 'DisplayName',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      hasDependent: 'HasDependent',
      id: 'Id',
      lastModifier: 'LastModifier',
      lastModifierName: 'LastModifierName',
      name: 'Name',
      onlineStatus: 'OnlineStatus',
      ownerName: 'OwnerName',
      ownerUserId: 'OwnerUserId',
      preBizProcessIdList: 'PreBizProcessIdList',
      refBizEntityIdList: 'RefBizEntityIdList',
      refFactTableCount: 'RefFactTableCount',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalId: 'string',
      approvalStatus: 'string',
      bizEventEntityIdList: { 'type': 'array', 'itemType': 'number' },
      description: 'string',
      displayName: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      hasDependent: 'boolean',
      id: 'number',
      lastModifier: 'string',
      lastModifierName: 'string',
      name: 'string',
      onlineStatus: 'string',
      ownerName: 'string',
      ownerUserId: 'string',
      preBizProcessIdList: { 'type': 'array', 'itemType': 'number' },
      refBizEntityIdList: { 'type': 'array', 'itemType': 'number' },
      refFactTableCount: 'number',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bizEventEntityIdList)) {
      $dara.Model.validateArray(this.bizEventEntityIdList);
    }
    if(Array.isArray(this.preBizProcessIdList)) {
      $dara.Model.validateArray(this.preBizProcessIdList);
    }
    if(Array.isArray(this.refBizEntityIdList)) {
      $dara.Model.validateArray(this.refBizEntityIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBizEntityInfoByVersionResponseBodyBizEntityInfo extends $dara.Model {
  /**
   * @remarks
   * The business object.
   */
  bizObject?: GetBizEntityInfoByVersionResponseBodyBizEntityInfoBizObject;
  /**
   * @remarks
   * The business activity.
   */
  bizProcess?: GetBizEntityInfoByVersionResponseBodyBizEntityInfoBizProcess;
  /**
   * @remarks
   * The ID of the business unit to which the business object belongs.
   * 
   * @example
   * 6798087749072704
   */
  bizUnitId?: number;
  /**
   * @remarks
   * The ID of the data domain to which the entity belongs.
   * 
   * @example
   * 20101011
   */
  dataDomainId?: number;
  /**
   * @remarks
   * The business entity type. For more information, see the Query business entity details API operation.
   * 
   * @example
   * BIZ_OBJECT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizObject: 'BizObject',
      bizProcess: 'BizProcess',
      bizUnitId: 'BizUnitId',
      dataDomainId: 'DataDomainId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizObject: GetBizEntityInfoByVersionResponseBodyBizEntityInfoBizObject,
      bizProcess: GetBizEntityInfoByVersionResponseBodyBizEntityInfoBizProcess,
      bizUnitId: 'number',
      dataDomainId: 'number',
      type: 'string',
    };
  }

  validate() {
    if(this.bizObject && typeof (this.bizObject as any).validate === 'function') {
      (this.bizObject as any).validate();
    }
    if(this.bizProcess && typeof (this.bizProcess as any).validate === 'function') {
      (this.bizProcess as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBizEntityInfoByVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The creation result.
   */
  bizEntityInfo?: GetBizEntityInfoByVersionResponseBodyBizEntityInfo;
  /**
   * @remarks
   * The error code. A value of OK indicates that the request is successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code returned by the backend.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      bizEntityInfo: 'BizEntityInfo',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizEntityInfo: GetBizEntityInfoByVersionResponseBodyBizEntityInfo,
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.bizEntityInfo && typeof (this.bizEntityInfo as any).validate === 'function') {
      (this.bizEntityInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

