// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMessageQueueRouteShrinkRequest extends $dara.Model {
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
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * hkhon1po62@c3df23522baa898
   */
  appId?: string;
  /**
   * @example
   * example-app
   */
  appName?: string;
  /**
   * @remarks
   * Specifies whether the canary release for messaging feature is enabled for the application. Valid values:
   * 
   * *   `true`: enabled
   * *   `false`: disabled
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The side for message filtering when the canary release for messaging feature is enabled.
   * 
   * @example
   * Server
   */
  filterSide?: string;
  grayBaseTagsShrink?: string;
  /**
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The tag that is negligible for the untagged environment of the application.
   */
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      appId: 'AppId',
      appName: 'AppName',
      enable: 'Enable',
      filterSide: 'FilterSide',
      grayBaseTagsShrink: 'GrayBaseTags',
      namespace: 'Namespace',
      region: 'Region',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      appId: 'string',
      appName: 'string',
      enable: 'boolean',
      filterSide: 'string',
      grayBaseTagsShrink: 'string',
      namespace: 'string',
      region: 'string',
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

