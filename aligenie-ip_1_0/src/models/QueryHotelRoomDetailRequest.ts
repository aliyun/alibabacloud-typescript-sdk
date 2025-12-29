// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryHotelRoomDetailRequest extends $dara.Model {
  /**
   * @example
   * 520a0c0***5eb
   */
  hotelId?: string;
  /**
   * @example
   * 38:c8:**:**:f5:22
   */
  mac?: string;
  /**
   * @example
   * 1211
   */
  roomNo?: string;
  /**
   * @remarks
   * 设备sn信息
   * 注：若在mac uuid sn全都输入的情况下 按照输入正确的内容查询 若全输入都是正确的 则 按照 uuid > mac > sn 优先级查询
   * 传入mac uuid sn其中一个 则酒店id和房间号可不传
   * 
   * @example
   * 280**28
   */
  sn?: string;
  /**
   * @example
   * 588***96j5WU
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      mac: 'Mac',
      roomNo: 'RoomNo',
      sn: 'Sn',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      mac: 'string',
      roomNo: 'string',
      sn: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

