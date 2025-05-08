// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWebFlowRulesRequest extends $dara.Model {
  /**
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @example
   * b22qb1****@2f0586be4b1****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * spring-cloud-a
   */
  appName?: string;
  /**
   * @example
   * default
   */
  namespace?: string;
  /**
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * /flow
   */
  resource?: string;
  /**
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

