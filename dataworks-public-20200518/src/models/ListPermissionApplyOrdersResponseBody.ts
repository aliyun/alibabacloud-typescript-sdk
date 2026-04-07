// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPermissionApplyOrdersResponseBodyApplyOrdersApplyOrderApproveContentProjectMetaObjectMetaList extends $dara.Model {
  /**
   * @remarks
   * The operation type.
   */
  actions?: string[];
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
      objectName: 'ObjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
      objectName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPermissionApplyOrdersResponseBodyApplyOrdersApplyOrderApproveContentProjectMeta extends $dara.Model {
  /**
   * @remarks
   * The information about the requested object.
   */
  objectMetaList?: ListPermissionApplyOrdersResponseBodyApplyOrdersApplyOrderApproveContentProjectMetaObjectMetaList[];
  /**
   * @remarks
   * The name of the DataWorks workspace that contains the MaxCompute project for which permissions are requested.
   * 
   * @example
   * aWorkspaceName
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      objectMetaList: 'ObjectMetaList',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectMetaList: { 'type': 'array', 'itemType': ListPermissionApplyOrdersResponseBodyApplyOrdersApplyOrderApproveContentProjectMetaObjectMetaList },
      workspaceName: 'string',
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

export class ListPermissionApplyOrdersResponseBodyApplyOrdersApplyOrderApproveContent extends $dara.Model {
  /**
   * @remarks
   * The reason for the permission request, which is used by administrators for evaluation and approval.
   * 
   * @example
   * I need to use this table
   */
  applyReason?: string;
  /**
   * @remarks
   * The type of permission request. Only the value 1 is supported, which indicates an ACL permission request for objects.
   * 
   * @example
   * 1
   */
  orderType?: number;
  /**
   * @remarks
   * The content of the requested object.
   */
  projectMeta?: ListPermissionApplyOrdersResponseBodyApplyOrdersApplyOrderApproveContentProjectMeta;
  static names(): { [key: string]: string } {
    return {
      applyReason: 'ApplyReason',
      orderType: 'OrderType',
      projectMeta: 'ProjectMeta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyReason: 'string',
      orderType: 'number',
      projectMeta: ListPermissionApplyOrdersResponseBodyApplyOrdersApplyOrderApproveContentProjectMeta,
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

export class ListPermissionApplyOrdersResponseBodyApplyOrdersApplyOrder extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the user who submitted the permission request.
   * 
   * @example
   * 267842600408993176
   */
  applyBaseId?: string;
  /**
   * @remarks
   * The time when the permission request was submitted, in Unix timestamp format.
   * 
   * @example
   * 1615284086000
   */
  applyTimestamp?: number;
  /**
   * @remarks
   * The content of the permission request.
   */
  approveContent?: ListPermissionApplyOrdersResponseBodyApplyOrdersApplyOrderApproveContent;
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
   * The final approval timestamp. Displayed as a Unix timestamp.
   * 
   * @example
   * 1757496687000
   */
  finishApprovalTimestamp?: number;
  /**
   * @remarks
   * The permission request ID.
   * 
   * @example
   * ad8da78d-8135-455e-9486-27cf213fc140
   */
  flowId?: string;
  /**
   * @remarks
   * The status of the permission request. Valid values:
   * 
   * *   1: Pending approval
   * *   2: Approved and authorization succeeded
   * *   3: Approved but authorization failed
   * *   4: Rejected
   * 
   * @example
   * 2
   */
  flowStatus?: number;
  static names(): { [key: string]: string } {
    return {
      applyBaseId: 'ApplyBaseId',
      applyTimestamp: 'ApplyTimestamp',
      approveContent: 'ApproveContent',
      finishApprovalComment: 'FinishApprovalComment',
      finishApprovalTimestamp: 'FinishApprovalTimestamp',
      flowId: 'FlowId',
      flowStatus: 'FlowStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyBaseId: 'string',
      applyTimestamp: 'number',
      approveContent: ListPermissionApplyOrdersResponseBodyApplyOrdersApplyOrderApproveContent,
      finishApprovalComment: 'string',
      finishApprovalTimestamp: 'number',
      flowId: 'string',
      flowStatus: 'number',
    };
  }

  validate() {
    if(this.approveContent && typeof (this.approveContent as any).validate === 'function') {
      (this.approveContent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPermissionApplyOrdersResponseBodyApplyOrders extends $dara.Model {
  /**
   * @remarks
   * The list of permission requests.
   */
  applyOrder?: ListPermissionApplyOrdersResponseBodyApplyOrdersApplyOrder[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of permission requests returned.
   * 
   * @example
   * 150
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      applyOrder: 'ApplyOrder',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyOrder: { 'type': 'array', 'itemType': ListPermissionApplyOrdersResponseBodyApplyOrdersApplyOrder },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.applyOrder)) {
      $dara.Model.validateArray(this.applyOrder);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPermissionApplyOrdersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The paginated query results of permission requests.
   */
  applyOrders?: ListPermissionApplyOrdersResponseBodyApplyOrders;
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
      applyOrders: 'ApplyOrders',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyOrders: ListPermissionApplyOrdersResponseBodyApplyOrders,
      requestId: 'string',
    };
  }

  validate() {
    if(this.applyOrders && typeof (this.applyOrders as any).validate === 'function') {
      (this.applyOrders as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

