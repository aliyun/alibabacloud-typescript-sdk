// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HotelOrderChangeDetailResponseBodyModuleRoomInfoList } from "./HotelOrderChangeDetailResponseBodyModuleRoomInfoList";


export class HotelOrderChangeDetailResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 1234
   */
  changeOrderId?: string;
  /**
   * @example
   * 0
   */
  changeType?: number;
  /**
   * @example
   * open12ih3c8jb8o47v10B4r4josN00
   */
  corpId?: string;
  /**
   * @example
   * dis1234
   */
  disOrderId?: string;
  /**
   * @example
   * 2024-07-07 13:42:49
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-07-07 13:42:49
   */
  gmtModified?: string;
  reason?: string;
  remarks?: string;
  roomInfoList?: HotelOrderChangeDetailResponseBodyModuleRoomInfoList[];
  /**
   * @example
   * 1402002197440511306
   */
  saleOrderId?: string;
  /**
   * @example
   * 0
   */
  source?: number;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 2505048378320666
   */
  workOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'change_order_id',
      changeType: 'change_type',
      corpId: 'corp_id',
      disOrderId: 'dis_order_id',
      gmtCreate: 'gmt_create',
      gmtModified: 'gmt_modified',
      reason: 'reason',
      remarks: 'remarks',
      roomInfoList: 'room_info_list',
      saleOrderId: 'sale_order_id',
      source: 'source',
      status: 'status',
      workOrderId: 'work_order_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
      changeType: 'number',
      corpId: 'string',
      disOrderId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      reason: 'string',
      remarks: 'string',
      roomInfoList: { 'type': 'array', 'itemType': HotelOrderChangeDetailResponseBodyModuleRoomInfoList },
      saleOrderId: 'string',
      source: 'number',
      status: 'number',
      workOrderId: 'string',
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

