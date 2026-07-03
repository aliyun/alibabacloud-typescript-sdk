// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSecretValueResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The key value.
   * 
   * @example
   * apikey-xxxxxxxx
   */
  secretData?: string;
  static names(): { [key: string]: string } {
    return {
      secretData: 'secretData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretValueResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: GetSecretValueResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 479AE38F-A574-52F7-87EA-E91199999F9E
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
      data: GetSecretValueResponseBodyData,
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

