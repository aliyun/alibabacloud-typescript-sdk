// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOpenApiListRequest extends $dara.Model {
  /**
   * @remarks
   * The API name.
   * 
   * @example
   * DescribePopApiItemList
   */
  apiName?: string;
  /**
   * @remarks
   * The API version number.
   * 
   * > Call the [DescribeGroupProductions](~~DescribeGroupProductions~~) API to get this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-10-01
   */
  apiVersion?: string;
  /**
   * @remarks
   * The language type for requests and responses. The default value is **zh**. Values:
   * 
   * - **zh**: Chinese
   * 
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The POP CODE of the Alibaba Cloud product API.
   * 
   * This parameter is required.
   * 
   * @example
   * Sas
   */
  popCode?: string;
  /**
   * @remarks
   * The user ID of the member whose perspective the administrator switches to.
   * 
   * @example
   * 137602xxx8718726
   */
  roleFor?: number;
  /**
   * @remarks
   * The view type. The default is 0. Values:
   * 
   * - 0: Current Alibaba Cloud account view.
   * 
   * - 1: View of all accounts under the enterprise.
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

