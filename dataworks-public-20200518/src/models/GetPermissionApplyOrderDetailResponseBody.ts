// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPermissionApplyOrderDetailResponseBodyApplyOrderDetailApproveAccountList extends $dara.Model {
  /**
   * @remarks
   * The UID of the Alibaba Cloud account that approved the application order.
   * 
   * @example
   * 182293110403****
   */
  baseId?: string;
  static names(): { [key: string]: string } {
    return {
      baseId: 'BaseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPermissionApplyOrderDetailResponseBodyApplyOrderDetailApproveContentProjectMetaObjectMetaListColumnMetaList extends $dara.Model {
  columnActions?: string[];
  /**
   * @remarks
   * The description of the requested column.
   * 
   * @example
   * Field description
   */
  columnComment?: string;
  /**
   * @remarks
   * The name of the requested column.
   * 
   * @example
   * aColumnName
   */
  columnName?: string;
  /**
   * @remarks
   * The security level of the requested column. Valid values: 0 to 9.
   * 
   * @example
   * 9
   */
  securityLevel?: string;
  static names(): { [key: string]: string } {
    return {
      columnActions: 'ColumnActions',
      columnComment: 'ColumnComment',
      columnName: 'ColumnName',
      securityLevel: 'SecurityLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnActions: { 'type': 'array', 'itemType': 'string' },
      columnComment: 'string',
      columnName: 'string',
      securityLevel: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.columnActions)) {
      $dara.Model.validateArray(this.columnActions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPermissionApplyOrderDetailResponseBodyApplyOrderDetailApproveContentProjectMetaObjectMetaList extends $dara.Model {
  actions?: string[];
  /**
   * @remarks
   * The column field information of the requested object.
   */
  columnMetaList?: GetPermissionApplyOrderDetailResponseBodyApplyOrderDetailApproveContentProjectMetaObjectMetaListColumnMetaList[];
  /**
   * @remarks
   * The name of the requested table.
   * 
   * @example
   * aTableName
   */
  objectName?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'Actions',
      columnMetaList: 'ColumnMetaList',
      objectName: 'ObjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
      columnMetaList: { 'type': 'array', 'itemType': GetPermissionApplyOrderDetailResponseBodyApplyOrderDetailApproveContentProjectMetaObjectMetaListColumnMetaList },
      objectName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    if(Array.isArray(this.columnMetaList)) {
      $dara.Model.validateArray(this.columnMetaList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPermissionApplyOrderDetailResponseBodyApplyOrderDetailApproveContentProjectMeta extends $dara.Model {
  /**
   * @remarks
   * The MaxCompute project in which the requested object resides.
   * 
   * @example
   * aMaxComputeProject
   */
  maxComputeProjectName?: string;
  /**
   * @remarks
   * The details of the requested object.
   */
  objectMetaList?: GetPermissionApplyOrderDetailResponseBodyApplyOrderDetailApproveContentProjectMetaObjectMetaList[];
  /**
   * @remarks
   * The ID of the DataWorks workspace in which the requested object resides.
   * 
   * @example
   * 123456
   */
  workspaceId?: number;
  static names(): { [key: string]: string } {
    return {
      maxComputeProjectName: 'MaxComputeProjectName',
      objectMetaList: 'ObjectMetaList',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxComputeProjectName: 'string',
      objectMetaList: { 'type': 'array', 'itemType': GetPermissionApplyOrderDetailResponseBodyApplyOrderDetailApproveContentProjectMetaObjectMetaList },
      workspaceId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.objectMetaList)) {
      $dara.Model.validateArray(this.objectMetaList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPermissionApplyOrderDetailResponseBodyApplyOrderDetailApproveContent extends $dara.Model {
  /**
   * @remarks
   * The reason for the application, which is used as a reference for administrator approval.
   * 
   * @example
   * I need to use this table
   */
  applyReason?: string;
  /**
   * @remarks
   * The expiration time of the requested permission. The value is a UNIX timestamp.
   * If LabelSecurity is not enabled for the MaxCompute project, or the security level of the requested table field is 0 or less than or equal to the security level of the requesting account, only permanent permissions can be requested.
   * 
   * @example
   * 1617115071885
   */
  deadline?: number;
  /**
   * @remarks
   * The type of the application order. Currently, only the value 1 is supported, which indicates an object ACL permission application.
   * 
   * @example
   * 1
   */
  orderType?: number;
  /**
   * @remarks
   * The project and workspace information to which the requested object belongs.
   */
  projectMeta?: GetPermissionApplyOrderDetailResponseBodyApplyOrderDetailApproveContentProjectMeta;
  static names(): { [key: string]: string } {
    return {
      applyReason: 'ApplyReason',
      deadline: 'Deadline',
      orderType: 'OrderType',
      projectMeta: 'ProjectMeta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyReason: 'string',
      deadline: 'number',
      orderType: 'number',
      projectMeta: GetPermissionApplyOrderDetailResponseBodyApplyOrderDetailApproveContentProjectMeta,
    };
  }

  validate() {
    if(this.projectMeta && typeof (this.projectMeta as any).validate === 'function') {
      (this.projectMeta as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPermissionApplyOrderDetailResponseBodyApplyOrderDetailGranteeObjectList extends $dara.Model {
  /**
   * @remarks
   * The UID of the Alibaba Cloud account that requested the permission.
   * 
   * @example
   * 26784260040899****
   */
  granteeId?: string;
  /**
   * @remarks
   * The name of the Alibaba Cloud account that requested the permission. The format is the same as the MaxCompute account format.
   * - Alibaba Cloud account: ALIYUN$+account name.
   * - RAM user: RAM$+account name.
   * 
   * @example
   * RAM$dataworks_3h1_1:StsRamUser(StsRamUser)
   */
  granteeName?: string;
  /**
   * @remarks
   * The principal type of the permission applicant. Currently, only the value 1 (user) is supported.
   * 
   * @example
   * 1
   */
  granteeType?: number;
  /**
   * @remarks
   * The principal subtype of the permission applicant. Valid values:
   * - 101: Production Alibaba Cloud account.
   * - 103: Personal Alibaba Cloud account.
   * - 105: Alibaba Cloud account applied on behalf of another user.
   * 
   * @example
   * 103
   */
  granteeTypeSub?: number;
  static names(): { [key: string]: string } {
    return {
      granteeId: 'GranteeId',
      granteeName: 'GranteeName',
      granteeType: 'GranteeType',
      granteeTypeSub: 'GranteeTypeSub',
    };
  }

  static types(): { [key: string]: any } {
    return {
      granteeId: 'string',
      granteeName: 'string',
      granteeType: 'number',
      granteeTypeSub: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPermissionApplyOrderDetailResponseBodyApplyOrderDetail extends $dara.Model {
  /**
   * @remarks
   * The UID of the Alibaba Cloud account that submitted the application order.
   * 
   * @example
   * 26784260040899****
   */
  applyBaseId?: string;
  /**
   * @remarks
   * The time when the application order was submitted. The value is a UNIX timestamp.
   * 
   * @example
   * 1615284086000
   */
  applyTimestamp?: number;
  /**
   * @remarks
   * The list of Alibaba Cloud accounts that approved the application order.
   */
  approveAccountList?: GetPermissionApplyOrderDetailResponseBodyApplyOrderDetailApproveAccountList[];
  /**
   * @remarks
   * The specific content of the application.
   */
  approveContent?: GetPermissionApplyOrderDetailResponseBodyApplyOrderDetailApproveContent;
  /**
   * @remarks
   * The time when the final approval was completed. The value is a UNIX timestamp.
   * 
   * @example
   * 1757496687000
   */
  finishAapprovalTimestamp?: number;
  /**
   * @remarks
   * The final approval comment.
   * 
   * @example
   * agree
   */
  finishApprovalComment?: string;
  /**
   * @remarks
   * The ID of the application order.
   * 
   * @example
   * ad8da78d-8135-455e-9486-27cf213f****
   */
  flowId?: string;
  /**
   * @remarks
   * The status of the application order. Valid values:
   * - 1: Pending approval.
   * - 2: Approved and authorization succeeded.
   * - 3: Approved but authorization failed.
   * - 4: Rejected.
   * - 5: Withdrawn.
   * 
   * @example
   * 2
   */
  flowStatus?: number;
  /**
   * @remarks
   * The account information of the permission applicant.
   */
  granteeObjectList?: GetPermissionApplyOrderDetailResponseBodyApplyOrderDetailGranteeObjectList[];
  static names(): { [key: string]: string } {
    return {
      applyBaseId: 'ApplyBaseId',
      applyTimestamp: 'ApplyTimestamp',
      approveAccountList: 'ApproveAccountList',
      approveContent: 'ApproveContent',
      finishAapprovalTimestamp: 'FinishAapprovalTimestamp',
      finishApprovalComment: 'FinishApprovalComment',
      flowId: 'FlowId',
      flowStatus: 'FlowStatus',
      granteeObjectList: 'GranteeObjectList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyBaseId: 'string',
      applyTimestamp: 'number',
      approveAccountList: { 'type': 'array', 'itemType': GetPermissionApplyOrderDetailResponseBodyApplyOrderDetailApproveAccountList },
      approveContent: GetPermissionApplyOrderDetailResponseBodyApplyOrderDetailApproveContent,
      finishAapprovalTimestamp: 'number',
      finishApprovalComment: 'string',
      flowId: 'string',
      flowStatus: 'number',
      granteeObjectList: { 'type': 'array', 'itemType': GetPermissionApplyOrderDetailResponseBodyApplyOrderDetailGranteeObjectList },
    };
  }

  validate() {
    if(Array.isArray(this.approveAccountList)) {
      $dara.Model.validateArray(this.approveAccountList);
    }
    if(this.approveContent && typeof (this.approveContent as any).validate === 'function') {
      (this.approveContent as any).validate();
    }
    if(Array.isArray(this.granteeObjectList)) {
      $dara.Model.validateArray(this.granteeObjectList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPermissionApplyOrderDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the application order.
   */
  applyOrderDetail?: GetPermissionApplyOrderDetailResponseBodyApplyOrderDetail;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0bc1ec92159376****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applyOrderDetail: 'ApplyOrderDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyOrderDetail: GetPermissionApplyOrderDetailResponseBodyApplyOrderDetail,
      requestId: 'string',
    };
  }

  validate() {
    if(this.applyOrderDetail && typeof (this.applyOrderDetail as any).validate === 'function') {
      (this.applyOrderDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

