// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppMessageQueueRouteRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
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
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * hkhon1po62@c3df23522baa898
   */
  appId?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * example-app
   */
  appName?: string;
  /**
   * @remarks
   * The MSE namespace name.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The region where the cluster is deployed, including but not limited to:
   * - `cn-hangzhou`: Hangzhou
   * - `cn-beijing`: Beijing
   * - `cn-shanghai`: Shanghai
   * - `cn-zhangjiakou`: Zhangjiakou
   * - `cn-shenzhen`: Shenzhen
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

