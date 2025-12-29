// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotelOrderDetailRequestPayload extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20220714150702000168270112410630
   */
  orderNo?: string;
  static names(): { [key: string]: string } {
    return {
      orderNo: 'OrderNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelOrderDetailRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  payload?: GetHotelOrderDetailRequestPayload;
  static names(): { [key: string]: string } {
    return {
      payload: 'Payload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payload: GetHotelOrderDetailRequestPayload,
    };
  }

  validate() {
    if(this.payload && typeof (this.payload as any).validate === 'function') {
      (this.payload as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

