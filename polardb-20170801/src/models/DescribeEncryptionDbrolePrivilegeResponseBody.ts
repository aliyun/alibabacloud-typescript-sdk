// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEncryptionDBRolePrivilegeResponseBodyDataRolePrivilegeList extends $dara.Model {
  /**
   * @remarks
   * The regular users.
   * 
   * @example
   * [alton01]
   */
  encryption?: string;
  /**
   * @remarks
   * Other users.
   * 
   * @example
   * test
   */
  negation?: string;
  /**
   * @remarks
   * The privileged users.
   * 
   * @example
   * [alton]
   */
  notEncryption?: string;
  /**
   * @remarks
   * The name of the role permission.
   * 
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
  /**
   * @remarks
   * A list of role access policies.
   */
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
   * @remarks
   * The cluster ID.
   * 
   * @example
   * pc-****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The result set.
   */
  data?: DescribeEncryptionDBRolePrivilegeResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * > If the request is successful, \\`Successful\\` is returned. If the request fails, an error message, such as an error code, is returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D0CEC6AC-7760-409A-A0D5-E6CD86******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * 
   * - **false**: The request failed.
   * 
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

