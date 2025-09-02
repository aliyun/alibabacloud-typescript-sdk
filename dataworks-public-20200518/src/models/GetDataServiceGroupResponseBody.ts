// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataServiceGroupResponseBodyGroup extends $dara.Model {
  /**
   * @remarks
   * The ID of the API group that is associated with the business process in the API Gateway console.
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
   * The time when the business process was last modified.
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

export class GetDataServiceGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the business process.
   */
  group?: GetDataServiceGroupResponseBodyGroup;
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
      group: 'Group',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: GetDataServiceGroupResponseBodyGroup,
      requestId: 'string',
    };
  }

  validate() {
    if(this.group && typeof (this.group as any).validate === 'function') {
      (this.group as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

