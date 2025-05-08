// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLosslessRuleByAppResponseBodyData extends $dara.Model {
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
   * hkhon1po62@24810bf4364a***
   */
  appId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * spring-cloud-a
   */
  appName?: string;
  /**
   * @remarks
   * The number of instances.
   * 
   * @example
   * 1
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
   * true
   */
  lossLessDetail?: boolean;
  /**
   * @remarks
   * Indicates whether notification is enabled.
   * 
   * @example
   * false
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
   * 120
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

