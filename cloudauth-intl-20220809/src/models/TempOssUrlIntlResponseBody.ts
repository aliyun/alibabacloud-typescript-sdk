// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TempOssUrlIntlResponseBodyData extends $dara.Model {
  /**
   * @example
   * http://bzxh.cdn.weijin365.com/assets/index-55338127.png
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TempOssUrlIntlResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: TempOssUrlIntlResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * EFA11401-C961-5E89-A2D3-BF9883E5CC3D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: TempOssUrlIntlResponseBodyData,
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

