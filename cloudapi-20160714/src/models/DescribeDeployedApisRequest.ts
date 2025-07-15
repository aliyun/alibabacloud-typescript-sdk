// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeployedApisRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * appname
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * testapp
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployedApisRequest extends $dara.Model {
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
   * The HTTP method of the API request.
   * 
   * @example
   * POST
   */
  apiMethod?: string;
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
   * The request path of the API.
   * 
   * @example
   * /st4
   */
  apiPath?: string;
  /**
   * @remarks
   * Specifies whether to enable tag verification.
   * 
   * @example
   * true
   */
  enableTagAuth?: boolean;
  /**
   * @remarks
   * The ID of the API group.
   * 
   * @example
   * 63be9002440b4778a61122f14c2b2bbb
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
  /**
   * @remarks
   * The tags.
   */
  tag?: DescribeDeployedApisRequestTag[];
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiMethod: 'ApiMethod',
      apiName: 'ApiName',
      apiPath: 'ApiPath',
      enableTagAuth: 'EnableTagAuth',
      groupId: 'GroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiMethod: 'string',
      apiName: 'string',
      apiPath: 'string',
      enableTagAuth: 'boolean',
      groupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
      stageName: 'string',
      tag: { 'type': 'array', 'itemType': DescribeDeployedApisRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

