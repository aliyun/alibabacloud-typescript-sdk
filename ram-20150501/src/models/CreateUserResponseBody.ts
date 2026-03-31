// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserResponseBodyUser extends $dara.Model {
  /**
   * @remarks
   * The description of the RAM user.
   * 
   * @example
   * This is a cloud computing engineer.
   */
  comments?: string;
  /**
   * @remarks
   * The point in time when the RAM user was created. The time is displayed in UTC.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  createDate?: string;
  /**
   * @remarks
   * The display name of the RAM user.
   * 
   * @example
   * alice
   */
  displayName?: string;
  /**
   * @remarks
   * The email address of the RAM user.
   * 
   * >  This parameter applies only to the China site (aliyun.com).
   * 
   * @example
   * alice@example.com
   */
  email?: string;
  /**
   * @remarks
   * The mobile phone number of the RAM user.
   * 
   * >  This parameter applies only to the China site (aliyun.com).
   * 
   * @example
   * 86-1868888****
   */
  mobilePhone?: string;
  /**
   * @remarks
   * The ID of the RAM user.
   * 
   * @example
   * 122748924538****
   */
  userId?: string;
  /**
   * @remarks
   * The name of the RAM user.
   * 
   * @example
   * alice
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      createDate: 'CreateDate',
      displayName: 'DisplayName',
      email: 'Email',
      mobilePhone: 'MobilePhone',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'string',
      createDate: 'string',
      displayName: 'string',
      email: 'string',
      mobilePhone: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the RAM user.
   */
  user?: CreateUserResponseBodyUser;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      user: CreateUserResponseBodyUser,
    };
  }

  validate() {
    if(this.user && typeof (this.user as any).validate === 'function') {
      (this.user as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

