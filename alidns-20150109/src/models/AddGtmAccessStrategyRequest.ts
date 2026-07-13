// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddGtmAccessStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The source of the DNS requests.
   * 
   * This parameter is required.
   * 
   * @example
   * ["default", "drpeng"]
   */
  accessLines?: string;
  /**
   * @remarks
   * The ID of the primary address pool collection.
   * 
   * This parameter is required.
   * 
   * @example
   * hrsix
   */
  defaultAddrPoolId?: string;
  /**
   * @remarks
   * The ID of the failover address pool collection.
   * 
   * If a failover address pool collection is not configured, set this parameter to **EMPTY**.
   * 
   * This parameter is required.
   * 
   * @example
   * hrsyw
   */
  failoverAddrPoolId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * instance1
   */
  instanceId?: string;
  /**
   * @remarks
   * The language.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * This parameter is required.
   * 
   * @example
   * 访问策略测试
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

