// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddGtmAccessStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The line codes of access regions.
   * 
   * This parameter is required.
   * 
   * @example
   * ["default", "drpeng"]
   */
  accessLines?: string;
  /**
   * @remarks
   * The ID of the default address pool.
   * 
   * This parameter is required.
   * 
   * @example
   * hrsix
   */
  defaultAddrPoolId?: string;
  /**
   * @remarks
   * The ID of the failover address pool.
   * 
   * If the failover address pool is not set, pass the **Empty** value.
   * 
   * This parameter is required.
   * 
   * @example
   * hrsyw
   */
  failoverAddrPoolId?: string;
  /**
   * @remarks
   * The ID of the GTM instance for which you want to create an access policy.
   * 
   * This parameter is required.
   * 
   * @example
   * instance1
   */
  instanceId?: string;
  /**
   * @remarks
   * The language used by the user.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The name of the access policy.
   * 
   * This parameter is required.
   */
  strategyName?: string;
  static names(): { [key: string]: string } {
    return {
      accessLines: 'AccessLines',
      defaultAddrPoolId: 'DefaultAddrPoolId',
      failoverAddrPoolId: 'FailoverAddrPoolId',
      instanceId: 'InstanceId',
      lang: 'Lang',
      strategyName: 'StrategyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLines: 'string',
      defaultAddrPoolId: 'string',
      failoverAddrPoolId: 'string',
      instanceId: 'string',
      lang: 'string',
      strategyName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

