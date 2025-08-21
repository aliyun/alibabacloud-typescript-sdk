// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAligenieUserInfoResponseBodyResult extends $dara.Model {
  /**
   * @example
   * XXX
   */
  aligenieNickname?: string;
  /**
   * @example
   * http://img.alicdn.com/xxx.jpg
   */
  avatar?: string;
  deletable?: boolean;
  static names(): { [key: string]: string } {
    return {
      aligenieNickname: 'AligenieNickname',
      avatar: 'Avatar',
      deletable: 'Deletable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aligenieNickname: 'string',
      avatar: 'string',
      deletable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAligenieUserInfoResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 73C67BD9-175A-1324-8202-9FAABBB3E6FA
   */
  requestId?: string;
  result?: GetAligenieUserInfoResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: GetAligenieUserInfoResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

