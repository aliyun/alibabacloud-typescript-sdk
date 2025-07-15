// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value
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

export class DescribeApisRequest extends $dara.Model {
  /**
   * @remarks
   * The API ID.
   * 
   * @example
   * f68c19ee3bd1478fb58aa05ce8ae9b5a
   */
  apiId?: string;
  /**
   * @remarks
   * The HTTP method of the API request.
   * 
   * @example
   * GET
   */
  apiMethod?: string;
  /**
   * @remarks
   * The API name. The name is used for fuzzy match.
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
   * /illegal/query
   */
  apiPath?: string;
  /**
   * @remarks
   * The category ID.
   * 
   * @example
   * 1553414085247362
   */
  catalogId?: string;
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
   * The API group ID.
   * 
   * @example
   * c4a4d2de657548a2bd485d5d4df42b4a
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
   * The number of entries to return on each page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  securityToken?: string;
  /**
   * @remarks
   * The environment in which you want to perform this operation. Valid values:
   * 
   * *   **RELEASE**: the production environment
   * *   **PRE**: the staging environment
   * *   **TEST**: the test environment
   * 
   * @example
   * RELEASE
   */
  stageName?: string;
  /**
   * @remarks
   * The tags of objects that match the rule.
   * 
   * @example
   * Key， Value
   */
  tag?: DescribeApisRequestTag[];
  /**
   * @remarks
   * Specifies whether to filter unpublished APIs.
   * 
   * @example
   * true
   */
  unDeployed?: boolean;
  /**
   * @remarks
   * Specifies whether the API is public. Valid values:
   * 
   * *   **PUBLIC**: The API is public. If you publish the definition of a public API to the production environment, the definition is displayed on the APIs page for all users.
   * *   **PRIVATE**: The API is private. If you publish an API group that contains a private API in Alibaba Cloud Marketplace, the API is not displayed in Alibaba Cloud Marketplace.
   * 
   * @example
   * PUBLIC
   */
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiMethod: 'ApiMethod',
      apiName: 'ApiName',
      apiPath: 'ApiPath',
      catalogId: 'CatalogId',
      enableTagAuth: 'EnableTagAuth',
      groupId: 'GroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
      tag: 'Tag',
      unDeployed: 'UnDeployed',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiMethod: 'string',
      apiName: 'string',
      apiPath: 'string',
      catalogId: 'string',
      enableTagAuth: 'boolean',
      groupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
      stageName: 'string',
      tag: { 'type': 'array', 'itemType': DescribeApisRequestTag },
      unDeployed: 'boolean',
      visibility: 'string',
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

