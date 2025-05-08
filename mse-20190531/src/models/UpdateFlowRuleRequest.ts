// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFlowRuleRequest extends $dara.Model {
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
   * The application ID.
   * 
   * @example
   * hkhon1po62@c3df23522******
   */
  appId?: string;
  /**
   * @remarks
   * The application name.
   * 
   * This parameter is required.
   * 
   * @example
   * spring-cloud-a
   */
  appName?: string;
  /**
   * @remarks
   * The throttling effect.
   * 
   * Valid values:
   * 
   * *   0
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     fast failure
   * 
   *     <!-- -->
   * 
   * *   2
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     in queue
   * 
   *     <!-- -->
   * 
   * @example
   * 0
   */
  controlBehavior?: number;
  /**
   * @remarks
   * Specifies whether to enable the rule.
   * 
   * Valid values:
   * 
   * *   true
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   false
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * true
   */
  enable?: boolean;
  limitApp?: string;
  /**
   * @remarks
   * The timeout period. Unit: milliseconds. This parameter is required when the value of ControlBehavior is set to 2.
   * 
   * @example
   * 500
   */
  maxQueueingTimeMs?: number;
  /**
   * @remarks
   * The namespace.
   * 
   * This parameter is required.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 13
   */
  ruleId?: number;
  /**
   * @remarks
   * The throttling threshold.
   * 
   * @example
   * 30
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      appId: 'AppId',
      appName: 'AppName',
      controlBehavior: 'ControlBehavior',
      enable: 'Enable',
      limitApp: 'LimitApp',
      maxQueueingTimeMs: 'MaxQueueingTimeMs',
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
      controlBehavior: 'number',
      enable: 'boolean',
      limitApp: 'string',
      maxQueueingTimeMs: 'number',
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

