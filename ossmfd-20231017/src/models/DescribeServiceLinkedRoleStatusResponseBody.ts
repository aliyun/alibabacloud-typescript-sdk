// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class DescribeServiceLinkedRoleStatusResponseBodyRoleStatus extends $dara.Model {
  /**
   * @example
   * true
   */
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceLinkedRoleStatusResponseBody extends $dara.Model {
  /**
   * @example
   * E99D386F-5546-5BCD-BADD-F4EF4B******
   */
  requestId?: string;
  roleStatus?: DescribeServiceLinkedRoleStatusResponseBodyRoleStatus;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      roleStatus: 'RoleStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      roleStatus: DescribeServiceLinkedRoleStatusResponseBodyRoleStatus,
    };
  }

  validate() {
    if(this.roleStatus && typeof (this.roleStatus as any).validate === 'function') {
      (this.roleStatus as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

