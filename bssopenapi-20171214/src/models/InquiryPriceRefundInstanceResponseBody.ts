// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InquiryPriceRefundInstanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The currency.
   * 
   * @example
   * CNY. CNY: Chinese Yuan. USD: United States dollar. JPY: Japanese Yen.
   */
  currency?: string;
  /**
   * @remarks
   * The site of the execution host.
   * 
   * @example
   * cn
   */
  hostId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-bp1etb69sqxgl4*******
   */
  instanceId?: string;
  /**
   * @remarks
   * The refundable amount.
   * 
   * @example
   * 12.34
   */
  refundAmount?: number;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      hostId: 'HostId',
      instanceId: 'InstanceId',
      refundAmount: 'RefundAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      hostId: 'string',
      instanceId: 'string',
      refundAmount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InquiryPriceRefundInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * data
   */
  data?: InquiryPriceRefundInstanceResponseBodyData;
  /**
   * @remarks
   * The description of the execution result.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * UUID
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values: true and false.
   * 
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
      data: InquiryPriceRefundInstanceResponseBodyData,
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

