// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLangfuseProjectMembershipsResponseBodyDataMemberships extends $dara.Model {
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
   * The username.
   * 
   * @example
   * john
   */
  name?: string;
  /**
   * @remarks
   * The role of the user in the Langfuse organization.
   * 
   * @example
   * ADMIN
   */
  orgRole?: string;
  /**
   * @remarks
   * The role of the user in the Langfuse project.
   * 
   * @example
   * VIEWER
   */
  projectRole?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      name: 'Name',
      orgRole: 'OrgRole',
      projectRole: 'ProjectRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      name: 'string',
      orgRole: 'string',
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

export class DescribeLangfuseProjectMembershipsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of user roles in the Langfuse project.
   */
  memberships?: DescribeLangfuseProjectMembershipsResponseBodyDataMemberships[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      memberships: 'Memberships',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberships: { 'type': 'array', 'itemType': DescribeLangfuseProjectMembershipsResponseBodyDataMemberships },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
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

export class DescribeLangfuseProjectMembershipsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeLangfuseProjectMembershipsResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * A82758F8-E793-5610-BE11-0E46664305C2
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
      data: DescribeLangfuseProjectMembershipsResponseBodyData,
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

