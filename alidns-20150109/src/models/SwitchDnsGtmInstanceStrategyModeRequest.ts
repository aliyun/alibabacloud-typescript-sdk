// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchDnsGtmInstanceStrategyModeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance. To obtain the ID, call [DescribeDnsGtmInstances](https://www.alibabacloud.com/help/en/dns/api-alidns-2015-01-09-describednsgtminstances?spm=a2c63.p38356.help-menu-search-29697.d_0).
   * 
   * This parameter is required.
   * 
   * @example
   * gtm-cn-cs02xyk4a**
   */
  instanceId?: string;
  /**
   * @remarks
   * The language of some returned parameters. Default value: en. Valid values: en, zh, and ja.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The access strategy mode. Valid values:
   * 
   * - GEO: Geolocation-based
   * 
   * - LATENCY: Latency-based
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

