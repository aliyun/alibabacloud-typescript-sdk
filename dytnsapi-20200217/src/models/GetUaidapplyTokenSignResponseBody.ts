// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUAIDApplyTokenSignResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The mobile carrier. Valid values:
   * 
   * - **CM**: China Mobile
   * 
   * - **CU**: China Unicom
   * 
   * - **CT**: China Telecom
   * 
   * @example
   * CM
   */
  carrier?: string;
  /**
   * @remarks
   * The external ID.
   * 
   * @example
   * b8b5b3a*******0b9893484fdf412c99
   */
  outId?: string;
  /**
   * @remarks
   * The signature value.
   * 
   * @example
   * D2E204D74EEB373E468632********23F592C4C9
   */
  sign?: string;
  static names(): { [key: string]: string } {
    return {
      carrier: 'Carrier',
      outId: 'OutId',
      sign: 'Sign',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carrier: 'string',
      outId: 'string',
      sign: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUAIDApplyTokenSignResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the access denial.
   * 
   * @example
   * -
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code. Valid values:
   * 
   * - **OK**: The request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: GetUAIDApplyTokenSignResponseBodyData;
  /**
   * @remarks
   * The response message.
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
      data: GetUAIDApplyTokenSignResponseBodyData,
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

