// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FetchLosslessRuleListResponseBodyDataResults extends $dara.Model {
  /**
   * @remarks
   * Indicates whether service registration is complete before readiness probe.
   * 
   * @example
   * true
   */
  aligned?: boolean;
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * hkhon1po62@24810bf4364aea1
   */
  appId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * echo-demo
   */
  appName?: string;
  /**
   * @remarks
   * The number of instances.
   * 
   * @example
   * 3
   */
  count?: number;
  /**
   * @remarks
   * The registration latency. Unit: seconds.
   * 
   * @example
   * 60
   */
  delayTime?: number;
  /**
   * @remarks
   * Indicates whether graceful start is enabled. Valid values:
   * 
   * *   `true`: enabled
   * *   `false`: disabled
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The slope of the prefetching curve.
   * 
   * @example
   * 2
   */
  funcType?: number;
  /**
   * @remarks
   * Indicates whether online and offline processing details are displayed.
   * 
   * @example
   * false
   */
  lossLessDetail?: boolean;
  /**
   * @remarks
   * Indicates whether notification is enabled.
   * 
   * @example
   * true
   */
  notice?: boolean;
  /**
   * @remarks
   * Indicates whether service prefetching is complete before readiness probe.
   * 
   * @example
   * false
   */
  related?: boolean;
  /**
   * @remarks
   * The prefetching duration. Unit: seconds.
   * 
   * @example
   * 60
   */
  warmupTime?: number;
  static names(): { [key: string]: string } {
    return {
      aligned: 'Aligned',
      appId: 'AppId',
      appName: 'AppName',
      count: 'Count',
      delayTime: 'DelayTime',
      enable: 'Enable',
      funcType: 'FuncType',
      lossLessDetail: 'LossLessDetail',
      notice: 'Notice',
      related: 'Related',
      warmupTime: 'WarmupTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aligned: 'boolean',
      appId: 'string',
      appName: 'string',
      count: 'number',
      delayTime: 'number',
      enable: 'boolean',
      funcType: 'number',
      lossLessDetail: 'boolean',
      notice: 'boolean',
      related: 'boolean',
      warmupTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

