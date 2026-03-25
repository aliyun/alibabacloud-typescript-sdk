// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSecretResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the key.
   * 
   * @example
   * sec-d5e6shmm1hkoxxxxxxxx
   */
  secretId?: string;
  static names(): { [key: string]: string } {
    return {
      secretId: 'secretId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecretResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: CreateSecretResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Failed to upload data. Please try again
   */
  message?: string;
  /**
   * @remarks
   * ID of the request.
   * 
   * @example
   * CFF809D7-045D-502F-BF6C-947Exxxxxxxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateSecretResponseBodyData,
      message: 'string',
      requestId: 'string',
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

