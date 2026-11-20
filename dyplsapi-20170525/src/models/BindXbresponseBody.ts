// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindXBResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the work number binding.
   * 
   * @example
   * 4353453456
   */
  authId?: string;
  /**
   * @remarks
   * The work number X.
   * 
   * @example
   * 18640577897
   */
  telX?: string;
  static names(): { [key: string]: string } {
    return {
      authId: 'AuthId',
      telX: 'TelX',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authId: 'string',
      telX: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindXBResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denial.
   * 
   * @example
   * 0
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code. Valid values:
   * 
   * - 0000: Success.
   * 
   * Other values indicate failure.
   * 
   * @example
   * 0000
   */
  code?: string;
  /**
   * @remarks
   * The work number binding result.
   * 
   * @example
   * {"AuthId":"4353453456","TelX":"18640577897"}
   */
  data?: BindXBResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - true: Successful.
   * 
   * - false: Failed.
   * 
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
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: BindXBResponseBodyData,
      message: 'string',
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

