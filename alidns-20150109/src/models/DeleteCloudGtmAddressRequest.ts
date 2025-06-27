// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCloudGtmAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh-CN: Chinese
   * *   en-US (default): English
   * 
   * @example
   * en-US
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The address ID. This ID uniquely identifies the address.
   * 
   * This parameter is required.
   * 
   * @example
   * addr-895182181143688192
   */
  addressId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can specify a custom value for this parameter, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 1ae05db4-10e7-11ef-b126-00163e24**22
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      addressId: 'AddressId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      addressId: 'string',
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

