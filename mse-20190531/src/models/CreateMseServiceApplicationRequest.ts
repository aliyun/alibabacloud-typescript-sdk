// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMseServiceApplicationRequest extends $dara.Model {
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
   * The name of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * bsd-xxyp-open-goods-server
   */
  appName?: string;
  /**
   * @remarks
   * The additional information.
   * 
   * @example
   * {}
   */
  extraInfo?: string;
  /**
   * @remarks
   * The programming language of the application.
   * 
   * @example
   * JAVA
   */
  language?: string;
  /**
   * @remarks
   * The edition of the MSE instance that you want to purchase.
   * 
   * *   mse_pro: Professional Edition.
   * *   mse_dev: Developer Edition.
   * 
   * @example
   * mse_pro
   */
  mseVersion?: string;
  /**
   * @remarks
   * The ID of the region where the instance resides. Examples:
   * 
   * *   cn-hangzhou: China (Hangzhou)
   * *   cn-beijing: China (Beijing)
   * *   cn-shanghai: China (Shanghai)
   * *   cn-zhangjiakou: China (Zhangjiakou)
   * *   cn-shenzhen: China (Shenzhen)
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  region?: string;
  /**
   * @remarks
   * Specifies whether to enable the Sentinel-compatible mode.
   * 
   * @example
   * true
   */
  sentinelEnable?: string;
  /**
   * @remarks
   * The service source.
   * 
   * @example
   * edasmsc
   */
  source?: string;
  /**
   * @remarks
   * Specifies whether to enable switching.
   * 
   * @example
   * true
   */
  switchEnable?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      appName: 'AppName',
      extraInfo: 'ExtraInfo',
      language: 'Language',
      mseVersion: 'MseVersion',
      region: 'Region',
      sentinelEnable: 'SentinelEnable',
      source: 'Source',
      switchEnable: 'SwitchEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      appName: 'string',
      extraInfo: 'string',
      language: 'string',
      mseVersion: 'string',
      region: 'string',
      sentinelEnable: 'string',
      source: 'string',
      switchEnable: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

