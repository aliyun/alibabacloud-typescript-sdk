// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCloudGtmAddressPoolBasicConfigRequest extends $dara.Model {
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
   * The name of the address pool.
   * 
   * @example
   * app
   */
  addressPoolName?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. The client generates this token to make sure that each request is unique. The token can contain a maximum of 64 ASCII characters.
   * 
   * @example
   * 1ae05db4-10e7-11ef-b126-00163e24****
   */
  clientToken?: string;
  /**
   * @remarks
   * The condition for determining the health status of the address pool.
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

