// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSaslUsersResponseBodySaslUserListSaslUserVO extends $dara.Model {
  mechanism?: string;
  password?: string;
  type?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      mechanism: 'Mechanism',
      password: 'Password',
      type: 'Type',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mechanism: 'string',
      password: 'string',
      type: 'string',
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

export class DescribeSaslUsersResponseBodySaslUserList extends $dara.Model {
  saslUserVO?: DescribeSaslUsersResponseBodySaslUserListSaslUserVO[];
  static names(): { [key: string]: string } {
    return {
      saslUserVO: 'SaslUserVO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      saslUserVO: { 'type': 'array', 'itemType': DescribeSaslUsersResponseBodySaslUserListSaslUserVO },
    };
  }

  validate() {
    if(Array.isArray(this.saslUserVO)) {
      $dara.Model.validateArray(this.saslUserVO);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSaslUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned. The HTTP status code 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9E3B3592-5994-4F65-A61E-E62A77A****
   */
  requestId?: string;
  saslUserList?: DescribeSaslUsersResponseBodySaslUserList;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      saslUserList: 'SaslUserList',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      saslUserList: DescribeSaslUsersResponseBodySaslUserList,
      success: 'boolean',
    };
  }

  validate() {
    if(this.saslUserList && typeof (this.saslUserList as any).validate === 'function') {
      (this.saslUserList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

