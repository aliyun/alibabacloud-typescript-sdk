// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApplicationRequestTags extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationRequest extends $dara.Model {
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
   * The programming language of the application.
   * 
   * @example
   * JAVA
   */
  language?: string;
  /**
   * @remarks
   * MSE命名空间名字。
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
   * Specifies whether to start the switch.
   * 
   * @example
   * true
   */
  sentinelEnable?: string;
  /**
   * @remarks
   * The service where the application is deployed. A value of ACK indicates Container Service for Kubernetes.
   * 
   * @example
   * ACK
   */
  source?: string;
  /**
   * @remarks
   * The name of the Microservices Engine (MSE) namespace.
   * 
   * @example
   * true
   */
  switchEnable?: string;
  tags?: CreateApplicationRequestTags[];
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
      tags: 'Tags',
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
      tags: { 'type': 'array', 'itemType': CreateApplicationRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

