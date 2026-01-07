// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSecretResponseBodyData extends $dara.Model {
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
  code?: string;
  data?: CreateSecretResponseBodyData;
  message?: string;
  /**
   * @remarks
   * Id of the request
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

