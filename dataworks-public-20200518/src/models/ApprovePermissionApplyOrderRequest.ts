// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApprovePermissionApplyOrderRequest extends $dara.Model {
  /**
   * @remarks
   * The approval action to perform. Valid values:
   * - 1: Approve.
   * - 2: Reject.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  approveAction?: number;
  /**
   * @remarks
   * The remarks for the approval.
   * 
   * This parameter is required.
   * 
   * @example
   * agree
   */
  approveComment?: string;
  /**
   * @remarks
   * The ID of the permission request order to approve. You can call the [ListPermissionApplyOrders](https://help.aliyun.com/document_detail/211008.html) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 48f36729-05f9-4a40-9286-933fd940f30a
   */
  flowId?: string;
  static names(): { [key: string]: string } {
    return {
      approveAction: 'ApproveAction',
      approveComment: 'ApproveComment',
      flowId: 'FlowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approveAction: 'number',
      approveComment: 'string',
      flowId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

