// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyResourceLogDeliveryStatusResponseBody extends $dara.Model {
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
   * The type of log delivery destination for the protected object. Valid values:
   * 
   * - **syslog**: logs are delivered to a syslog server.
   * 
   * - **kafka**: logs are delivered to a Kafka cluster.
   * 
   * @example
   * sls
   */
  deliveryType?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D7861F61-5B61-46CE-A47C-6B19******
   */
  requestId?: string;
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
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryName: 'string',
      deliveryType: 'string',
      requestId: 'string',
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

