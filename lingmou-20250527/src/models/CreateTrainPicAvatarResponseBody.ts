// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTrainPicAvatarResponseBodyData extends $dara.Model {
  /**
   * @example
   * M1AguofmMxaoUQsuSPQ3j0ng
   */
  avatarId?: string;
  /**
   * @example
   * 1200
   */
  expectedCompletionTime?: number;
  pass?: boolean;
  static names(): { [key: string]: string } {
    return {
      avatarId: 'avatarId',
      expectedCompletionTime: 'expectedCompletionTime',
      pass: 'pass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarId: 'string',
      expectedCompletionTime: 'number',
      pass: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrainPicAvatarResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: CreateTrainPicAvatarResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 7239F9E5-A4DB-55BA-B701-0CE47DBDB0A8
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateTrainPicAvatarResponseBodyData,
      httpStatusCode: 'number',
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

