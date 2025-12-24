// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOpenApiInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The operation that you want to perform.
   * 
   * This parameter is required.
   * 
   * @example
   * DescribePopApiItemList
   */
  apiName?: string;
  /**
   * @remarks
   * The version number of the API.
   * 
   * >  You can call the [DescribeGroupProductions](~~DescribeGroupProductions~~) operation to query version numbers.
   * 
   * This parameter is required.
   * 
   * @example
   * 2018-12-03
   */
  apiVersion?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh** (default): Chinese.
   * *   **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The POP code of the Alibaba Cloud service.
   * 
   * This parameter is required.
   * 
   * @example
   * Sas
   */
  popCode?: string;
  /**
   * @remarks
   * The ID of the user who switches from the current view to the destination view by using the management account.
   * 
   * @example
   * 1592757xxx002956
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * 
   * *   0 (default): the view of the current Alibaba Cloud account.
   * *   1: the view of all accounts for the enterprise.
   * 
   * @example
   * 0
   */
  roleType?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      apiVersion: 'ApiVersion',
      lang: 'Lang',
      popCode: 'PopCode',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      apiVersion: 'string',
      lang: 'string',
      popCode: 'string',
      roleFor: 'number',
      roleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

