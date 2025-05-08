// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSentinelBlockFallbackDefinitionsRequest extends $dara.Model {
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
   * Behavior Classification Set.
   */
  classificationSet?: number[];
  /**
   * @remarks
   * The name of the Microservices namespace.
   * 
   * This parameter is required.
   * 
   * @example
   * default
   */
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      appName: 'AppName',
      classificationSet: 'ClassificationSet',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      appName: 'string',
      classificationSet: { 'type': 'array', 'itemType': 'number' },
      namespace: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.classificationSet)) {
      $dara.Model.validateArray(this.classificationSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

