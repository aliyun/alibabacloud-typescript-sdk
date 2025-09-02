// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataServiceAuthorizedApisResponseBodyDataApiAuthorizedList extends $dara.Model {
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
   * My API Name
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
   * The status of the API. Valid values: 0 and 1. The value 0 indicates that the API is not published. The value 1 indicates that the API is published.
   * 
   * @example
   * 0
   */
  apiStatus?: number;
  /**
   * @remarks
   * The time when the API was created.
   * 
   * @example
   * 2020-06-23T00:21:01+0800
   */
  createdTime?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used by the API owner.
   * 
   * @example
   * 12345
   */
  creatorId?: string;
  /**
   * @remarks
   * The time when the access permissions on the API were granted.
   * 
   * @example
   * 2020-06-23T00:21:01+0800
   */
  grantCreatedTime?: string;
  /**
   * @remarks
   * The expiration time of the access permissions granted on the API.
   * 
   * @example
   * 2020-06-24T00:21:01+0800
   */
  grantEndTime?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used by the user who granted the access permissions on the API.
   * 
   * @example
   * 23456
   */
  grantOperatorId?: string;
  /**
   * @remarks
   * The group ID.
   * 
   * @example
   * abcde123456789
   */
  groupId?: string;
  /**
   * @remarks
   * The time when the API was last updated.
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
      createdTime: 'CreatedTime',
      creatorId: 'CreatorId',
      grantCreatedTime: 'GrantCreatedTime',
      grantEndTime: 'GrantEndTime',
      grantOperatorId: 'GrantOperatorId',
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
      createdTime: 'string',
      creatorId: 'string',
      grantCreatedTime: 'string',
      grantEndTime: 'string',
      grantOperatorId: 'string',
      groupId: 'string',
      modifiedTime: 'string',
      projectId: 'number',
      tenantId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceAuthorizedApisResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The APIs that you are authorized to access.
   */
  apiAuthorizedList?: ListDataServiceAuthorizedApisResponseBodyDataApiAuthorizedList[];
  /**
   * @remarks
   * The page number. The value of this parameter is the same as that of the PageNumber parameter in the request.
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
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apiAuthorizedList: 'ApiAuthorizedList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiAuthorizedList: { 'type': 'array', 'itemType': ListDataServiceAuthorizedApisResponseBodyDataApiAuthorizedList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.apiAuthorizedList)) {
      $dara.Model.validateArray(this.apiAuthorizedList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceAuthorizedApisResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the APIs that you are authorized to access.
   */
  data?: ListDataServiceAuthorizedApisResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 1031203110005
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The specified parameters are invalid.
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
   * The request ID.
   * 
   * @example
   * 0000-ABCD-EFG****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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
      data: ListDataServiceAuthorizedApisResponseBodyData,
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

