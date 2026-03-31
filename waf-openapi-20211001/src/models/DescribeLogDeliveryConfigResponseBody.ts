// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLogDeliveryConfigResponseBodyDeliveryConfig extends $dara.Model {
  /**
   * @remarks
   * The content of the log delivery configuration. The value is a JSON string that contains multiple parameters.
   * 
   * >  This parameter is the same as the **DeliveryDetail** parameter of the **CreateLogDeliveryConfig** operation. For more information, see **Parameter description for log delivery configuration** of the [CreateLogDeliveryConfig](~~CreateLogDeliveryConfig~~) operation.
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
   * *   **syslog**: Logs are delivered to a syslog service.
   * *   **kafka**: Logs are delivered to a Kafka service.
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
   * The information about the log delivery configuration.
   */
  deliveryConfig?: DescribeLogDeliveryConfigResponseBodyDeliveryConfig;
  /**
   * @remarks
   * The request ID.
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

