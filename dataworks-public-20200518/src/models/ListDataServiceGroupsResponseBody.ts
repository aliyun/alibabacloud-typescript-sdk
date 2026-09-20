// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataServiceGroupsResponseBodyGroupPagingResultGroups extends $dara.Model {
  /**
   * @remarks
   * The ID of the API Gateway group associated with the business process.
   * 
   * @example
   * 100abc
   */
  apiGatewayGroupId?: string;
  /**
   * @remarks
   * The time when the business process was created.
   * 
   * The format is `yyyy-MM-dd\\"T\\"HH:mm:ssZ`, for example, `2020-09-24T18:37:51+0800`. The time zone offset in this example is `+0800`.
   * 
   * @example
   * 2020-09-24T18:37:51+0800
   */
  createdTime?: string;
  /**
   * @remarks
   * The UID of the creator. The creator UID may be empty for some legacy business processes.
   * 
   * @example
   * 10001
   */
  creatorId?: string;
  /**
   * @remarks
   * The description of the business process.
   * 
   * @example
   * Business process description
   */
  description?: string;
  /**
   * @remarks
   * The ID of the business process.
   * 
   * @example
   * ds_123abc
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the business process.
   * 
   * @example
   * Business process name
   */
  groupName?: string;
  /**
   * @remarks
   * The time when the business process was last modified.
   * 
   * The format is `yyyy-MM-dd\\"T\\"HH:mm:ssZ`, for example, `2020-09-24T18:37:51+0800`. The time zone offset in this example is `+0800`.
   * 
   * @example
   * 2020-09-24T18:37:51+0800
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 10002
   */
  projectId?: number;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 10003
   */
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      apiGatewayGroupId: 'ApiGatewayGroupId',
      createdTime: 'CreatedTime',
      creatorId: 'CreatorId',
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
      modifiedTime: 'ModifiedTime',
      projectId: 'ProjectId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiGatewayGroupId: 'string',
      createdTime: 'string',
      creatorId: 'string',
      description: 'string',
      groupId: 'string',
      groupName: 'string',
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

export class ListDataServiceGroupsResponseBodyGroupPagingResult extends $dara.Model {
  /**
   * @remarks
   * The list of business processes.
   */
  groups?: ListDataServiceGroupsResponseBodyGroupPagingResultGroups[];
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
      groups: 'Groups',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groups: { 'type': 'array', 'itemType': ListDataServiceGroupsResponseBodyGroupPagingResultGroups },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.groups)) {
      $dara.Model.validateArray(this.groups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination result of business processes.
   */
  groupPagingResult?: ListDataServiceGroupsResponseBodyGroupPagingResult;
  /**
   * @remarks
   * The request ID. A unique identifier for the request.
   * 
   * @example
   * 0000-ABCD-EF****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      groupPagingResult: 'GroupPagingResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupPagingResult: ListDataServiceGroupsResponseBodyGroupPagingResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.groupPagingResult && typeof (this.groupPagingResult as any).validate === 'function') {
      (this.groupPagingResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

