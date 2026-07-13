// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCloudGtmAddressPoolRequest extends $dara.Model {
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
   * The name of the address pool. The name helps you identify the purpose of the address pool.
   * 
   * @example
   * Address pool-1
   */
  addressPoolName?: string;
  /**
   * @remarks
   * The type of the address pool. Valid values:
   * 
   * - IPv4: The endpoint is an IPv4 address.
   * 
   * - IPv6: The endpoint is an IPv6 address.
   * 
   * - domain: The endpoint is a domain name.
   * 
   * @example
   * IPv4
   */
  addressPoolType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. Generate a unique token for each request. The token can be up to 64 ASCII characters in length.
   * 
   * @example
   * 1ae05db4-10e7-11ef-b126-00163e24****
   */
  clientToken?: string;
  /**
   * @remarks
   * The status of the address pool. Valid values:
   * 
   * - enable: The address pool is enabled and can be used for DNS resolution if it passes health checks.
   * 
   * - disable: The address pool is disabled and cannot be used for DNS resolution, regardless of its health check status.
   * 
   * @example
   * enable
   */
  enableStatus?: string;
  /**
   * @remarks
   * The health status condition of the address pool. Valid values:
   * 
   * - any_ok: At least one address in the address pool is active.
   * 
   * - p30_ok: At least 30% of the addresses in the address pool are active.
   * 
   * - p50_ok: At least 50% of the addresses in the address pool are active.
   * 
   * - p70_ok: At least 70% of the addresses in the address pool are active.
   * 
   * - all_ok: All addresses in the address pool are active.
   * 
   * @example
   * any_ok
   */
  healthJudgement?: string;
  /**
   * @remarks
   * Remarks about the address pool. The remarks help you identify the scenario in which the address pool is used.
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

