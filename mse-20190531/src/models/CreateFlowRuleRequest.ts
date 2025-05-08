// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFlowRuleRequest extends $dara.Model {
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
   * ib09eblv6p@c3df23522******
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
   * *   0: fast failure
   * *   2: in queue
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
   * This parameter is required.
   * 
   * @example
   * false
   */
  enable?: boolean;
  limitApp?: string;
  /**
   * @remarks
   * The timeout period. Unit: milliseconds. This value is required if the ControlBehavior parameter is set to 2.
   * 
   * @example
   * 10
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
   * The region in which the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the API resource.
   * 
   * This parameter is required.
   * 
   * @example
   * /b
   */
  resource?: string;
  resourceType?: number;
  /**
   * @remarks
   * The throttling threshold.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
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
      regionId: 'RegionId',
      resource: 'Resource',
      resourceType: 'ResourceType',
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
      regionId: 'string',
      resource: 'string',
      resourceType: 'number',
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

