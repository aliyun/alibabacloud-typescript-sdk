// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchDnsGtmInstanceStrategyModeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the GTM instance.
   * 
   * This parameter is required.
   * 
   * @example
   * instance1
   */
  instanceId?: string;
  /**
   * @remarks
   * The language of the values of specific response parameters. Default value: en. Valid values: en, zh, and ja.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The access policy type. Valid values:
   * 
   * *   GEO: geographical location-based
   * *   LATENCY: latency-based
   * 
   * This parameter is required.
   * 
   * @example
   * GEO
   */
  strategyMode?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      lang: 'Lang',
      strategyMode: 'StrategyMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      lang: 'string',
      strategyMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

