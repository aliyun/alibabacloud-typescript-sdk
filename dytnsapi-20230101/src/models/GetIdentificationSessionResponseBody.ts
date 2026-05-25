// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIdentificationSessionResponseBodyData extends $dara.Model {
  /**
   * @example
   * 示例值
   */
  expireDate?: string;
  /**
   * @example
   * 示例值示例值
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      expireDate: 'ExpireDate',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireDate: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdentificationSessionResponseBody extends $dara.Model {
  /**
   * @example
   * -
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: GetIdentificationSessionResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 68A40250-50CD-034C-B728-0BD******177
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
      data: GetIdentificationSessionResponseBodyData,
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

