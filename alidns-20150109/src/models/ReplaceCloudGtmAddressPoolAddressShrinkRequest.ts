// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReplaceCloudGtmAddressPoolAddressShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   **zh-CN**: Chinese
   * *   **en-US (default)**: English
   * 
   * @example
   * en-US
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The ID of the address pool for which you want to replace addresses. This ID uniquely identifies the address pool.
   * 
   * @example
   * pool-89618921167339**24
   */
  addressPoolId?: string;
  /**
   * @remarks
   * The addresses.
   */
  addressesShrink?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 1ae05db4-10e7-11ef-b126-00163e24**22
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

