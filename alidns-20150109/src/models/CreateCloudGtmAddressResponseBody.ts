// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCloudGtmAddressResponseBody extends $dara.Model {
  /**
   * @remarks
   * The address ID. This ID uniquely identifies the address.
   * 
   * @example
   * addr-8951821811436**192
   */
  addressId?: string;
  /**
   * @remarks
   * Unique request identification code.
   * 
   * @example
   * 46973D4C-E3E4-4ABA-9190-9A9DE406C7E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the address creation operation is successful:
   * - true: Operation was successful
   * - false: Operation was failed
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      addressId: 'AddressId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressId: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

