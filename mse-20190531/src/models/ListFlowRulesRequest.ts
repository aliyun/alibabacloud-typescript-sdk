// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFlowRulesRequest extends $dara.Model {
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
   * @example
   * hkhon1po62@c3df23522******
   */
  appId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * xx-demo
   */
  appName?: string;
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
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the resource.
   * 
   * @example
   * /a
   */
  resource?: string;
  /**
   * @remarks
   * The keyword that is used for the search.
   * 
   * @example
   * /a
   */
  resourceSearchKey?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      appId: 'AppId',
      appName: 'AppName',
      namespace: 'Namespace',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      resource: 'Resource',
      resourceSearchKey: 'ResourceSearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      appId: 'string',
      appName: 'string',
      namespace: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      resource: 'string',
      resourceSearchKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

