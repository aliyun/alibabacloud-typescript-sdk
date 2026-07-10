// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLangfuseUsersResponseBodyDataUsers extends $dara.Model {
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
   * The username.
   * 
   * @example
   * john
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      email: 'Email',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      email: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLangfuseUsersResponseBodyData extends $dara.Model {
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
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of users.
   */
  users?: DescribeLangfuseUsersResponseBodyDataUsers[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      users: { 'type': 'array', 'itemType': DescribeLangfuseUsersResponseBodyDataUsers },
    };
  }

  validate() {
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLangfuseUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result.
   */
  data?: DescribeLangfuseUsersResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C342F3DD-1FF7-55E9-A1A1-098DE07CD1A2
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
      data: DescribeLangfuseUsersResponseBodyData,
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

