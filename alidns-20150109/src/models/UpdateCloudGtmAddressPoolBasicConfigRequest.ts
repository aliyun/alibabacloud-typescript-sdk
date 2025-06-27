// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCloudGtmAddressPoolBasicConfigRequest extends $dara.Model {
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
   * The ID of the address pool. This ID uniquely identifies the address pool.
   * 
   * @example
   * pool-89528023225442**16
   */
  addressPoolId?: string;
  /**
   * @remarks
   * Address pool name, helping users distinguish the purpose of address pools.
   * 
   * @example
   * app
   */
  addressPoolName?: string;
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
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      addressPoolId: 'AddressPoolId',
      addressPoolName: 'AddressPoolName',
      clientToken: 'ClientToken',
      healthJudgement: 'HealthJudgement',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      addressPoolId: 'string',
      addressPoolName: 'string',
      clientToken: 'string',
      healthJudgement: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

