// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLocalityRuleRequest extends $dara.Model {
  /**
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @example
   * hgxznfcvbe@be2c0228f******
   */
  appId?: string;
  /**
   * @example
   * example-app
   */
  appName?: string;
  /**
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
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
      namespace: 'Namespace',
      region: 'Region',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      appId: 'string',
      appName: 'string',
      namespace: 'string',
      region: 'string',
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

