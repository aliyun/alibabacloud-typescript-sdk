// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCloudGtmAddressPoolRequest extends $dara.Model {
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
   * Address pool name, helping users distinguish the purpose of address pools.
   * 
   * @example
   * Address pool-1
   */
  addressPoolName?: string;
  /**
   * @remarks
   * The type of the address pool. Valid values:
   * 
   * *   IPv4: IPv4 addresses are returned for Domain Name System (DNS) resolution.
   * *   IPv6: IPv6 addresses are returned for DNS resolution.
   * *   domain: Domain names are returned for DNS resolution.
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
   * *   enable: The address pool is enabled, and the addresses in the address pool are returned for DNS resolution when the health check results are normal.
   * *   disable: The address pool is disabled, and the addresses in the address pool are not returned for DNS resolution regardless of whether the health check results are normal or not.
   * 
   * @example
   * enable
   */
  enableStatus?: string;
  /**
   * @remarks
   * The condition for determining the health status of the address pool. Valid values:
   * 
   * *   any_ok: At least one address in the address pool is available.
   * *   p30_ok: At least 30% of the addresses in the address pool are available.
   * *   p50_ok: At least 50% of the addresses in the address pool are available.
   * *   p70_ok: At least 70% of the addresses in the address pool are available.
   * *   all_ok: All addresses in the address pool are available.
   * 
   * @example
   * any_ok
   */
  healthJudgement?: string;
  /**
   * @remarks
   * Remarks for the address pool, helping users distinguish the usage scenarios of different address pools.
   * 
   * @example
   * app
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      addressPoolName: 'AddressPoolName',
      addressPoolType: 'AddressPoolType',
      clientToken: 'ClientToken',
      enableStatus: 'EnableStatus',
      healthJudgement: 'HealthJudgement',
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
      healthJudgement: 'string',
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

