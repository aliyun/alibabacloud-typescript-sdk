// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindGxb700ResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The purchased 700 private number, which is the X number.
   * 
   * @example
   * 700********0001
   */
  secretNo?: string;
  /**
   * @remarks
   * The number binding ID.
   * 
   * @example
   * 123*******
   */
  subsId?: number;
  static names(): { [key: string]: string } {
    return {
      secretNo: 'SecretNo',
      subsId: 'SubsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretNo: 'string',
      subsId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindGxb700ResponseBody extends $dara.Model {
  /**
   * @remarks
   * The access denied details.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response code. Valid values:
   * OK: The request was successful.
   * Other values indicate failure.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: BindGxb700ResponseBodyData;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9297B722-A016-43FB-B51A-E54050******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. Valid values:
   * true: Successful.
   * false: Failed.
   * 
   * @example
   * true
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
      data: BindGxb700ResponseBodyData,
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

