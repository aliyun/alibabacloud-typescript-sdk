// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EventSourceParameters } from "./EventSourceParameters";


export class EventSourceConfig extends $dara.Model {
  /**
   * @remarks
   * The event source. Custom event sources include Message Service (MNS), ApsaraMQ for RocketMQ, ApsaraMQ for RabbitMQ, ApsaraMQ for Kafka, ApsaraMQ for MQTT, and Data Transmission Service (DTS).
   */
  eventSourceParameters?: EventSourceParameters;
  /**
   * @remarks
   * The event source type. Valid values:
   * 
   * *   **Default**: Alibaba Cloud EventBridge sources
   * *   **MNS**: Message Service (MNS)
   * *   **RocketMQ**: ApsaraMQ for RocketMQ
   * *   **RabbitMQ**: ApsaraMQ for RabbitMQ
   * *   **Kafka**: ApsaraMQ for Kafka
   * *   **MQTT**: ApsaraMQ for MQTT
   * *   **DTS**: DTS
   * 
   * >  This parameter cannot be updated. If you specify this parameter when you update the configurations, it does not take effect.
   * 
   * @example
   * MNS
   */
  eventSourceType?: string;
  static names(): { [key: string]: string } {
    return {
      eventSourceParameters: 'eventSourceParameters',
      eventSourceType: 'eventSourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventSourceParameters: EventSourceParameters,
      eventSourceType: 'string',
    };
  }

  validate() {
    if(this.eventSourceParameters && typeof (this.eventSourceParameters as any).validate === 'function') {
      (this.eventSourceParameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

