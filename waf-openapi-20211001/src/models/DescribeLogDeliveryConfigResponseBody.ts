// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLogDeliveryConfigResponseBodyDeliveryConfig extends $dara.Model {
  /**
   * @remarks
   * The details of the log delivery configuration, which are formatted as a JSON string constructed from a series of parameters.
   * 
   * > This parameter is the same as the **DeliveryDetail** parameter of the [CreateLogDeliveryConfig](~~CreateLogDeliveryConfig~~) operation. For more information, see the description of the log delivery configuration parameters in the [CreateLogDeliveryConfig](~~CreateLogDeliveryConfig~~) operation.
   * 
   * @example
   * {
   *   "rfcVersion": "rfc3164",
   *   "protocol": "tcp",
   *   "servers": [
   *     {
   *       "address": "1.1.1.1",
   *       "port": 20
   *     }
   *   ]
   * }
   */
  deliveryDetail?: string;
  /**
   * @remarks
   * The name of the log delivery configuration.
   * 
   * @example
   * test1
   */
  deliveryName?: string;
  /**
   * @remarks
   * The type of the log delivery configuration. Valid values:
   * 
   * - **syslog**: delivers logs to a Syslog service.
   * - **kafka**: delivers logs to a Kafka service.
   * 
   * @example
   * syslog
   */
  deliveryType?: string;
  static names(): { [key: string]: string } {
    return {
      deliveryDetail: 'DeliveryDetail',
      deliveryName: 'DeliveryName',
      deliveryType: 'DeliveryType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryDetail: 'string',
      deliveryName: 'string',
      deliveryType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogDeliveryConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The log delivery configuration.
   */
  deliveryConfig?: DescribeLogDeliveryConfigResponseBodyDeliveryConfig;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 66A98669-CC6E-4F3E-80A6-******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deliveryConfig: 'DeliveryConfig',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryConfig: DescribeLogDeliveryConfigResponseBodyDeliveryConfig,
      requestId: 'string',
    };
  }

  validate() {
    if(this.deliveryConfig && typeof (this.deliveryConfig as any).validate === 'function') {
      (this.deliveryConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

