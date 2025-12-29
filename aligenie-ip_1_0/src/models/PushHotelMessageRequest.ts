// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushHotelMessageRequestPushHotelMessageReq extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e6dd44fd16084db8a60d69fd625d9f0f
   */
  hotelId?: string;
  paramMap?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 102
   */
  roomNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      paramMap: 'ParamMap',
      roomNo: 'RoomNo',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      paramMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      roomNo: 'string',
      templateId: 'number',
    };
  }

  validate() {
    if(this.paramMap) {
      $dara.Model.validateMap(this.paramMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushHotelMessageRequest extends $dara.Model {
  /**
   * @remarks
   * pushHotelMessageReq
   * 
   * This parameter is required.
   */
  pushHotelMessageReq?: PushHotelMessageRequestPushHotelMessageReq;
  static names(): { [key: string]: string } {
    return {
      pushHotelMessageReq: 'PushHotelMessageReq',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pushHotelMessageReq: PushHotelMessageRequestPushHotelMessageReq,
    };
  }

  validate() {
    if(this.pushHotelMessageReq && typeof (this.pushHotelMessageReq as any).validate === 'function') {
      (this.pushHotelMessageReq as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

