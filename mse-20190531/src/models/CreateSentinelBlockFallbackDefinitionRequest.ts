// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSentinelBlockFallbackDefinitionRequest extends $dara.Model {
  /**
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @example
   * abcde@12345
   */
  appId?: string;
  /**
   * @example
   * example-app
   */
  appName?: string;
  /**
   * @example
   * {"webFallbackMode":0,"webRespMessage":"{}","webRespStatusCode":429,"webRespContentType":0}
   */
  fallbackBehavior?: string;
  /**
   * @example
   * JAVA
   */
  language?: string;
  /**
   * @example
   * MyFallback
   */
  name?: string;
  /**
   * @example
   * test
   */
  namespace?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 1 Web
   * 2 Rpc
   */
  resourceClassification?: number;
  /**
   * @example
   * default
   */
  scenario?: string;
  /**
   * @example
   * edasmsc
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      appId: 'AppId',
      appName: 'AppName',
      fallbackBehavior: 'FallbackBehavior',
      language: 'Language',
      name: 'Name',
      namespace: 'Namespace',
      regionId: 'RegionId',
      resourceClassification: 'ResourceClassification',
      scenario: 'Scenario',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      appId: 'string',
      appName: 'string',
      fallbackBehavior: 'string',
      language: 'string',
      name: 'string',
      namespace: 'string',
      regionId: 'string',
      resourceClassification: 'number',
      scenario: 'string',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

