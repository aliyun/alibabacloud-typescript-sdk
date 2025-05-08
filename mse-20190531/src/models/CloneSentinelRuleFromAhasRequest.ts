// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloneSentinelRuleFromAhasRequest extends $dara.Model {
  /**
   * @remarks
   * The language in which you want to display the results. Valid values: zh and en. zh indicates Chinese, which is the default value. en indicates English.
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The namespace (environment) of Application High Availability Service (AHAS).
   * 
   * This parameter is required.
   * 
   * @example
   * default
   */
  ahasNamespace?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * spring-cloud-a
   */
  appName?: string;
  /**
   * @remarks
   * Specifies whether AHAS is deployed in the Internet region.
   * 
   * @example
   * false
   */
  isAHASPublicRegion?: boolean;
  /**
   * @remarks
   * The name of the MSE application after migration. If this parameter is not specified, the name of the Application High Availability Service (AHAS) application is used by default.
   * 
   * @example
   * spring-cloud-a
   */
  mseAppName?: string;
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
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      ahasNamespace: 'AhasNamespace',
      appName: 'AppName',
      isAHASPublicRegion: 'IsAHASPublicRegion',
      mseAppName: 'MseAppName',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      ahasNamespace: 'string',
      appName: 'string',
      isAHASPublicRegion: 'boolean',
      mseAppName: 'string',
      namespace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

