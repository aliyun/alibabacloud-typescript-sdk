// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePluginsByApiRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the API.
   * 
   * This parameter is required.
   * 
   * @example
   * 93f4ead4080c4b2da70b7f81f50ae459
   */
  apiId?: string;
  /**
   * @remarks
   * The ID of the group to which the API belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 3c7a38392e764718ad7673e7b7f535d4
   */
  groupId?: string;
  /**
   * @remarks
   * The number of the page to return. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  securityToken?: string;
  /**
   * @remarks
   * The environment in which the API is running. Valid values:
   * 
   * *   **RELEASE**: production
   * *   **PRE**: staging
   * *   **TEST**: test
   * 
   * This parameter is required.
   * 
   * @example
   * RELEASE
   */
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      groupId: 'GroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      groupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
      stageName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

