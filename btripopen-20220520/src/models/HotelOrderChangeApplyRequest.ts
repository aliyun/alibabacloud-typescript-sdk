// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HotelOrderChangeApplyRequestRoomInfoList } from "./HotelOrderChangeApplyRequestRoomInfoList";


export class HotelOrderChangeApplyRequest extends $dara.Model {
  /**
   * @example
   * 123122
   */
  btripUserId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3685792244476194816
   */
  disOrderId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  reason?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  roomInfoList?: HotelOrderChangeApplyRequestRoomInfoList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1402002197440511306
   */
  saleOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      btripUserId: 'btrip_user_id',
      disOrderId: 'dis_order_id',
      reason: 'reason',
      roomInfoList: 'room_info_list',
      saleOrderId: 'sale_order_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      btripUserId: 'string',
      disOrderId: 'string',
      reason: 'string',
      roomInfoList: { 'type': 'array', 'itemType': HotelOrderChangeApplyRequestRoomInfoList },
      saleOrderId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.roomInfoList)) {
      $dara.Model.validateArray(this.roomInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

