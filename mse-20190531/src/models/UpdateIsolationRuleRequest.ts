// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIsolationRuleRequest extends $dara.Model {
  /**
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @example
   * hkhon1po62@c3df23522******
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  ruleId?: number;
  /**
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
      ruleId: 'RuleId',
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
      ruleId: 'number',
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

