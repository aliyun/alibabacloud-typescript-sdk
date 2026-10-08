// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEmailVerificationResponseBodyFailList extends $dara.Model {
  /**
   * @remarks
   * Returned code.
   * 
   * @example
   * ParameterIllegall
   */
  code?: string;
  /**
   * @remarks
   * Email address for which deletion failed.
   * 
   * @example
   * test1@aliyun.com
   */
  email?: string;
  /**
   * @remarks
   * Message returned upon failure to delete the email address.
   * 
   * @example
   * Parameter error
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      email: 'Email',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      email: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEmailVerificationResponseBodySuccessList extends $dara.Model {
  /**
   * @remarks
   * Returned code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Email address that was successfully deleted.
   * 
   * @example
   * test2@aliyun.com
   */
  email?: string;
  /**
   * @remarks
   * Message returned upon successful deletion of the email address.
   * 
   * @example
   * Success
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      email: 'Email',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      email: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEmailVerificationResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of email addresses for which deletion failed.
   */
  failList?: DeleteEmailVerificationResponseBodyFailList[];
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 7A3D0E4A-0D4B-4BD0-90D7-A61DF8DD26AE
   */
  requestId?: string;
  /**
   * @remarks
   * List of successfully deleted email addresses.
   */
  successList?: DeleteEmailVerificationResponseBodySuccessList[];
  static names(): { [key: string]: string } {
    return {
      failList: 'FailList',
      requestId: 'RequestId',
      successList: 'SuccessList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failList: { 'type': 'array', 'itemType': DeleteEmailVerificationResponseBodyFailList },
      requestId: 'string',
      successList: { 'type': 'array', 'itemType': DeleteEmailVerificationResponseBodySuccessList },
    };
  }

  validate() {
    if(Array.isArray(this.failList)) {
      $dara.Model.validateArray(this.failList);
    }
    if(Array.isArray(this.successList)) {
      $dara.Model.validateArray(this.successList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

