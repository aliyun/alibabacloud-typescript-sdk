// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLosslessRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * Specifies whether to align the lifecycle of the application in the Kubernetes cluster with that of the microservice.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  aligned?: boolean;
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * c644n5frmc@3e75f25fd4*****
   */
  appId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * wx-work-api
   */
  appName?: string;
  /**
   * @remarks
   * The registration latency.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  delayTime?: number;
  /**
   * @remarks
   * Specifies whether to enable the alert rule. Valid values:
   * 
   * *   `true`: enables the rule.
   * *   `false`: disables the rule.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @remarks
   * The slope of the prefetching curve.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  funcType?: number;
  /**
   * @remarks
   * Specifies whether to display online and offline processing details.
   * 
   * @example
   * false
   */
  lossLessDetail?: boolean;
  /**
   * @remarks
   * The microservice namespace to which the rule applies.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * Specifies whether to enable notification.
   * 
   * @example
   * false
   */
  notice?: boolean;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to associate with service prefetching.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  related?: boolean;
  /**
   * @remarks
   * The prefetching duration.
   * 
   * This parameter is required.
   * 
   * @example
   * 60
   */
  warmupTime?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      aligned: 'Aligned',
      appId: 'AppId',
      appName: 'AppName',
      delayTime: 'DelayTime',
      enable: 'Enable',
      funcType: 'FuncType',
      lossLessDetail: 'LossLessDetail',
      namespace: 'Namespace',
      notice: 'Notice',
      regionId: 'RegionId',
      related: 'Related',
      warmupTime: 'WarmupTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      aligned: 'boolean',
      appId: 'string',
      appName: 'string',
      delayTime: 'number',
      enable: 'boolean',
      funcType: 'number',
      lossLessDetail: 'boolean',
      namespace: 'string',
      notice: 'boolean',
      regionId: 'string',
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

