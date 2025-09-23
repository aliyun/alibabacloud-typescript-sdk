// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEncryptionDBRolePrivilegeResponseBodyDataRolePrivilegeList extends $dara.Model {
  /**
   * @example
   * [alton01]
   */
  encryption?: string;
  /**
   * @example
   * test
   */
  negation?: string;
  /**
   * @example
   * [alton]
   */
  notEncryption?: string;
  /**
   * @example
   * test
   */
  rolePrivilegeName?: string;
  static names(): { [key: string]: string } {
    return {
      encryption: 'Encryption',
      negation: 'Negation',
      notEncryption: 'NotEncryption',
      rolePrivilegeName: 'RolePrivilegeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryption: 'string',
      negation: 'string',
      notEncryption: 'string',
      rolePrivilegeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEncryptionDBRolePrivilegeResponseBodyData extends $dara.Model {
  rolePrivilegeList?: DescribeEncryptionDBRolePrivilegeResponseBodyDataRolePrivilegeList[];
  static names(): { [key: string]: string } {
    return {
      rolePrivilegeList: 'RolePrivilegeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rolePrivilegeList: { 'type': 'array', 'itemType': DescribeEncryptionDBRolePrivilegeResponseBodyDataRolePrivilegeList },
    };
  }

  validate() {
    if(Array.isArray(this.rolePrivilegeList)) {
      $dara.Model.validateArray(this.rolePrivilegeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEncryptionDBRolePrivilegeResponseBody extends $dara.Model {
  /**
   * @example
   * pc-****************
   */
  DBClusterId?: string;
  data?: DescribeEncryptionDBRolePrivilegeResponseBodyData;
  /**
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * D0CEC6AC-7760-409A-A0D5-E6CD86******
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      data: DescribeEncryptionDBRolePrivilegeResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

