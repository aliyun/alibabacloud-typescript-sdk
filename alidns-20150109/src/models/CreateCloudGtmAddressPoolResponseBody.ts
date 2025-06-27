// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCloudGtmAddressPoolResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the address pool. This ID uniquely identifies the address pool.
   * 
   * @example
   * pool-89528023225442**16
   */
  addressPoolId?: string;
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
   * Indicates whether the address pool creation operation was successful:
   * - true: Operation was successful
   * - false: Operation was failed
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      addressPoolId: 'AddressPoolId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressPoolId: 'string',
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

