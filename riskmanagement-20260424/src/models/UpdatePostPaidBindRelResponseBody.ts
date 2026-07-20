// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePostPaidBindRelResponseBodyDataBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  bindCount?: number;
  /**
   * @example
   * 62A7DCE2-7D9C-511B-919E-0F46A9D19AE6
   */
  requestId?: string;
  /**
   * @example
   * OK
   */
  resultCode?: number;
  static names(): { [key: string]: string } {
    return {
      bindCount: 'BindCount',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindCount: 'number',
      requestId: 'string',
      resultCode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePostPaidBindRelResponseBodyData extends $dara.Model {
  body?: UpdatePostPaidBindRelResponseBodyDataBody;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UpdatePostPaidBindRelResponseBodyDataBody,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePostPaidBindRelResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: UpdatePostPaidBindRelResponseBodyData;
  /**
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @example
   * 6E20BFD0-AA91-594F-B5A7-32CED4777DA0
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UpdatePostPaidBindRelResponseBodyData,
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

