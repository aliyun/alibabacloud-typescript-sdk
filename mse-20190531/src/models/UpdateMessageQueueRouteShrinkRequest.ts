// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMessageQueueRouteShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the returned information. Valid values:
   * 
   * - zh: Chinese.
   * - en: English.
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * hkhon1po62@c3df23522baa898
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
   * Specifies whether message canary release is enabled. Valid values:
   * 
   * - `true`: Enabled.
   * - `false`: Disabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The filtering side for message canary release.
   * 
   * @example
   * Server
   */
  filterSide?: string;
  /**
   * @remarks
   * The list of baseline environment labels for MSMQ grayscale rules.
   */
  grayBaseTagsShrink?: string;
  /**
   * @remarks
   * The MSE namespace name.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The ignored tags for the untagged environments of the application.
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

