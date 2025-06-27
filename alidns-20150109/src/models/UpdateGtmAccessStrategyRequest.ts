// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGtmAccessStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The line codes of access regions.
   * 
   * @example
   * ["default", "mobile"]
   */
  accessLines?: string;
  /**
   * @remarks
   * The ID of the default address pool.
   * 
   * @example
   * hrsix
   */
  defaultAddrPoolId?: string;
  /**
   * @remarks
   * The ID of the failover address pool.
   * 
   * @example
   * hrsyw
   */
  failoverAddrPoolId?: string;
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
   * The ID of the access policy that you want to query for the GTM instance.
   * 
   * This parameter is required.
   * 
   * @example
   * hrmxc
   */
  strategyId?: string;
  /**
   * @remarks
   * The name of the access policy.
   */
  strategyName?: string;
  static names(): { [key: string]: string } {
    return {
      accessLines: 'AccessLines',
      defaultAddrPoolId: 'DefaultAddrPoolId',
      failoverAddrPoolId: 'FailoverAddrPoolId',
      lang: 'Lang',
      strategyId: 'StrategyId',
      strategyName: 'StrategyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLines: 'string',
      defaultAddrPoolId: 'string',
      failoverAddrPoolId: 'string',
      lang: 'string',
      strategyId: 'string',
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

