// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetComputeResourceAuthUserMappingsResponseBodyDataAccounts extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud UID.
   * 
   * @example
   * 12747300953xxx62
   */
  userId?: string;
  /**
   * @remarks
   * The username in the target system, such as an LDAP account.
   * 
   * @example
   * jsmitxxxx
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetComputeResourceAuthUserMappingsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of mapped account information.
   */
  accounts?: GetComputeResourceAuthUserMappingsResponseBodyDataAccounts[];
  /**
   * @remarks
   * The authentication type, such as LDAP.
   * 
   * @example
   * ldap
   */
  hadoopAuthType?: string;
  static names(): { [key: string]: string } {
    return {
      accounts: 'Accounts',
      hadoopAuthType: 'HadoopAuthType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accounts: { 'type': 'array', 'itemType': GetComputeResourceAuthUserMappingsResponseBodyDataAccounts },
      hadoopAuthType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accounts)) {
      $dara.Model.validateArray(this.accounts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetComputeResourceAuthUserMappingsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: GetComputeResourceAuthUserMappingsResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0000-ABCD-EF****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetComputeResourceAuthUserMappingsResponseBodyData,
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

