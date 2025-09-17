// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPermissionApplyOrdersResponseBodyApplyOrdersApplyOrderApproveContentProjectMetaObjectMetaList extends $dara.Model {
  actions?: string[];
  /**
   * @remarks
   * The name of the table on which you requested permissions.
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
   * The information about the object on which you requested permissions.
   */
  objectMetaList?: ListPermissionApplyOrdersResponseBodyApplyOrdersApplyOrderApproveContentProjectMetaObjectMetaList[];
  /**
   * @remarks
   * The name of the DataWorks workspace that is associated with the MaxCompute project in which you requested permissions on a table.
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
   * The reason for your request. The administrator determines whether to approve the request based on the reason.
   * 
   * @example
   * I need to use this table
   */
  applyReason?: string;
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
   * The content of the object on which you requested permissions.
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
   * The ID of the Alibaba Cloud account that was used to submit the permission request order.
   * 
   * @example
   * 267842600408993176
   */
  applyBaseId?: string;
  /**
   * @remarks
   * The time when the permission request order was submitted. The parameter value is a UNIX timestamp.
   * 
   * @example
   * 1615284086000
   */
  applyTimestamp?: number;
  /**
   * @remarks
   * The content of the permission request order.
   */
  approveContent?: ListPermissionApplyOrdersResponseBodyApplyOrdersApplyOrderApproveContent;
  finishApprovalComment?: string;
  finishApprovalTimestamp?: number;
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
   * The list of the permission request orders.
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
   * The total number of entries returned.
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
   * The query results returned by page.
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

