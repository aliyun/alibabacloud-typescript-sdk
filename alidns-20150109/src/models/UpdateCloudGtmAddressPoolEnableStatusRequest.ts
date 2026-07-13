// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCloudGtmAddressPoolEnableStatusRequest extends $dara.Model {
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
   * The unique ID of the address pool.
   * 
   * @example
   * pool-89528023225442****
   */
  addressPoolId?: string;
  /**
   * @remarks
   * A client token to ensure the idempotence of the request. Generate a unique value from your client for this parameter. The client token can contain only ASCII characters and must be no more than 64 characters in length.
   * 
   * @example
   * 1ae05db4-10e7-11ef-b126-00163e24****
   */
  clientToken?: string;
  /**
   * @remarks
   * The enabled status of the address pool:
   * 
   * - enable: Enables the address pool. If the health check is normal, the address pool is included in DNS resolution.
   * 
   * - disable: Disables the address pool. The address pool is not included in DNS resolution, regardless of its health check status.
   * 
   * @example
   * enable
   */
  enableStatus?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      addressPoolId: 'AddressPoolId',
      clientToken: 'ClientToken',
      enableStatus: 'EnableStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      addressPoolId: 'string',
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

