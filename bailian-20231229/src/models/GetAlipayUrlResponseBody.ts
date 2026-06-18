// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAlipayUrlResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The tipping code used to query the tipping status.
   * 
   * @example
   * xxsdfasfw
   */
  code?: string;
  /**
   * @remarks
   * The generated tipping URL.
   * 
   * @example
   * https://xxxxxx.aliyun-inc.com
   */
  qrUrl?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      qrUrl: 'qrUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      qrUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlipayUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response data.
   */
  data?: GetAlipayUrlResponseBodyData;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * 6a71f2d9-f1c9-913b-818b-11402910xxxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetAlipayUrlResponseBodyData,
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

