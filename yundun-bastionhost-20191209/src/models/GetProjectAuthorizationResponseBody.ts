// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProjectAuthorizationResponseBodyProjectAuthorizationPrincipals extends $dara.Model {
  /**
   * @remarks
   * The ID of the RAM user specified as the project administrator when PrincipalType is RamUser. The ARN of the RAM role specified as the project administrator when PrincipalType is RamRole.
   * 
   * @example
   * 2036****6767
   */
  principalId?: string;
  /**
   * @remarks
   * The display name of the RAM user or RAM role of the project administrator.
   * 
   * @example
   * name
   */
  principalName?: string;
  /**
   * @remarks
   * The type of the project administrator. Valid values:
   * 
   * - **RamUser**: Resource Access Management (RAM) user.
   * 
   * - **RamRole**: RAM role.
   * 
   * @example
   * RamRole
   */
  principalType?: string;
  static names(): { [key: string]: string } {
    return {
      principalId: 'PrincipalId',
      principalName: 'PrincipalName',
      principalType: 'PrincipalType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      principalId: 'string',
      principalName: 'string',
      principalType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectAuthorizationResponseBodyProjectAuthorizationProjects extends $dara.Model {
  /**
   * @remarks
   * The description of the project.
   * 
   * @example
   * comment
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the project is the default project. Valid values:
   * 
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * false
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * project1
   */
  name?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 1
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      isDefault: 'IsDefault',
      name: 'Name',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      isDefault: 'boolean',
      name: 'string',
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

export class GetProjectAuthorizationResponseBodyProjectAuthorization extends $dara.Model {
  /**
   * @remarks
   * The project authorization ID.
   * 
   * @example
   * 1
   */
  authorizationId?: number;
  /**
   * @remarks
   * The description of the project authorization.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The project authorization name.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The information about the project administrators specified in the project authorization.
   */
  principals?: GetProjectAuthorizationResponseBodyProjectAuthorizationPrincipals[];
  /**
   * @remarks
   * The list of project IDs associated with the project authorization.
   */
  projectIds?: number[];
  /**
   * @remarks
   * The information about the projects associated with the project authorization.
   */
  projects?: GetProjectAuthorizationResponseBodyProjectAuthorizationProjects[];
  /**
   * @remarks
   * The scope of manageable assets associated with the authorization. Valid values:
   * 
   * - **1**: All projects.
   * 
   * - **2**: Specified projects.
   * 
   * @example
   * 1
   */
  scopeType?: number;
  static names(): { [key: string]: string } {
    return {
      authorizationId: 'AuthorizationId',
      description: 'Description',
      name: 'Name',
      principals: 'Principals',
      projectIds: 'ProjectIds',
      projects: 'Projects',
      scopeType: 'ScopeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationId: 'number',
      description: 'string',
      name: 'string',
      principals: { 'type': 'array', 'itemType': GetProjectAuthorizationResponseBodyProjectAuthorizationPrincipals },
      projectIds: { 'type': 'array', 'itemType': 'number' },
      projects: { 'type': 'array', 'itemType': GetProjectAuthorizationResponseBodyProjectAuthorizationProjects },
      scopeType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.principals)) {
      $dara.Model.validateArray(this.principals);
    }
    if(Array.isArray(this.projectIds)) {
      $dara.Model.validateArray(this.projectIds);
    }
    if(Array.isArray(this.projects)) {
      $dara.Model.validateArray(this.projects);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectAuthorizationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the project authorization.
   */
  projectAuthorization?: GetProjectAuthorizationResponseBodyProjectAuthorization;
  /**
   * @remarks
   * The request ID generated by Alibaba Cloud for this request.
   * 
   * @example
   * EC9BF0F4-8983-491A-BC8C-1B4DD94976DE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      projectAuthorization: 'ProjectAuthorization',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectAuthorization: GetProjectAuthorizationResponseBodyProjectAuthorization,
      requestId: 'string',
    };
  }

  validate() {
    if(this.projectAuthorization && typeof (this.projectAuthorization as any).validate === 'function') {
      (this.projectAuthorization as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

