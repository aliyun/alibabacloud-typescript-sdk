// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddInboundNumberResponseBodyData extends $dara.Model {
  /**
   * @example
   * 234234238**33
   */
  inboundNumber?: string;
  /**
   * @example
   * 示例值
   */
  message?: string;
  /**
   * @example
   * false
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      inboundNumber: 'InboundNumber',
      message: 'Message',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inboundNumber: 'string',
      message: 'string',
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddInboundNumberResponseBody extends $dara.Model {
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
  data?: AddInboundNumberResponseBodyData[];
  /**
   * @example
   * successful
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
      data: { 'type': 'array', 'itemType': AddInboundNumberResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

