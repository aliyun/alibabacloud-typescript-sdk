// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReplaceCloudGtmAddressPoolAddressShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The response language. Valid values:
   * 
   * - **zh-CN**: Chinese
   * 
   * - **en-US** (Default): English
   * 
   * @example
   * en-US
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The unique ID of the address pool to update.
   * 
   * @example
   * pool-89618921167339****
   */
  addressPoolId?: string;
  /**
   * @remarks
   * The list of addresses.
   */
  addressesShrink?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. Ensure the client token is unique for each request. The token can contain a maximum of 64 ASCII characters.
   * 
   * @example
   * 1ae05db4-10e7-11ef-b126-00163e24****
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      addressPoolId: 'AddressPoolId',
      addressesShrink: 'Addresses',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      addressPoolId: 'string',
      addressesShrink: 'string',
      clientToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

