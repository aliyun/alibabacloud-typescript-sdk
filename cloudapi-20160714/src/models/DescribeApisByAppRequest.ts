// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisByAppRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the API. The name is used for fuzzy match.
   * 
   * @example
   * getPersonInfo
   */
  apiName?: string;
  /**
   * @remarks
   * The API ID.
   * 
   * @example
   * b19240592b1b4e74961fb8438ed7550c
   */
  apiUid?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 333486644
   */
  appId?: number;
  /**
   * @remarks
   * The description of the API.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The request HTTP method of the API.
   * 
   * @example
   * POST
   */
  method?: string;
  /**
   * @remarks
   * The number of the current page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
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
   * The request path of the API.
   * 
   * @example
   * /tt
   */
  path?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      apiUid: 'ApiUid',
      appId: 'AppId',
      description: 'Description',
      method: 'Method',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      path: 'Path',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      apiUid: 'string',
      appId: 'number',
      description: 'string',
      method: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      path: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

