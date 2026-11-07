// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMseServiceApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the returned information. Valid values:
   * 
   * - zh: Chinese
   * - en: English
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
   * The version of the Microservices Engine (MSE) cluster to be activated. Valid values:
   * 
   * - mse_pro: Professional Edition.
   * - mse_dev: Developer Edition.
   * 
   * @example
   * mse_pro
   */
  mseVersion?: string;
  /**
   * @remarks
   * The region where the cluster is located, including but not limited to:
   * 
   * - cn-hangzhou: Hangzhou
   * - cn-beijing: Beijing
   * - cn-shanghai: Shanghai
   * - cn-zhangjiakou: Zhangjiakou
   * - cn-shenzhen: Shenzhen
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  region?: string;
  /**
   * @remarks
   * Specifies whether to enable Sentinel.
   * 
   * @example
   * true
   */
  sentinelEnable?: string;
  /**
   * @remarks
   * The source.
   * 
   * @example
   * edasmsc
   */
  source?: string;
  /**
   * @remarks
   * Specifies whether to enable Switch.
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

