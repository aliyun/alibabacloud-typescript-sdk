// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAuthorizedApisResponseBodyAuthorizedApisAuthorizedApi extends $dara.Model {
  apiId?: string;
  apiName?: string;
  authVaildTime?: string;
  authorizationSource?: string;
  authorizedTime?: string;
  description?: string;
  groupId?: string;
  groupName?: string;
  operator?: string;
  regionId?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      authVaildTime: 'AuthVaildTime',
      authorizationSource: 'AuthorizationSource',
      authorizedTime: 'AuthorizedTime',
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
      operator: 'Operator',
      regionId: 'RegionId',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      authVaildTime: 'string',
      authorizationSource: 'string',
      authorizedTime: 'string',
      description: 'string',
      groupId: 'string',
      groupName: 'string',
      operator: 'string',
      regionId: 'string',
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

export class DescribeAuthorizedApisResponseBodyAuthorizedApis extends $dara.Model {
  authorizedApi?: DescribeAuthorizedApisResponseBodyAuthorizedApisAuthorizedApi[];
  static names(): { [key: string]: string } {
    return {
      authorizedApi: 'AuthorizedApi',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizedApi: { 'type': 'array', 'itemType': DescribeAuthorizedApisResponseBodyAuthorizedApisAuthorizedApi },
    };
  }

  validate() {
    if(Array.isArray(this.authorizedApi)) {
      $dara.Model.validateArray(this.authorizedApi);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuthorizedApisResponseBody extends $dara.Model {
  authorizedApis?: DescribeAuthorizedApisResponseBodyAuthorizedApis;
  /**
   * @remarks
   * The page number of the returned page.
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D6E46F10-F26C-4AA0-BB69-FE2743D9AE62
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      authorizedApis: 'AuthorizedApis',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizedApis: DescribeAuthorizedApisResponseBodyAuthorizedApis,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.authorizedApis && typeof (this.authorizedApis as any).validate === 'function') {
      (this.authorizedApis as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

