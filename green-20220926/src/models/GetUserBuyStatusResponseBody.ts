// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserBuyStatusResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Bid。
   * 
   * @example
   * 26842
   */
  bid?: number;
  /**
   * @remarks
   * Indicates whether the commodity is activated on Alibaba Cloud.
   * 
   * @example
   * True
   */
  buy?: boolean;
  /**
   * @remarks
   * Indicates whether there is an overdue payment.
   * 
   * @example
   * False
   */
  indebt?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * xxx-xxx-xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The label.
   * 
   * @example
   * bailian
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      bid: 'Bid',
      buy: 'Buy',
      indebt: 'Indebt',
      instanceId: 'InstanceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bid: 'number',
      buy: 'boolean',
      indebt: 'boolean',
      instanceId: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserBuyStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetUserBuyStatusResponseBodyData;
  /**
   * @remarks
   * The description of the error code.
   * 
   * @example
   * OK
   */
  msg?: string;
  /**
   * @remarks
   * The ID assigned by the backend to uniquely identify the request. This ID can be used to troubleshoot issues.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @remarks
   * The success flag.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetUserBuyStatusResponseBodyData,
      msg: 'string',
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

