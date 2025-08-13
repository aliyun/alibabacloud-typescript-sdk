// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeServiceListResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Service code
   * 
   * @example
   * coupon_abuse_detection
   */
  serviceCode?: string;
  /**
   * @remarks
   * Service name.
   * 
   * @example
   * coupon_abuse_detection
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      serviceCode: 'serviceCode',
      serviceName: 'serviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceCode: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * Return object
   */
  resultObject?: DescribeServiceListResponseBodyResultObject[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultObject: 'resultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: { 'type': 'array', 'itemType': DescribeServiceListResponseBodyResultObject },
    };
  }

  validate() {
    if(Array.isArray(this.resultObject)) {
      $dara.Model.validateArray(this.resultObject);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

