// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOpenApiListRequest extends $dara.Model {
  /**
   * @remarks
   * The operation that you want to perform.
   * 
   * @example
   * DescribePopApiItemList
   */
  apiName?: string;
  /**
   * @remarks
   * The version number of the API.
   * 
   * >  You can call the [DescribeGroupProductions](~~DescribeGroupProductions~~) operation to query the version number.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-10-01
   */
  apiVersion?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese.
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
   * 137602xxx8718726
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Default value: 0. Valid values:
   * 
   * *   0: the view of the current Alibaba Cloud account.
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

