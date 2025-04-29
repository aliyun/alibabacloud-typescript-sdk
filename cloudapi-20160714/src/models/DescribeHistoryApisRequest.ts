// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryApisRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the API.
   * 
   * @example
   * a12068f555964ca8a0c9c33288f1e5a7
   */
  apiId?: string;
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
   * The ID of the API group.
   * 
   * This parameter is required.
   * 
   * @example
   * 0ccb66aadb5345b78a40f57d192d8aa4
   */
  groupId?: string;
  /**
   * @remarks
   * The page number of the current page.
   * 
   * @example
   * 2
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
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
      pageNumber: 'string',
      pageSize: 'string',
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

