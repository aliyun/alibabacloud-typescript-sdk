// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIsolationRuleRequest extends $dara.Model {
  /**
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @example
   * hkhon1po62@c3df23522bXXXXX
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * spring-cloud-a
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  enable?: boolean;
  limitApp?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * /a
   */
  resource?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      appId: 'AppId',
      appName: 'AppName',
      enable: 'Enable',
      limitApp: 'LimitApp',
      namespace: 'Namespace',
      regionId: 'RegionId',
      resource: 'Resource',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      appId: 'string',
      appName: 'string',
      enable: 'boolean',
      limitApp: 'string',
      namespace: 'string',
      regionId: 'string',
      resource: 'string',
      threshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

