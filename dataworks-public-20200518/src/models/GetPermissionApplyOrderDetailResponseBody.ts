// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPermissionApplyOrderDetailResponseBodyApplyOrderDetailApproveAccountList extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to process the permission request order.
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
   * The description of the column on which you request permissions.
   * 
   * @example
   * Field description
   */
  columnComment?: string;
  /**
   * @remarks
   * The name of the column on which you request permissions.
   * 
   * @example
   * aColumnName
   */
  columnName?: string;
  /**
   * @remarks
   * The security level of the column on which you request permissions. Valid values: 0 to 9.
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
   * The information about the column fields in the object on which you request permissions.
   */
  columnMetaList?: GetPermissionApplyOrderDetailResponseBodyApplyOrderDetailApproveContentProjectMetaObjectMetaListColumnMetaList[];
  /**
   * @remarks
   * The name of the table on which you request permissions.
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
   * The MaxCompute project to which the object on which you request permissions belongs.
   * 
   * @example
   * aMaxComputeProject
   */
  maxComputeProjectName?: string;
  /**
   * @remarks
   * The details about the object on which you request permissions.
   */
  objectMetaList?: GetPermissionApplyOrderDetailResponseBodyApplyOrderDetailApproveContentProjectMetaObjectMetaList[];
  /**
   * @remarks
   * The ID of the DataWorks workspace that is associated with the object on which you request permissions.
   * 
   * @example
   * 12345
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
   * The reason of the permission request. The administrator processes the request based on the reason.
   * 
   * @example
   * I need to use this table
   */
  applyReason?: string;
  /**
   * @remarks
   * The expiration time of the permissions that you request. The value is a UNIX timestamp. If LabelSecurity is disabled for the MaxCompute project in which you want to request permissions on the fields of a table, or the security level of the fields is 0 or is lower than or equal to the security level of the Alibaba Cloud account for which you want to request permissions, you can request only permanent permissions.
   * 
   * @example
   * 1617115071885
   */
  deadline?: number;
  /**
   * @remarks
   * The type of the permission request order. The parameter value is 1 and cannot be changed. This value indicates ACL-based authorization.
   * 
   * @example
   * 1
   */
  orderType?: number;
  /**
   * @remarks
   * The information about the project and workspace that are associated with the object on which you request permissions.
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
   * The ID of the account that is used to request permissions.
   * 
   * @example
   * 267842600408993176
   */
  granteeId?: string;
  /**
   * @remarks
   * The name of the account that is used to request permissions. The name is in the same format as that of the account used to access the MaxCompute project.
   * 
   * *   If the account is an Alibaba Cloud account, the value is in the ALIYUN$+Account name format.
   * *   If the account is a RAM user, the value is in the RAM$+Account name format.
   * 
   * @example
   * RAM$dataworks_3h1_1:StsRamUser(StsRamUser)
   */
  granteeName?: string;
  /**
   * @remarks
   * The type of the subject that requests permissions. The value is fixed as 1, which indicates users.
   * 
   * @example
   * 1
   */
  granteeType?: number;
  /**
   * @remarks
   * The subtype of the subject that requests permissions. Valid values:
   * 
   * *   101: production account
   * *   103: individual account
   * *   105: account that requests permissions for others
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
   * The ID of the Alibaba Cloud account that was used to submit the permission request order.
   * 
   * @example
   * 267842600408993176
   */
  applyBaseId?: string;
  /**
   * @remarks
   * The time when the permission request order was submitted. The value is a UNIX timestamp.
   * 
   * @example
   * 1615284086000
   */
  applyTimestamp?: number;
  /**
   * @remarks
   * The list of Alibaba Cloud accounts that are used to process the permission request order.
   */
  approveAccountList?: GetPermissionApplyOrderDetailResponseBodyApplyOrderDetailApproveAccountList[];
  /**
   * @remarks
   * The content of the permission request.
   */
  approveContent?: GetPermissionApplyOrderDetailResponseBodyApplyOrderDetailApproveContent;
  /**
   * @remarks
   * The ID of the permission request order.
   * 
   * @example
   * ad8da78d-8135-455e-9486-27cf213fc140
   */
  flowId?: string;
  /**
   * @remarks
   * The status of the permission request order. Valid values:
   * 
   * *   1: to be processed
   * *   2: approved and authorized
   * *   3: approved but authorization failed
   * *   4: rejected
   * 
   * @example
   * 2
   */
  flowStatus?: number;
  /**
   * @remarks
   * The information about the account that is used to request permissions.
   */
  granteeObjectList?: GetPermissionApplyOrderDetailResponseBodyApplyOrderDetailGranteeObjectList[];
  static names(): { [key: string]: string } {
    return {
      applyBaseId: 'ApplyBaseId',
      applyTimestamp: 'ApplyTimestamp',
      approveAccountList: 'ApproveAccountList',
      approveContent: 'ApproveContent',
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
   * The details of the permission request order.
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

