// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLangfuseOrgMembershipsResponseBodyDataMemberships extends $dara.Model {
  /**
   * @remarks
   * The time when the user was created.
   * 
   * @example
   * 2026-06-24T10:14:33Z
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
   * The username.
   * 
   * @example
   * john
   */
  name?: string;
  /**
   * @remarks
   * The role of the user.
   * 
   * @example
   * VIEWER
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      email: 'Email',
      name: 'Name',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      email: 'string',
      name: 'string',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLangfuseOrgMembershipsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of user roles in the organization.
   */
  memberships?: DescribeLangfuseOrgMembershipsResponseBodyDataMemberships[];
  /**
   * @remarks
   * The page number.
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
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 3
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
      memberships: { 'type': 'array', 'itemType': DescribeLangfuseOrgMembershipsResponseBodyDataMemberships },
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

export class DescribeLangfuseOrgMembershipsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result.
   */
  data?: DescribeLangfuseOrgMembershipsResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1F488A93-83FD-540F-9B67-0333AF64E6A0
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
      data: DescribeLangfuseOrgMembershipsResponseBodyData,
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

