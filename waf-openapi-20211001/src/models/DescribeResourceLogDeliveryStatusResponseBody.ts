// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourceLogDeliveryStatusResponseBodyLogConfigs extends $dara.Model {
  /**
   * @remarks
   * The name of the log delivery configuration.
   * 
   * @example
   * export-kafka
   */
  deliveryName?: string;
  /**
   * @remarks
   * The type of log delivery for the protected object. Valid values:
   * 
   * - **syslog**: Logs are delivered to a syslog service.
   * 
   * - **kafka**: Logs are delivered to a Kafka service.
   * 
   * @example
   * kafka
   */
  deliveryType?: string;
  /**
   * @remarks
   * The name of the protected object, such as a domain name or Application Load Balancer (ALB) instance.
   * 
   * @example
   * test.waf.com-waf
   */
  resource?: string;
  /**
   * @remarks
   * Indicates whether log delivery is enabled for the protected object. Valid values:
   * 
   * - **true**: Log delivery is enabled.
   * 
   * - **false**: Log delivery is disabled.
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
   * A list of log delivery configurations for the protected objects.
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

