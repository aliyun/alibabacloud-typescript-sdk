// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApprovePermissionApplyOrderRequest extends $dara.Model {
  /**
   * @remarks
   * The action for the permission request order. Valid values:
   * 
   * *   1: approve
   * *   2: reject
   * 
   * <!---->
   * 
   * *   0
   * *   1
   * *   2\\.
   * *   3\\.
   * *   4
   * *   5
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  approveAction?: number;
  /**
   * @remarks
   * The comment on the order.
   * 
   * This parameter is required.
   * 
   * @example
   * agree
   */
  approveComment?: string;
  /**
   * @remarks
   * The ID of the permission request order. You can call the ListPermissionApplyOrders operation to obtain the order ID.
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

