// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUsersResponseBodyCreateResultCreatedUsers extends $dara.Model {
  /**
   * @remarks
   * The email address of the end user.
   * 
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @remarks
   * The name of the end user.
   * 
   * @example
   * test1
   */
  endUserId?: string;
  /**
   * @remarks
   * The mobile number of the end user.
   * 
   * @example
   * 1381111****
   */
  phone?: string;
  /**
   * @remarks
   * The display name of the end user.
   * 
   * @example
   * Bean
   */
  realNickName?: string;
  /**
   * @remarks
   * The remarks of the end user.
   * 
   * @example
   * remark1
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      endUserId: 'EndUserId',
      phone: 'Phone',
      realNickName: 'RealNickName',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      endUserId: 'string',
      phone: 'string',
      realNickName: 'string',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUsersResponseBodyCreateResultFailedUsers extends $dara.Model {
  /**
   * @remarks
   * The email address of the end user.
   * 
   * @example
   * username2@example.com
   */
  email?: string;
  /**
   * @remarks
   * The name of the end user.
   * 
   * @example
   * test2
   */
  endUserId?: string;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * ExistedEndUserId
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * The username test is used by another user.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The mobile number of the end user.
   * 
   * @example
   * 1390000****
   */
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      endUserId: 'EndUserId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      phone: 'Phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      endUserId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      phone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUsersResponseBodyCreateResult extends $dara.Model {
  /**
   * @remarks
   * Details of the created convenience users.
   */
  createdUsers?: CreateUsersResponseBodyCreateResultCreatedUsers[];
  /**
   * @remarks
   * Details of the convenience users that failed to be created.
   */
  failedUsers?: CreateUsersResponseBodyCreateResultFailedUsers[];
  static names(): { [key: string]: string } {
    return {
      createdUsers: 'CreatedUsers',
      failedUsers: 'FailedUsers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdUsers: { 'type': 'array', 'itemType': CreateUsersResponseBodyCreateResultCreatedUsers },
      failedUsers: { 'type': 'array', 'itemType': CreateUsersResponseBodyCreateResultFailedUsers },
    };
  }

  validate() {
    if(Array.isArray(this.createdUsers)) {
      $dara.Model.validateArray(this.createdUsers);
    }
    if(Array.isArray(this.failedUsers)) {
      $dara.Model.validateArray(this.failedUsers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUsersResponseBody extends $dara.Model {
  allSucceed?: boolean;
  /**
   * @remarks
   * The result of user creation.
   */
  createResult?: CreateUsersResponseBodyCreateResult;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      allSucceed: 'AllSucceed',
      createResult: 'CreateResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allSucceed: 'boolean',
      createResult: CreateUsersResponseBodyCreateResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.createResult && typeof (this.createResult as any).validate === 'function') {
      (this.createResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

