// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchCloudGtmAddressPoolsRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - zh-CN: Chinese.
   * 
   * - en-US (default): English.
   * 
   * @example
   * en-US
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The name of the address pool. Fuzzy match is supported.
   * 
   * @example
   * AddressPool-1
   */
  addressPoolName?: string;
  /**
   * @remarks
   * The type of the address pool. Exact match is supported. Valid values:
   * 
   * - IPv4
   * 
   * - IPv6
   * 
   * - domain
   * 
   * @example
   * IPv4
   */
  addressPoolType?: string;
  /**
   * @remarks
   * The availability of the address pool. Exact match is supported. Valid values:
   * 
   * - available: The address pool is available.
   * 
   * - unavailable: The address pool is unavailable.
   * 
   * @example
   * available
   */
  availableStatus?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. Generate a unique value from your client for this parameter. The client token can contain only ASCII characters and must be a maximum of 64 characters in length.
   * 
   * @example
   * 1ae05db4-10e7-11ef-b126-00163e24****
   */
  clientToken?: string;
  /**
   * @remarks
   * The status of the address pool. Exact match is supported. Valid values:
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
   * The health status of the address pool. Exact match is supported. Valid values:
   * 
   * ok: Normal. All addresses in the address pool are available.
   * 
   * ok_alert: Warning. Some addresses in the address pool are unavailable, but the address pool is still considered normal. In the warning state, available addresses are resolved as expected, while unavailable addresses are not.
   * 
   * exceptional: Abnormal. Some or all addresses in the address pool are unavailable, and the address pool is considered abnormal.
   * 
   * @example
   * ok
   */
  healthStatus?: string;
  /**
   * @remarks
   * The page number. The value starts from 1. The default value is 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. The maximum value is 100. The default value is 20.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The remarks for the address pool. Fuzzy match is supported.
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

