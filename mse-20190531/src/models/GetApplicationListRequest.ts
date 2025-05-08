// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetApplicationListRequestTags } from "./GetApplicationListRequestTags";


export class GetApplicationListRequest extends $dara.Model {
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
   * The ID of an application.
   * 
   * @example
   * hkhon1po62@c3df23522b*****
   */
  appId?: string;
  /**
   * @remarks
   * The name of an application.
   * 
   * @example
   * rest-container
   */
  appName?: string;
  /**
   * @remarks
   * The programming language of the application, such as Java and Go.
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
   * The number of the page to return.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * Specifies whether to enable the Sentinel-compatible mode.
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
   * Specifies whether to enable switching.
   * 
   * @example
   * true
   */
  switchEnable?: boolean;
  tags?: GetApplicationListRequestTags[];
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
      tags: 'Tags',
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
      tags: { 'type': 'array', 'itemType': GetApplicationListRequestTags },
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

