// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportOneTaskPhoneNumberResponseBodyData extends $dara.Model {
  /**
   * @example
   * 92304322323*****
   */
  detailId?: number;
  static names(): { [key: string]: string } {
    return {
      detailId: 'DetailId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportOneTaskPhoneNumberResponseBody extends $dara.Model {
  /**
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ImportOneTaskPhoneNumberResponseBodyData;
  /**
   * @example
   * 示例值
   */
  message?: string;
  /**
   * @example
   * D6A51251-F7C4-596A-9F45-3C3219A5450D
   */
  requestId?: string;
  /**
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: ImportOneTaskPhoneNumberResponseBodyData,
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

