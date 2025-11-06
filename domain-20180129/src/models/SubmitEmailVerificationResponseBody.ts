// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitEmailVerificationResponseBodyExistList extends $dara.Model {
  /**
   * @example
   * SendTokenQuotaExceeded
   */
  code?: string;
  /**
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @example
   * The maximum number of attempts allowed to send the email verification link is exceeded.
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

export class SubmitEmailVerificationResponseBodyFailList extends $dara.Model {
  /**
   * @example
   * SendTokenQuotaExceeded
   */
  code?: string;
  /**
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @example
   * The maximum number of attempts allowed to send the email verification link is exceeded
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

export class SubmitEmailVerificationResponseBodySuccessList extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * username@example.com
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

export class SubmitEmailVerificationResponseBody extends $dara.Model {
  existList?: SubmitEmailVerificationResponseBodyExistList[];
  failList?: SubmitEmailVerificationResponseBodyFailList[];
  /**
   * @example
   * E2A8A5EF-DF8A-4C48-8FD4-9F6BD71AB26D
   */
  requestId?: string;
  successList?: SubmitEmailVerificationResponseBodySuccessList[];
  static names(): { [key: string]: string } {
    return {
      existList: 'ExistList',
      failList: 'FailList',
      requestId: 'RequestId',
      successList: 'SuccessList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      existList: { 'type': 'array', 'itemType': SubmitEmailVerificationResponseBodyExistList },
      failList: { 'type': 'array', 'itemType': SubmitEmailVerificationResponseBodyFailList },
      requestId: 'string',
      successList: { 'type': 'array', 'itemType': SubmitEmailVerificationResponseBodySuccessList },
    };
  }

  validate() {
    if(Array.isArray(this.existList)) {
      $dara.Model.validateArray(this.existList);
    }
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

