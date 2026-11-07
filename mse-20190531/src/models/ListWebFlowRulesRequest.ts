// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWebFlowRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The language in which the returned results are displayed. Valid values: zh (default): Chinese. en: English.
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
   * b22qb1****@2f0586be4b1****
   */
  appId?: string;
  /**
   * @remarks
   * The application name.
   * 
   * This parameter is required.
   * 
   * @example
   * spring-cloud-a
   */
  appName?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The first page to export. Default value: 1.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The interface to which the protection rule applies. This parameter is mutually exclusive with the ResourceSearchKey parameter.
   * 
   * @example
   * /flow
   */
  resource?: string;
  /**
   * @remarks
   * The interface keyword that you can search from protection rules. This parameter is mutually exclusive with the Resource parameter.
   * 
   * @example
   * flow
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

