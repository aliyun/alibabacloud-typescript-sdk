// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCloudGtmAddressRemarkRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - zh-CN: Chinese
   * 
   * - en-US (default): English
   * 
   * @example
   * en-US
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The unique ID of the address.
   * 
   * This parameter is required.
   * 
   * @example
   * addr-89518218114368****
   */
  addressId?: string;
  /**
   * @remarks
   * A client-generated token that ensures the idempotence of the request. The token must be unique across requests and can be up to 64 ASCII characters long.
   * 
   * @example
   * 1ae05db4-10e7-11ef-b126-00163e24****
   */
  clientToken?: string;
  /**
   * @remarks
   * The new remarks for the address. To delete the remarks, leave this parameter empty.
   * 
   * @example
   * test
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      addressId: 'AddressId',
      clientToken: 'ClientToken',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      addressId: 'string',
      clientToken: 'string',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

