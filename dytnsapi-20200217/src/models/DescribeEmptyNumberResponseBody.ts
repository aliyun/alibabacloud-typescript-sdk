// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEmptyNumberResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 传入的手机号。
   * 
   * @example
   * 189****1234
   */
  number?: string;
  /**
   * @remarks
   * 检测手机号返回状态。取值：
   * 
   * - **EMPTY**：空号。
   * 
   * - **NORMAL**：正常。
   * 
   * - **SUSPECT_EMPTY**：疑似空号。
   * 
   * - **UNKNOWN**：未知。
   * 
   * @example
   * EMPTY
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      number: 'Number',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEmptyNumberResponseBody extends $dara.Model {
  /**
   * @remarks
   * 返回状态码。取值：
   * 
   * - **OK**：成功。
   * 
   * - **InvalidPhoneNumber.Check**：手机号非法。
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * 返回结果。
   */
  data?: DescribeEmptyNumberResponseBodyData;
  /**
   * @remarks
   * 状态码的描述。
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * 公共参数，每个请求返回的ID都是唯一的，可用于排查和定位问题。
   * 
   * @example
   * CC3BB6D2-2FDF-4321-9DCE-B38165CE4C47
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
      data: DescribeEmptyNumberResponseBodyData,
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

