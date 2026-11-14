// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProjectAuthorizationResponseBodyProjectAuthorizationPrincipals extends $dara.Model {
  /**
   * @remarks
   * If the value of PrincipalType is RamUser, this parameter indicates the ID of the RAM user specified as the project administrator. If the value of PrincipalType is RamRole, this parameter indicates the ARN of the RAM role specified as the project administrator.
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
   * - **RamUser**: Resource Access Management (RAM) user
   * 
   * - **RamRole**: RAM role
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
   * Specifies whether the project is the default project. Valid values:
   * 
   * - **true**: yes
   * 
   * - **false**: no
   * 
   * @example
   * false
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The name of the project.
   * 
   * @example
   * project1
   */
  name?: string;
  /**
   * @remarks
   * The ID of the project.
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
   * The ID of the project authorization.
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
   * The name of the project authorization.
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
   * 
   * @example
   * [1,2,3]
   */
  projectIds?: number[];
  /**
   * @remarks
   * The information about the projects associated with the project authorization.
   */
  projects?: GetProjectAuthorizationResponseBodyProjectAuthorizationProjects[];
  /**
   * @remarks
   * The scope of assets that can be managed by the authorization. Valid values:
   * 
   * - **1**: all projects
   * 
   * - **2**: specified projects
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
   * The unique identifier generated by Alibaba Cloud for the request.
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

