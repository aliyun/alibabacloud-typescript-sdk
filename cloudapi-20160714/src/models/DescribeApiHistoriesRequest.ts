// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiHistoriesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the API.
   * 
   * @example
   * c076144d7878437b8f82fb85890ce6a0
   */
  apiId?: string;
  /**
   * @remarks
   * The name of the API. The name is used for fuzzy match.
   * 
   * @example
   * weather
   */
  apiName?: string;
  /**
   * @remarks
   * The ID of the API group.
   * 
   * This parameter is required.
   * 
   * @example
   * 1084f9034c744137901057206b39d2b6
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
   * The number of entries to return on each page. Maximum value: 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  securityToken?: string;
  /**
   * @remarks
   * The name of the runtime environment. Valid values:
   * 
   * *   **RELEASE**
   * *   **TEST**
   * 
   * @example
   * RELEASE
   */
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
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
      apiName: 'string',
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

