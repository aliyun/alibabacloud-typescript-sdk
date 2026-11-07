// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSentinelBlockFallbackDefinitionRequest extends $dara.Model {
  /**
   * @remarks
   * The language in which you want to display the results. Valid values: zh and en. zh is the default value, which indicates Chinese. en indicates English.
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The application ID, which can be omitted.
   * 
   * @example
   * abcde@12345
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
   * The behavior details.
   * 
   * @example
   * {"webFallbackMode":0,"webRespMessage":"{}","webRespStatusCode":429,"webRespContentType":0}
   */
  fallbackBehavior?: string;
  /**
   * @remarks
   * The programming language, such as Java or Go.
   * 
   * @example
   * JAVA
   */
  language?: string;
  /**
   * @remarks
   * The behavior name.
   * 
   * @example
   * MyFallback
   */
  name?: string;
  /**
   * @remarks
   * The name of the Microservices Engine (MSE) namespace.
   * 
   * @example
   * test
   */
  namespace?: string;
  /**
   * @remarks
   * The region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The target resource type.
   * 
   * @example
   * 1 Web
   * 2 Rpc
   */
  resourceClassification?: number;
  /**
   * @remarks
   * The scenario, uniformly fill in default.
   * 
   * @example
   * default
   */
  scenario?: string;
  /**
   * @remarks
   * Redundant parameter, currently ignored.
   * 
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

