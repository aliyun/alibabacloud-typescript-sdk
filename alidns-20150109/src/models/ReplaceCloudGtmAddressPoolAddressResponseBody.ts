// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReplaceCloudGtmAddressPoolAddressResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the address pool. This ID uniquely identifies the address pool.
   * 
   * @example
   * pool-89618921167339**24
   */
  addressPoolId?: string;
  /**
   * @remarks
   * Unique request identification code.
   * 
   * @example
   * B57C121B-A45F-44D8-A9B2-13E5A5044195
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful:
   * - true: Successful. - false: Failed.
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

