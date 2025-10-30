// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourceLogDeliveryStatusResponseBodyLogConfigs extends $dara.Model {
  /**
   * @example
   * export-kafka
   */
  deliveryName?: string;
  /**
   * @example
   * kafka
   */
  deliveryType?: string;
  /**
   * @example
   * test.waf.com-waf
   */
  resource?: string;
  /**
   * @example
   * true
   */
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      deliveryName: 'DeliveryName',
      deliveryType: 'DeliveryType',
      resource: 'Resource',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryName: 'string',
      deliveryType: 'string',
      resource: 'string',
      status: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceLogDeliveryStatusResponseBody extends $dara.Model {
  logConfigs?: DescribeResourceLogDeliveryStatusResponseBodyLogConfigs[];
  /**
   * @example
   * D7861F61-5B61-46CE-A47C-6B19****5EB0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      logConfigs: 'LogConfigs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logConfigs: { 'type': 'array', 'itemType': DescribeResourceLogDeliveryStatusResponseBodyLogConfigs },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.logConfigs)) {
      $dara.Model.validateArray(this.logConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

