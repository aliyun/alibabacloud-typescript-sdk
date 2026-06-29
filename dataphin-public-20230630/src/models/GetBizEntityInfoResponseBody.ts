// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBizEntityInfoResponseBodyBizEntityInfoBizObject extends $dara.Model {
  /**
   * @remarks
   * The approval flow ID.
   * 
   * @example
   * 221323121212
   */
  approvalId?: string;
  /**
   * @remarks
   * The approval status. Valid values:
   * - INIT: Not submitted.
   * - APPROVING: Pending approval.
   * - AGREE: Approved.
   * - REJECT: Rejected.
   * - FAILED: Validation failed.
   * - REVOKE: Withdrawn.
   * 
   * @example
   * APPROVING
   */
  approvalStatus?: string;
  /**
   * @remarks
   * The list of child business objects of the business object.
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
   * The creation time.
   * 
   * @example
   * 2024-10-10 10:00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2024-10-10 10:00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The business object ID.
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
   * 张三
   */
  lastModifierName?: string;
  /**
   * @remarks
   * The code name of the business object.
   * 
   * @example
   * create_object_code_name
   */
  name?: string;
  /**
   * @remarks
   * The publish status. Valid values: 
   * - SUBMITTED: Not published.
   * - APPROVING: Pending approval.
   * - PUBLISHED: Published.
   * - REJECT: Publish failed.
   * 
   * @example
   * SUBMITTED
   */
  onlineStatus?: string;
  /**
   * @remarks
   * The owner of the business object.
   * 
   * @example
   * 张三
   */
  ownerName?: string;
  /**
   * @remarks
   * The owner of the business object.
   * 
   * @example
   * 30010010
   */
  ownerUserId?: string;
  /**
   * @remarks
   * The parent entity that the business object inherits from. Only common business objects support inheritance, and the parent entity must be a published business object.
   * 
   * @example
   * 116306
   */
  parentId?: number;
  /**
   * @remarks
   * The list of associated published business entity IDs.
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
   * The number of associated aggregate tables.
   * 
   * @example
   * 1
   */
  refSummaryTableCount?: number;
  /**
   * @remarks
   * The status. Valid values:
   * - DRAFT: Draft or not published.
   * - SUBMITTING: Submitting.
   * - SUBMITTED: Submitted.
   * - DEVELOPING: Developing.
   * - PUBLISHING: Publishing.
   * - PUBLISHED: Published.
   * 
   * @example
   * SUBMITTED
   */
  status?: string;
  /**
   * @remarks
   * The object type of the business object. For more information, refer to the create business entity operation.
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

export class GetBizEntityInfoResponseBodyBizEntityInfoBizProcess extends $dara.Model {
  /**
   * @remarks
   * The approval flow ID.
   * 
   * @example
   * 221323121212
   */
  approvalId?: string;
  /**
   * @remarks
   * The approval status. Valid values:
   * - INIT: Not submitted.
   * - APPROVING: Pending approval.
   * - AGREE: Approved.
   * - REJECT: Rejected.
   * - FAILED: Validation failed.
   * - REVOKE: Withdrawn.
   * 
   * @example
   * APPROVING
   */
  approvalStatus?: string;
  /**
   * @remarks
   * The list of business event activity IDs contained in the business flow activity. This parameter is valid only when the entity is a business flow activity.
   */
  bizEventEntityIdList?: number[];
  /**
   * @remarks
   * The description of the business process.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The display name of the business process.
   * 
   * @example
   * 业务活动测试
   */
  displayName?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-10-10 10:00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2024-10-10 10:00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * Indicates whether the business process is depended on by other entities.
   */
  hasDependent?: boolean;
  /**
   * @remarks
   * The business process ID.
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
   * 张三
   */
  lastModifierName?: string;
  /**
   * @remarks
   * The name of the business process.
   * 
   * @example
   * create_process_code_name
   */
  name?: string;
  /**
   * @remarks
   * The publish status. Valid values: 
   * - SUBMITTED: Not published.
   * - APPROVING: Pending approval.
   * - PUBLISHED: Published.
   * - REJECT: Publish failed.
   * 
   * @example
   * SUBMITTED
   */
  onlineStatus?: string;
  /**
   * @remarks
   * The owner of the business object.
   * 
   * @example
   * 张三
   */
  ownerName?: string;
  /**
   * @remarks
   * The owner of the business object.
   * 
   * @example
   * 30010010
   */
  ownerUserId?: string;
  /**
   * @remarks
   * The preceding business flow activities of the business flow activity.
   */
  preBizProcessIdList?: number[];
  /**
   * @remarks
   * The list of associated published business entity IDs.
   */
  refBizEntityIdList?: number[];
  /**
   * @remarks
   * The number of associated fact tables.
   * 
   * @example
   * 1
   */
  refFactTableCount?: number;
  /**
   * @remarks
   * The status. Valid values:
   * - DRAFT: Draft or not published.
   * - SUBMITTING: Submitting.
   * - SUBMITTED: Submitted.
   * - DEVELOPING: Developing.
   * - PUBLISHING: Publishing.
   * - PUBLISHED: Published.
   * 
   * @example
   * SUBMITTED
   */
  status?: string;
  /**
   * @remarks
   * The type of the business process. For more information, refer to the create business entity operation.
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

export class GetBizEntityInfoResponseBodyBizEntityInfo extends $dara.Model {
  /**
   * @remarks
   * The business object.
   */
  bizObject?: GetBizEntityInfoResponseBodyBizEntityInfoBizObject;
  /**
   * @remarks
   * The business process.
   */
  bizProcess?: GetBizEntityInfoResponseBodyBizEntityInfoBizProcess;
  /**
   * @remarks
   * The ID of the business unit to which the business process belongs.
   * 
   * @example
   * 6798087749072704
   */
  bizUnitId?: number;
  /**
   * @remarks
   * The ID of the data domain to which the business process belongs.
   * 
   * @example
   * 20101011
   */
  dataDomainId?: number;
  /**
   * @remarks
   * The business entity type. For more information, refer to the create business entity operation.
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
      bizObject: GetBizEntityInfoResponseBodyBizEntityInfoBizObject,
      bizProcess: GetBizEntityInfoResponseBodyBizEntityInfoBizProcess,
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

export class GetBizEntityInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business entity details.
   */
  bizEntityInfo?: GetBizEntityInfoResponseBodyBizEntityInfo;
  /**
   * @remarks
   * The error code. A value of OK indicates that the request was successful.
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
   * Indicates whether the request was successful.
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
      bizEntityInfo: GetBizEntityInfoResponseBodyBizEntityInfo,
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

