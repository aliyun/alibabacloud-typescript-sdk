// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCloudGtmAddressPoolEnableStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the address pool.
   * 
   * @example
   * pool-89528023225442****
   */
  addressPoolId?: string;
  /**
   * @remarks
   * The unique request ID.
   * 
   * @example
   * 89184F33-48A1-4401-9C0F-40E45DB091AB
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful:
   * 
   * - true: The operation was successful.
   * 
   * - false: The operation failed.
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

