// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LeavePictureList } from "./LeavePictureList";


export class RefundOrderCmd extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 47821
   */
  applyReasonTextId?: number;
  applyReasonTips?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  applyRefundCount?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100
   */
  applyRefundFee?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  bizClaimType?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  goodsStatus?: number;
  leaveMessage?: string;
  leavePictureLists?: LeavePictureList[];
  /**
   * @remarks
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

