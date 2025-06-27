// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCloudGtmAddressEnableStatusRequest extends $dara.Model {
  /**
   * @remarks
   * 返回结果显示的语言。取值：
   * 
   * - zh-CN：中文
   * 
   * - en-US：英文
   * 
   * @example
   * en-US
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The ID of the address. This ID uniquely identifies the address.
   * 
   * This parameter is required.
   * 
   * @example
   * addr-89518218114368**92
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
  /**
   * @remarks
   * The enabling state of the address. Valid values:
   * 
   * *   enable: The address is enabled and the address can be used for Domain Name System (DNS) resolution if the address passes health checks.
   * *   disable: The address is disabled and the address cannot be used for DNS resolution regardless of whether the address passes health checks or not.
   * 
   * This parameter is required.
   * 
   * @example
   * enable
   */
  enableStatus?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      addressId: 'AddressId',
      clientToken: 'ClientToken',
      enableStatus: 'EnableStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      addressId: 'string',
      clientToken: 'string',
      enableStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

