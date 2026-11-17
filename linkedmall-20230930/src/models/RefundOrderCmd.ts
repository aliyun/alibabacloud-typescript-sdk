// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LeavePictureList } from "./LeavePictureList";


export class RefundOrderCmd extends $dara.Model {
  /**
   * @remarks
   * The refund reason ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 47821
   */
  applyReasonTextId?: number;
  /**
   * @remarks
   * The refund reason text.
   * 
   * @example
   * I no longer want it
   */
  applyReasonTips?: string;
  /**
   * @remarks
   * The return quantity.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  applyRefundCount?: number;
  /**
   * @remarks
   * The requested refund amount in cents.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  applyRefundFee?: number;
  /**
   * @remarks
   * The refund type. Valid values:
   * - 1: Refund only. 
   * - 3: Return and refund.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  bizClaimType?: number;
  /**
   * @remarks
   * The goods status. Valid values:
   * - 4: Not shipped. 
   * - 1: Not received.
   * - 2: Received.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  goodsStatus?: number;
  /**
   * @remarks
   * The message.
   * 
   * @example
   * I no longer want it
   */
  leaveMessage?: string;
  /**
   * @remarks
   * The image list.
   */
  leavePictureLists?: LeavePictureList[];
  /**
   * @remarks
   * The sub-distribution order ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 6692****5458
   */
  orderLineId?: string;
  static names(): { [key: string]: string } {
    return {
      applyReasonTextId: 'applyReasonTextId',
      applyReasonTips: 'applyReasonTips',
      applyRefundCount: 'applyRefundCount',
      applyRefundFee: 'applyRefundFee',
      bizClaimType: 'bizClaimType',
      goodsStatus: 'goodsStatus',
      leaveMessage: 'leaveMessage',
      leavePictureLists: 'leavePictureLists',
      orderLineId: 'orderLineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyReasonTextId: 'number',
      applyReasonTips: 'string',
      applyRefundCount: 'number',
      applyRefundFee: 'number',
      bizClaimType: 'number',
      goodsStatus: 'number',
      leaveMessage: 'string',
      leavePictureLists: { 'type': 'array', 'itemType': LeavePictureList },
      orderLineId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.leavePictureLists)) {
      $dara.Model.validateArray(this.leavePictureLists);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

