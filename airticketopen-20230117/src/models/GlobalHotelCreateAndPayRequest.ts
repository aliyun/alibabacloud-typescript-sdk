// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GlobalHotelCreateAndPayRequestContact extends $dara.Model {
  /**
   * @remarks
   * The email address of the contact.
   * 
   * This parameter is required.
   * 
   * @example
   * john@example.com
   */
  email?: string;
  /**
   * @remarks
   * The first name of the contact.
   * 
   * This parameter is required.
   * 
   * @example
   * John
   */
  firstName?: string;
  /**
   * @remarks
   * The last name of the contact.
   * 
   * This parameter is required.
   * 
   * @example
   * Doe
   */
  lastName?: string;
  /**
   * @remarks
   * The phone number of the contact.
   * 
   * @example
   * +86-13800138000
   */
  phone?: string;
  /**
   * @remarks
   * TraceId
   * 
   * @example
   * TraceId
   */
  tracerId?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      firstName: 'FirstName',
      lastName: 'LastName',
      phone: 'Phone',
      tracerId: 'TracerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      firstName: 'string',
      lastName: 'string',
      phone: 'string',
      tracerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GlobalHotelCreateAndPayRequestGuests extends $dara.Model {
  /**
   * @remarks
   * The first name.
   * 
   * This parameter is required.
   * 
   * @example
   * John
   */
  firstName?: string;
  /**
   * @remarks
   * The last name.
   * 
   * This parameter is required.
   * 
   * @example
   * Doe
   */
  lastName?: string;
  /**
   * @remarks
   * TraceId
   * 
   * @example
   * TraceId
   */
  tracerId?: string;
  static names(): { [key: string]: string } {
    return {
      firstName: 'FirstName',
      lastName: 'LastName',
      tracerId: 'TracerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firstName: 'string',
      lastName: 'string',
      tracerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GlobalHotelCreateAndPayRequest extends $dara.Model {
  /**
   * @remarks
   * The distributor account ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  accountNo?: number;
  /**
   * @remarks
   * The contact information.
   * 
   * This parameter is required.
   */
  contact?: GlobalHotelCreateAndPayRequestContact;
  /**
   * @remarks
   * The external order number.
   * 
   * This parameter is required.
   * 
   * @example
   * EXT_ORDER_001
   */
  externalOrderNo?: string;
  /**
   * @remarks
   * The guests grouped by room.
   * 
   * This parameter is required.
   */
  guests?: GlobalHotelCreateAndPayRequestGuests[][];
  /**
   * @remarks
   * The offer ID.
   * 
   * This parameter is required.
   * 
   * @example
   * itemOffer_123
   */
  itemOfferId?: string;
  /**
   * @remarks
   * The number of rooms.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  roomCount?: number;
  /**
   * @remarks
   * TraceId
   * 
   * @example
   * TraceId
   */
  tracerId?: string;
  static names(): { [key: string]: string } {
    return {
      accountNo: 'AccountNo',
      contact: 'Contact',
      externalOrderNo: 'ExternalOrderNo',
      guests: 'Guests',
      itemOfferId: 'ItemOfferId',
      roomCount: 'RoomCount',
      tracerId: 'TracerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNo: 'number',
      contact: GlobalHotelCreateAndPayRequestContact,
      externalOrderNo: 'string',
      guests: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': GlobalHotelCreateAndPayRequestGuests } },
      itemOfferId: 'string',
      roomCount: 'number',
      tracerId: 'string',
    };
  }

  validate() {
    if(this.contact && typeof (this.contact as any).validate === 'function') {
      (this.contact as any).validate();
    }
    if(Array.isArray(this.guests)) {
      $dara.Model.validateArray(this.guests);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

