// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindSentinelBlockFallbackDefinitionRequest extends $dara.Model {
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
   * spring-cloud-a
   */
  appName?: string;
  /**
   * @remarks
   * Behavior ID. 0:the default behavior.
   * 
   * This parameter is required.
   * 
   * @example
   * 21
   */
  fallbackId?: number;
  /**
   * @remarks
   * The microservice namespace.
   * 
   * This parameter is required.
   * 
   * @example
   * prod
   */
  namespace?: string;
  /**
   * @remarks
   * Interface Name: The resource to which the rule applies. It must match the interface name in the console\\"s interface details.
   * 
   * This parameter is required.
   * 
   * @example
   * /a
   */
  resource?: string;
  /**
   * @remarks
   * Target rule type.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      appName: 'AppName',
      fallbackId: 'FallbackId',
      namespace: 'Namespace',
      resource: 'Resource',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      appName: 'string',
      fallbackId: 'number',
      namespace: 'string',
      resource: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

