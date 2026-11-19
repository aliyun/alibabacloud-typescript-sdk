// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccountRolesResponseBodyRolesRole extends $dara.Model {
  DBName?: string;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      DBName: 'DBName',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBName: 'string',
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

export class DescribeAccountRolesResponseBodyRoles extends $dara.Model {
  role?: DescribeAccountRolesResponseBodyRolesRole[];
  static names(): { [key: string]: string } {
    return {
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      role: { 'type': 'array', 'itemType': DescribeAccountRolesResponseBodyRolesRole },
    };
  }

  validate() {
    if(Array.isArray(this.role)) {
      $dara.Model.validateArray(this.role);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountRolesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7FEF1BEF-2842-5758-9126-415A297*****
   */
  requestId?: string;
  roles?: DescribeAccountRolesResponseBodyRoles;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      roles: 'Roles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      roles: DescribeAccountRolesResponseBodyRoles,
    };
  }

  validate() {
    if(this.roles && typeof (this.roles as any).validate === 'function') {
      (this.roles as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

