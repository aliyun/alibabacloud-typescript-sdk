// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNoTrainPicAvatarResponseBodyData extends $dara.Model {
  /**
   * @example
   * M1ONzwuILu-nPT7pvr6maKvQ
   */
  avatarId?: string;
  /**
   * @example
   * true/false
   */
  pass?: boolean;
  static names(): { [key: string]: string } {
    return {
      avatarId: 'avatarId',
      pass: 'pass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarId: 'string',
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

export class CreateNoTrainPicAvatarResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: CreateNoTrainPicAvatarResponseBodyData;
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
      data: CreateNoTrainPicAvatarResponseBodyData,
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

