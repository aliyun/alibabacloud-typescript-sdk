// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIsolationRuleResponseBodyData extends $dara.Model {
  /**
   * @example
   * hkhon1po62@c3df23522bXXXXX
   */
  appId?: string;
  /**
   * @example
   * spring-cloud-a
   */
  appName?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * 1
   */
  id?: number;
  limitApp?: string;
  /**
   * @example
   * default
   */
  namespace?: string;
  /**
   * @example
   * /a
   */
  resource?: string;
  /**
   * @example
   * 3
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      enable: 'Enable',
      id: 'Id',
      limitApp: 'LimitApp',
      namespace: 'Namespace',
      resource: 'Resource',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      enable: 'boolean',
      id: 'number',
      limitApp: 'string',
      namespace: 'string',
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

