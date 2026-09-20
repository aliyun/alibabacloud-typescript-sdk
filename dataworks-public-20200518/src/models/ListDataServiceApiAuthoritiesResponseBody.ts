// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataServiceApiAuthoritiesResponseBodyDataApiAuthorizationListAuthorizationRecords extends $dara.Model {
  /**
   * @remarks
   * The authorization time, in the yyyy-MM-dd\\"T\\"HH:mm:ssZ format (the example time zone is +0800).
   * 
   * @example
   * 2020-06-23T00:21:01+0800
   */
  createdTime?: string;
  /**
   * @remarks
   * The Alibaba Cloud ID of the API owner.
   * 
   * @example
   * 12345
   */
  creatorId?: string;
  /**
   * @remarks
   * The end time of the authorization validity period, in the yyyy-MM-dd\\"T\\"HH:mm:ssZ format (the example time zone is +0800).
   * 
   * @example
   * 2020-06-24T00:21:01+0800
   */
  endTime?: string;
  /**
   * @remarks
   * The workspace ID that has been granted the authorization.
   * 
   * @example
   * 10004
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      creatorId: 'CreatorId',
      endTime: 'EndTime',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      creatorId: 'string',
      endTime: 'string',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApiAuthoritiesResponseBodyDataApiAuthorizationList extends $dara.Model {
  /**
   * @remarks
   * The API ID.
   * 
   * @example
   * 10002
   */
  apiId?: number;
  /**
   * @remarks
   * The name of the API.
   * 
   * @example
   * MyAPIName
   */
  apiName?: string;
  /**
   * @remarks
   * The path of the API.
   * 
   * @example
   * /test/1
   */
  apiPath?: string;
  /**
   * @remarks
   * The status of the API. Valid values: 0: unpublished. 1: published.
   * 
   * @example
   * 0
   */
  apiStatus?: number;
  /**
   * @remarks
   * The list of authorization details for APIs authorized to other users.
   */
  authorizationRecords?: ListDataServiceApiAuthoritiesResponseBodyDataApiAuthorizationListAuthorizationRecords[];
  /**
   * @remarks
   * The time when the API was created, in the yyyy-MM-dd\\"T\\"HH:mm:ssZ format (the example time zone is +0800).
   * 
   * @example
   * 2020-06-23T00:21:01+0800
   */
  createdTime?: string;
  /**
   * @remarks
   * The Alibaba Cloud ID of the API owner.
   * 
   * @example
   * 12345
   */
  creatorId?: string;
  /**
   * @remarks
   * The group ID.
   * 
   * @example
   * ab123
   */
  groupId?: string;
  /**
   * @remarks
   * The time when the API was last modified, in the yyyy-MM-dd\\"T\\"HH:mm:ssZ format (the example time zone is +0800).
   * 
   * @example
   * 2020-06-23T00:21:01+0800
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 10001
   */
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      apiPath: 'ApiPath',
      apiStatus: 'ApiStatus',
      authorizationRecords: 'AuthorizationRecords',
      createdTime: 'CreatedTime',
      creatorId: 'CreatorId',
      groupId: 'GroupId',
      modifiedTime: 'ModifiedTime',
      projectId: 'ProjectId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'number',
      apiName: 'string',
      apiPath: 'string',
      apiStatus: 'number',
      authorizationRecords: { 'type': 'array', 'itemType': ListDataServiceApiAuthoritiesResponseBodyDataApiAuthorizationListAuthorizationRecords },
      createdTime: 'string',
      creatorId: 'string',
      groupId: 'string',
      modifiedTime: 'string',
      projectId: 'number',
      tenantId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.authorizationRecords)) {
      $dara.Model.validateArray(this.authorizationRecords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApiAuthoritiesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The response structure.
   */
  apiAuthorizationList?: ListDataServiceApiAuthoritiesResponseBodyDataApiAuthorizationList[];
  /**
   * @remarks
   * The page number, which is the same as the PageNumber value in the request.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apiAuthorizationList: 'ApiAuthorizationList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiAuthorizationList: { 'type': 'array', 'itemType': ListDataServiceApiAuthoritiesResponseBodyDataApiAuthorizationList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.apiAuthorizationList)) {
      $dara.Model.validateArray(this.apiAuthorizationList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApiAuthoritiesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of APIs authorized to other users.
   */
  data?: ListDataServiceApiAuthoritiesResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 0
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Normal
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID. A unique identifier for the request.
   * 
   * @example
   * 0000-ABCD-EFG****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListDataServiceApiAuthoritiesResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

