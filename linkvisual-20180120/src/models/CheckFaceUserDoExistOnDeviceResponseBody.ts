// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckFaceUserDoExistOnDeviceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the face of the specified user is successfully synchronized.
   * 
   * @example
   * true
   */
  doExist?: boolean;
  static names(): { [key: string]: string } {
    return {
      doExist: 'DoExist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      doExist: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckFaceUserDoExistOnDeviceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned check information.
   */
  data?: CheckFaceUserDoExistOnDeviceResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * success
   */
  errorMessage?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0A13279A-5640-45E7-87AA-83750541AD0E
   */
  requestId?: string;
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
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CheckFaceUserDoExistOnDeviceResponseBodyData,
      errorMessage: 'string',
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

