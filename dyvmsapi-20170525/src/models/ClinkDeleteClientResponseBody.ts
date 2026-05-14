// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClinkDeleteClientResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 请求 id
   * 
   * @example
   * xxx
   */
  clinkRequestId?: string;
  /**
   * @remarks
   * 座席号
   * 
   * @example
   * 1111
   */
  cno?: string;
  static names(): { [key: string]: string } {
    return {
      clinkRequestId: 'ClinkRequestId',
      cno: 'Cno',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clinkRequestId: 'string',
      cno: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClinkDeleteClientResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ClinkDeleteClientResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * D9CB3933-9FE3-4870-BA8E-2BEE91B69D23
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: ClinkDeleteClientResponseBodyData,
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

