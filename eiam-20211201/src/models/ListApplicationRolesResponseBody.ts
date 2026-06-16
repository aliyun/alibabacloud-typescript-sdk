// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationRolesResponseBodyApplicationRoles extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The application role ID.
   * 
   * @example
   * approle_01kh2vuo8v9splv8maak1d22rxxxx
   */
  applicationRoleId?: string;
  /**
   * @remarks
   * The name of the application role.
   * 
   * @example
   * Admin Role
   */
  applicationRoleName?: string;
  /**
   * @remarks
   * The value of the application role.
   * 
   * @example
   * admin_role
   */
  applicationRoleValue?: string;
  /**
   * @remarks
   * The description of the application role.
   * 
   * @example
   * Admin Role Description
   */
  description?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      applicationRoleId: 'ApplicationRoleId',
      applicationRoleName: 'ApplicationRoleName',
      applicationRoleValue: 'ApplicationRoleValue',
      description: 'Description',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      applicationRoleId: 'string',
      applicationRoleName: 'string',
      applicationRoleValue: 'string',
      description: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationRolesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of application roles.
   */
  applicationRoles?: ListApplicationRolesResponseBodyApplicationRoles[];
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to start the next query.
   * 
   * @example
   * NTxxxxexample
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
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
      applicationRoles: 'ApplicationRoles',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationRoles: { 'type': 'array', 'itemType': ListApplicationRolesResponseBodyApplicationRoles },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.applicationRoles)) {
      $dara.Model.validateArray(this.applicationRoles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

