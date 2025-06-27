// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudGtmAddressPoolsRequest extends $dara.Model {
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
   * Address pool name.
   * 
   * @example
   * AddressPool-1
   */
  addressPoolName?: string;
  /**
   * @remarks
   * The type of the address pool. Valid values:
   * 
   * *   IPv4: indicates that the service address to be resolved is an IPv4 address.
   * *   IPv6: indicates that the service address to be resolved is an IPv6 address.
   * *   domain: indicates that the service address to be resolved is a domain name.
   * 
   * @example
   * IPv4
   */
  addressPoolType?: string;
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
   * The enabling state of the address pool. Valid values:
   * 
   * *   enable: The address pool is enabled.
   * *   disable: The address pool is disabled.
   * 
   * @example
   * enable
   */
  enableStatus?: string;
  /**
   * @remarks
   * Current page number, starting at **1**, default is **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of rows per page when paginating queries, with a maximum value of **100**, and a default of **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The additional description of the address pool.
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

