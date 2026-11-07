// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApplicationShrinkRequest extends $dara.Model {
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
   * spring-cloud-a
   */
  appName?: string;
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
   * The name of the MSE namespace.
   * 
   * @example
   * prod
   */
  namespace?: string;
  /**
   * @remarks
   * The region to which the application belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
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
   * The deployment method of the application. ACK indicates Container Service for Kubernetes (ACK).
   * 
   * @example
   * ACK
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
  /**
   * @remarks
   * The Alibaba Cloud tags.
   */
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      appName: 'AppName',
      language: 'Language',
      namespace: 'Namespace',
      region: 'Region',
      sentinelEnable: 'SentinelEnable',
      source: 'Source',
      switchEnable: 'SwitchEnable',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      appName: 'string',
      language: 'string',
      namespace: 'string',
      region: 'string',
      sentinelEnable: 'string',
      source: 'string',
      switchEnable: 'string',
      tagsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

