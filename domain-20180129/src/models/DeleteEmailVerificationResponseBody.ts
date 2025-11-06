// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEmailVerificationResponseBodyFailList extends $dara.Model {
  /**
   * @example
   * ParameterIllegall
   */
  code?: string;
  /**
   * @example
   * test1@aliyun.com
   */
  email?: string;
  /**
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
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * test2@aliyun.com
   */
  email?: string;
  /**
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
  failList?: DeleteEmailVerificationResponseBodyFailList[];
  /**
   * @example
   * 7A3D0E4A-0D4B-4BD0-90D7-A61DF8DD26AE
   */
  requestId?: string;
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

