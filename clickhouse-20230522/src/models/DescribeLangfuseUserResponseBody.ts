// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLangfuseUserResponseBodyDataMembershipsProjects extends $dara.Model {
  /**
   * @remarks
   * The Langfuse project ID.
   * 
   * @example
   * cmrbhzx930005jw2q****
   */
  projectId?: string;
  /**
   * @remarks
   * The Langfuse project name.
   * 
   * @example
   * project_name
   */
  projectName?: string;
  /**
   * @remarks
   * The role of the user within the project.
   * 
   * @example
   * VIEWER
   */
  projectRole?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      projectRole: 'ProjectRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      projectName: 'string',
      projectRole: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLangfuseUserResponseBodyDataMemberships extends $dara.Model {
  /**
   * @remarks
   * The role of the user within the organization.
   * 
   * @example
   * ADMIN
   */
  orgRole?: string;
  /**
   * @remarks
   * The Langfuse organization ID.
   * 
   * @example
   * cmrbhzx930005jw2q****
   */
  organizationId?: string;
  /**
   * @remarks
   * The Langfuse organization name.
   * 
   * @example
   * org_name
   */
  organizationName?: string;
  /**
   * @remarks
   * The list of Langfuse projects.
   */
  projects?: DescribeLangfuseUserResponseBodyDataMembershipsProjects[];
  static names(): { [key: string]: string } {
    return {
      orgRole: 'OrgRole',
      organizationId: 'OrganizationId',
      organizationName: 'OrganizationName',
      projects: 'Projects',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgRole: 'string',
      organizationId: 'string',
      organizationName: 'string',
      projects: { 'type': 'array', 'itemType': DescribeLangfuseUserResponseBodyDataMembershipsProjects },
    };
  }

  validate() {
    if(Array.isArray(this.projects)) {
      $dara.Model.validateArray(this.projects);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLangfuseUserResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the user was created.
   * 
   * @example
   * 2026-06-01T10:03:05Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The email address of the user.
   * 
   * @example
   * john@company.com
   */
  email?: string;
  /**
   * @remarks
   * The role information of the user.
   */
  memberships?: DescribeLangfuseUserResponseBodyDataMemberships[];
  /**
   * @remarks
   * The username.
   * 
   * @example
   * john
   */
  name?: string;
  /**
   * @remarks
   * The time when the user was last updated.
   * 
   * @example
   * 2026-06-01T10:03:05Z
   */
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      email: 'Email',
      memberships: 'Memberships',
      name: 'Name',
      updatedAt: 'UpdatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      email: 'string',
      memberships: { 'type': 'array', 'itemType': DescribeLangfuseUserResponseBodyDataMemberships },
      name: 'string',
      updatedAt: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.memberships)) {
      $dara.Model.validateArray(this.memberships);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLangfuseUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result.
   */
  data?: DescribeLangfuseUserResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2FED790E-FB61-4721-8C1C-07C627FA5A19
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeLangfuseUserResponseBodyData,
      requestId: 'string',
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

