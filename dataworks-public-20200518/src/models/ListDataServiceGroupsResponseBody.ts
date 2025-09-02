// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataServiceGroupsResponseBodyGroupPagingResultGroups extends $dara.Model {
  /**
   * @remarks
   * The ID of the API Gateway group to which the workflow is bound.
   * 
   * @example
   * 100abc
   */
  apiGatewayGroupId?: string;
  /**
   * @remarks
   * The time when the business process was created.
   * 
   * @example
   * 2020-09-24T18:37:51+0800
   */
  createdTime?: string;
  /**
   * @remarks
   * The user identifier (UID) of the creator of the business process. The value of this parameter may be empty for creators of some existing business processes.
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
   * Test
   */
  description?: string;
  /**
   * @remarks
   * The business process ID.
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
   * Test
   */
  groupName?: string;
  /**
   * @remarks
   * The time when the business process was modified.
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
   * The business processes.
   */
  groups?: ListDataServiceGroupsResponseBodyGroupPagingResultGroups[];
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
   * The number of entries per page. Valid values: 1 to 100. Default value: 10.
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
   * The paging result for the business processes.
   */
  groupPagingResult?: ListDataServiceGroupsResponseBodyGroupPagingResult;
  /**
   * @remarks
   * The request ID.
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

