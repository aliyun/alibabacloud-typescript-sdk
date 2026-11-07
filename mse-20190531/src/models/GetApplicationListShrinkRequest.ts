// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApplicationListShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - zh: Chinese
   * 
   * - en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * hkhon1po62@c3df23522b*****
   */
  appId?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * rest-container
   */
  appName?: string;
  /**
   * @remarks
   * The programming language, such as Java or Go.
   * 
   * @example
   * Java
   */
  language?: string;
  /**
   * @remarks
   * The microservice namespace to which the application belongs.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
   * Specifies whether to enable the Sentinel component.
   * 
   * @example
   * true
   */
  sentinelEnable?: boolean;
  /**
   * @remarks
   * The source of the application. The value is fixed as edasmsc.
   * 
   * @example
   * edasmsc
   */
  source?: string;
  /**
   * @remarks
   * Specifies whether to enable the switch.
   * 
   * @example
   * true
   */
  switchEnable?: boolean;
  /**
   * @remarks
   * Alibaba Cloud tags. You can perform filtering by Alibaba Cloud tag.
   */
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      appId: 'AppId',
      appName: 'AppName',
      language: 'Language',
      namespace: 'Namespace',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
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
      appId: 'string',
      appName: 'string',
      language: 'string',
      namespace: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      region: 'string',
      sentinelEnable: 'boolean',
      source: 'string',
      switchEnable: 'boolean',
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

