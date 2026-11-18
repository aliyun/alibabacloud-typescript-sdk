// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLangfuseUserResponseBodyDataMembershipsProjects extends $dara.Model {
  /**
   * @remarks
   * The ID of the Langfuse project.
   * 
   * @example
   * cmrbhzx930005jw2q****
   */
  projectId?: string;
  /**
   * @remarks
   * The name of the Langfuse project.
   * 
   * @example
   * project_name
   */
  projectName?: string;
  /**
   * @remarks
   * The role in the project.
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
   * The role in the organization.
   * 
   * @example
   * ADMIN
   */
  orgRole?: string;
  /**
   * @remarks
   * The ID of the Langfuse organization.
   * 
   * @example
   * cmrbhzx930005jw2q****
   */
  organizationId?: string;
  /**
   * @remarks
   * The name of the Langfuse organization.
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
   * Indicates whether the user is allowed to create an organization.
   */
  allowOrgCreation?: boolean;
  /**
   * @remarks
   * The time when the user was created. The time is displayed in UTC and follows the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format.
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
   * The name of the user.
   * 
   * @example
   * john
   */
  name?: string;
  /**
   * @remarks
   * The time when the user was updated. The time is displayed in UTC and follows the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format.
   * 
   * @example
   * 2026-06-01T10:03:05Z
   */
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      allowOrgCreation: 'AllowOrgCreation',
      createdAt: 'CreatedAt',
      email: 'Email',
      memberships: 'Memberships',
      name: 'Name',
      updatedAt: 'UpdatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowOrgCreation: 'boolean',
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
   * The response data.
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

