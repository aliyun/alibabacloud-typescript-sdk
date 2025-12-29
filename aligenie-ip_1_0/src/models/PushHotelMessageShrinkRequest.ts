// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushHotelMessageShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * pushHotelMessageReq
   * 
   * This parameter is required.
   */
  pushHotelMessageReqShrink?: string;
  static names(): { [key: string]: string } {
    return {
      pushHotelMessageReqShrink: 'PushHotelMessageReq',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pushHotelMessageReqShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

