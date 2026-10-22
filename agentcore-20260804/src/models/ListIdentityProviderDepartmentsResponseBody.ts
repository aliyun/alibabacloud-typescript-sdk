// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIdentityProviderDepartmentsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * Indicates whether child departments exist. A value of true indicates that child departments exist and an expansion entry can be displayed. A value of false indicates a leaf node. If this field is not returned, the status is unknown. To query the details of child departments, use the ID of the current node.
   * 
   * @example
   * true
   */
  hasChildren?: boolean;
  /**
   * @remarks
   * The unique identifier of the department returned by the identity provider. When querying the child departments of this node, use this value as parentDepartmentId.
   * 
   * @example
   * 10001
   */
  id?: string;
  /**
   * @remarks
   * The number of members in the department returned by the identity provider. This value is not returned when unknown. Do not treat a missing value as 0.
   * 
   * @example
   * 12
   */
  memberCount?: number;
  /**
   * @remarks
   * The name of the department returned by the identity provider.
   * 
   * @example
   * R&D Department
   */
  name?: string;
  /**
   * @remarks
   * The ID of the parent department to which this department belongs. This value describes the parent-child relationship and is not used to expand the current node.
   * 
   * @example
   * 1
   */
  parentId?: string;
  static names(): { [key: string]: string } {
    return {
      hasChildren: 'hasChildren',
      id: 'id',
      memberCount: 'memberCount',
      name: 'name',
      parentId: 'parentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasChildren: 'boolean',
      id: 'string',
      memberCount: 'number',
      name: 'string',
      parentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIdentityProviderDepartmentsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code of the API request. A value of SUCCESS indicates that the request is successful, but does not indicate that the asynchronous synchronization task is completed.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code of the API request. This code does not indicate the execution result of an asynchronous task.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The direct child departments on the current page under the parent department. You must query the details of the child departments separately.
   * 
   * @example
   * [{"id":"10001","name":"R&D Department","parentId":"1","memberCount":12,"hasChildren":true}]
   */
  items?: ListIdentityProviderDepartmentsResponseBodyItems[];
  /**
   * @remarks
   * The number of entries per page used for this query.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The response message of the API request.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The token for the next page. An empty or missing value indicates that there are no subsequent pages at the current hierarchy of the parent department, but does not indicate that the entire department tree has been returned.
   * 
   * @example
   * example-next-page-token
   */
  nextToken?: string;
  /**
   * @remarks
   * The unique identifier of the request. Provide this value when troubleshooting issues.
   * 
   * @example
   * 01234567-89AB-CDEF-0123-456789ABCDEF
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API request is successful. To check whether an asynchronous task is completed, query the task status.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of departments. This API does not provide this statistic. The value may not be returned and must not be treated as 0.
   * 
   * @example
   * null
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      httpStatusCode: 'httpStatusCode',
      items: 'items',
      maxResults: 'maxResults',
      message: 'message',
      nextToken: 'nextToken',
      requestId: 'requestId',
      success: 'success',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      items: { 'type': 'array', 'itemType': ListIdentityProviderDepartmentsResponseBodyItems },
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

