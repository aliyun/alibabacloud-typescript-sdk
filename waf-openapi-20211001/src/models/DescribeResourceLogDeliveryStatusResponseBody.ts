// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourceLogDeliveryStatusResponseBodyLogConfigs extends $dara.Model {
  /**
   * @remarks
   * The name of the delivery configuration.
   * 
   * @example
   * export-kafka
   */
  deliveryName?: string;
  /**
   * @remarks
   * The delivery type of the protected object. Valid values:
   * 
   * - **syslog**: delivered to a syslog service.
   * - **kafka**: delivered to a Kafka service.
   * 
   * @example
   * kafka
   */
  deliveryType?: string;
  /**
   * @remarks
   * The protected object.
   * 
   * @example
   * test.waf.com-waf
   */
  resource?: string;
  /**
   * @remarks
   * The log delivery status of the protected object. Valid values:
   * 
   * - **true**: enabled.
   * 
   * - **false**: disabled.
   * 
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
  /**
   * @remarks
   * The list of log delivery configurations for protected objects.
   */
  logConfigs?: DescribeResourceLogDeliveryStatusResponseBodyLogConfigs[];
  /**
   * @remarks
   * The request ID.
   * 
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

