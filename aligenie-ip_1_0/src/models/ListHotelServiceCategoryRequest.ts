// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHotelServiceCategoryRequestPayload extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HOTEL_SERVICE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelServiceCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  payload?: ListHotelServiceCategoryRequestPayload;
  static names(): { [key: string]: string } {
    return {
      payload: 'Payload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payload: ListHotelServiceCategoryRequestPayload,
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

