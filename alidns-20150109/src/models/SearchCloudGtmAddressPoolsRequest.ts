// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchCloudGtmAddressPoolsRequest extends $dara.Model {
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
   * Address pool name, supports fuzzy search for the entered address pool name.
   * 
   * @example
   * AddressPool-1
   */
  addressPoolName?: string;
  /**
   * @remarks
   * Address pool type, supports precise query for address pool types:
   * - IPv4
   * - IPv6
   * - domain
   * 
   * @example
   * IPv4
   */
  addressPoolType?: string;
  /**
   * @remarks
   * Address pool availability status, supporting precise queries for address pool availability:
   * - available: Available
   * - unavailable: Unavailable
   * 
   * @example
   * available
   */
  availableStatus?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 1ae05db4-10e7-11ef-b126-00163e24**22
   */
  clientToken?: string;
  /**
   * @remarks
   * Address pool enable status, supports precise query of address pool enable status:
   * - enable: Enabled status
   * - disable: Disabled status
   * 
   * @example
   * enable
   */
  enableStatus?: string;
  /**
   * @remarks
   * The health state of the address pool. You can enter a health state for exact search. Valid values:
   * 
   * ok: The health state of the address pool is normal and all addresses that are referenced by the address pool are available.
   * 
   * ok_alert: The health state of the address pool is warning and some of the addresses that are referenced by the address pool are unavailable. However, the address pool is deemed normal. In this case, only the available addresses are returned for Domain Name System (DNS) requests.
   * 
   * exceptional: The health state of the address pool is abnormal and some or all of the addresses that are referenced by the address pool are unavailable. In this case, the address pool is deemed abnormal.
   * 
   * @example
   * ok
   */
  healthStatus?: string;
  /**
   * @remarks
   * Current page number, starting from 1, default is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of rows per page when paginating queries, with a maximum value of 100 and a default of 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Address pool remarks, supporting fuzzy search for the input remarks.
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
      availableStatus: 'AvailableStatus',
      clientToken: 'ClientToken',
      enableStatus: 'EnableStatus',
      healthStatus: 'HealthStatus',
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
      availableStatus: 'string',
      clientToken: 'string',
      enableStatus: 'string',
      healthStatus: 'string',
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

