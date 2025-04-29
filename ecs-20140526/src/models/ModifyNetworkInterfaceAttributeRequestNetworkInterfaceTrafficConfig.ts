// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyNetworkInterfaceAttributeRequestNetworkInterfaceTrafficConfig extends $dara.Model {
  /**
   * @remarks
   * The communication mode of the ENI. Valid values:
   * 
   * *   Standard: uses the TCP communication mode.
   * *   HighPerformance: uses the remote direct memory access (RDMA) communication mode with Elastic RDMA Interface (ERI) enabled.
   * 
   * When the ENI is in the InUse state, take note of the following items:
   * 
   * *   The total number of ERIs attached to the instance cannot exceed the ERI quota for the instance type. To query the ERI quota for an instance type, call the DescribeInstanceTypes operation and check the EriQuantity value in the response.
   * 
   * >  This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * HighPerformance
   */
  networkInterfaceTrafficMode?: string;
  /**
   * @remarks
   * The number of queues supported by the ENI. When the ENI is in the InUse state, take note of the following items:
   * 
   * *   The value of this parameter cannot exceed the maximum number of queues allowed per ENI for the instance type.
   * *   The total number of queues for all ENIs on the instance cannot exceed the queue quota for the instance type. To query the maximum number of queues per ENI and the queue quota for an instance type, call the DescribeInstanceTypes operation and check the MaximumQueueNumberPerEnig and TotalEniQueueQuantity values in the response.
   * 
   * >  This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * 8
   */
  queueNumber?: number;
  /**
   * @remarks
   * The number of queues supported by the ERI. When the ERI is in the InUse state, take note of the following items:
   * 
   * *   The value of this parameter cannot exceed the maximum number of queues allowed per ERI for the instance type. To query the maximum number of queues allowed per ERI for an instance type, call the DescribeInstanceTypes operation and check the QueuePairNumber value in the response.
   * 
   * >  This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * 8
   */
  queuePairNumber?: number;
  /**
   * @remarks
   * The receive (Rx) queue depth of the ENI.
   * 
   * Take note of the following items:
   * 
   * *   The Rx queue depth of an ENI must be the same as the transmit (Tx) queue depth of the ENI. Valid values: powers of 2 in the range of 8192 to 16384.
   * *   A larger Rx queue depth yields higher inbound throughput but consumes more memory.
   * 
   * >  This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * 8192
   */
  rxQueueSize?: number;
  /**
   * @remarks
   * The Tx queue depth of the ENI.
   * 
   * Take note of the following items:
   * 
   * *   The Tx queue depth of an ENI must be the same as the Rx queue depth of the ENI. Valid values: powers of 2 in the range of 8192 to 16384.
   * *   A larger Tx queue depth yields higher outbound throughput but consumes more memory.
   * 
   * >  This parameter is in invitational preview and is not publicly available.
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

