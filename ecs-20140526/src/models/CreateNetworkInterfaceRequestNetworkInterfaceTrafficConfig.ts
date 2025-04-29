// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNetworkInterfaceRequestNetworkInterfaceTrafficConfig extends $dara.Model {
  /**
   * @remarks
   * The communication mode of the ENI.
   * 
   * @example
   * HighPerformance
   */
  networkInterfaceTrafficMode?: string;
  /**
   * @remarks
   * The number of queues supported by the ENI.
   * 
   * @example
   * 8
   */
  queueNumber?: number;
  /**
   * @remarks
   * The number of QPs supported by the ERI.
   * 
   * @example
   * 8
   */
  queuePairNumber?: number;
  /**
   * @remarks
   * The Rx queue depth of the ENI.
   * 
   * >  This parameter is in invitational preview and is not publicly available. To use this parameter, [submit a ticket](https://smartservice.console.aliyun.com/service/create-ticket-intl).
   * 
   * When you specify this parameter, take note of the following items:
   * 
   * *   This parameter is applicable only to 7th-generation or later ECS instance types.
   * *   This parameter is applicable to Linux images.
   * *   A larger Rx queue depth yields higher inbound throughput and reduces packet loss rates but consumes more memory.
   * 
   * @example
   * 8192
   */
  rxQueueSize?: number;
  /**
   * @remarks
   * The Tx queue depth of the ENI.
   * 
   * >  This parameter is in invitational preview and is not publicly available. To use this parameter, [submit a ticket](https://smartservice.console.aliyun.com/service/create-ticket-intl).
   * 
   * When you specify this parameter, take note of the following items:
   * 
   * *   This parameter is applicable only to 7th-generation or later ECS instance types.
   * *   This parameter is applicable to Linux images.
   * *   A larger Tx queue depth yields higher outbound throughput and reduces packet loss rates but consumes more memory.
   * 
   * @example
   * 8192
   */
  txQueueSize?: number;
  static names(): { [key: string]: string } {
    return {
      networkInterfaceTrafficMode: 'NetworkInterfaceTrafficMode',
      queueNumber: 'QueueNumber',
      queuePairNumber: 'QueuePairNumber',
      rxQueueSize: 'RxQueueSize',
      txQueueSize: 'TxQueueSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkInterfaceTrafficMode: 'string',
      queueNumber: 'number',
      queuePairNumber: 'number',
      rxQueueSize: 'number',
      txQueueSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

