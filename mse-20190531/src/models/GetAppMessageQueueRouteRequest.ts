// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppMessageQueueRouteRequest extends $dara.Model {
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
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * hkhon1po62@c3df23522baa898
   */
  appId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * example-app
   */
  appName?: string;
  /**
   * @remarks
   * The name of the Microservices Engine (MSE) namespace.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The region where the instance resides. Examples:
   * 
   * *   `cn-hangzhou`: China (Hangzhou)
   * *   `cn-beijing`: China (Beijing)
   * *   `cn-shanghai`: China (Shanghai)
   * *   `cn-zhangjiakou`: China (Zhangjiakou)
   * *   `cn-shenzhen`: China (Shenzhen)
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      appId: 'AppId',
      appName: 'AppName',
      namespace: 'Namespace',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      appId: 'string',
      appName: 'string',
      namespace: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

