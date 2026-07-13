// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudGtmAddressPoolsRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - zh-CN: Chinese.
   * 
   * - en-US: English. This is the default value.
   * 
   * @example
   * en-US
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The name of the address pool.
   * 
   * @example
   * AddressPool-1
   */
  addressPoolName?: string;
  /**
   * @remarks
   * The type of the address pool. Valid values:
   * 
   * - IPv4: The address pool contains IPv4 addresses.
   * 
   * - IPv6: The address pool contains IPv6 addresses.
   * 
   * - domain: The address pool contains domain names.
   * 
   * @example
   * IPv4
   */
  addressPoolType?: string;
  /**
   * @remarks
   * A client-generated token that is used to ensure the idempotence of the request. Make sure that the token is unique among different requests. The token can contain a maximum of 64 ASCII characters.
   * 
   * @example
   * 1ae05db4-10e7-11ef-b126-00163e24****
   */
  clientToken?: string;
  /**
   * @remarks
   * The status of the address pool. Valid values:
   * 
   * - enable: The address pool is enabled.
   * 
   * - disable: The address pool is disabled.
   * 
   * @example
   * enable
   */
  enableStatus?: string;
  /**
   * @remarks
   * The page number. The value starts from **1**. The default value is **1**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. The maximum value is **100**. The default value is **20**.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The remarks for the address pool.
   * 
   * @example
   * test
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      addressPoolName: 'AddressPoolName',
      addressPoolType: 'AddressPoolType',
      clientToken: 'ClientToken',
      enableStatus: 'EnableStatus',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      addressPoolName: 'string',
      addressPoolType: 'string',
      clientToken: 'string',
      enableStatus: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

