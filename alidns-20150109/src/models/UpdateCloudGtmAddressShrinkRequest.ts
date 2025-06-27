// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCloudGtmAddressShrinkRequest extends $dara.Model {
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
   * The IP address or domain name.
   * 
   * @example
   * 223.5.XX.XX
   */
  address?: string;
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
   * Address Attribution information.
   * 
   * @example
   * This parameter is not supported in the current version and does not need to be input.
   */
  attributeInfo?: string;
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
   * The new condition for determining the health state of the address. Valid values:
   * 
   * *   any_ok: The health check results of at least one health check template are normal.
   * *   p30_ok: The health check results of at least 30% of health check templates are normal.
   * *   p50_ok: The health check results of at least 50% of health check templates are normal.
   * *   p70_ok: The health check results of at least 70% of health check templates are normal.
   * *   all_ok: The health check results of all health check templates are normal.
   * 
   * @example
   * p50_ok
   */
  healthJudgement?: string;
  /**
   * @remarks
   * The health check tasks.
   */
  healthTasksShrink?: string;
  /**
   * @remarks
   * The name of the address.
   * 
   * @example
   * Address-1
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      address: 'Address',
      addressId: 'AddressId',
      attributeInfo: 'AttributeInfo',
      clientToken: 'ClientToken',
      healthJudgement: 'HealthJudgement',
      healthTasksShrink: 'HealthTasks',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      address: 'string',
      addressId: 'string',
      attributeInfo: 'string',
      clientToken: 'string',
      healthJudgement: 'string',
      healthTasksShrink: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

