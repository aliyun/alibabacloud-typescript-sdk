// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationsForUserResponseBodyApplicationsApplicationRoles extends $dara.Model {
  /**
   * @remarks
   * 应用角色标识。
   * 
   * @example
   * app_role_mkv7rgt4ds8d8v0qtzev2mxxxx
   */
  applicationRoleId?: string;
  /**
   * @remarks
   * 直接分配给当前用户的权限，视为直接授权。
   * 
   * @example
   * true
   */
  hasDirectAuthorization?: boolean;
  /**
   * @remarks
   * 通过用户隶属的组织、组获取的权限，视为继承权限。
   * 
   * @example
   * false
   */
  hasInheritAuthorization?: boolean;
  static names(): { [key: string]: string } {
    return {
      applicationRoleId: 'ApplicationRoleId',
      hasDirectAuthorization: 'HasDirectAuthorization',
      hasInheritAuthorization: 'HasInheritAuthorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationRoleId: 'string',
      hasDirectAuthorization: 'boolean',
      hasInheritAuthorization: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsForUserResponseBodyApplications extends $dara.Model {
  /**
   * @remarks
   * The ID of the application that the EIAM account can access.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * 应用角色列表。
   */
  applicationRoles?: ListApplicationsForUserResponseBodyApplicationsApplicationRoles[];
  /**
   * @remarks
   * Indicates whether the EIAM account has direct permissions on the application. Valid values:
   * 
   * *   true: The EIAM account has direct permissions on the application.
   * *   false: The EIAM account does not have direct permissions on the application.
   * 
   * @example
   * true
   */
  hasDirectAuthorization?: boolean;
  /**
   * @remarks
   * Indicates whether the EIAM account has inherited permissions on the application. Valid values:
   * 
   * *   true: A parent organization or an organization to which the EIAM account belongs has direct permissions on the application.
   * *   false: A parent organization or an organization to which the EIAM account belongs does not have direct permissions on the application.
   * 
   * @example
   * false
   */
  hasInheritAuthorization?: boolean;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      applicationRoles: 'ApplicationRoles',
      hasDirectAuthorization: 'HasDirectAuthorization',
      hasInheritAuthorization: 'HasInheritAuthorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      applicationRoles: { 'type': 'array', 'itemType': ListApplicationsForUserResponseBodyApplicationsApplicationRoles },
      hasDirectAuthorization: 'boolean',
      hasInheritAuthorization: 'boolean',
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

export class ListApplicationsForUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The applications that the EIAM account can access.
   */
  applications?: ListApplicationsForUserResponseBodyApplications[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of the returned entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': ListApplicationsForUserResponseBodyApplications },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.applications)) {
      $dara.Model.validateArray(this.applications);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

