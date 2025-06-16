// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExpressConnectTrafficQosResponseBodyQosListQueueList extends $dara.Model {
  /**
   * @remarks
   * The percentage of bandwidth allocated to a QoS queue.
   * 
   * - If QueueType is set to **Medium**, this parameter is required. Valid values: **1** to **100**.
   * - If QueueType is set to **Default**, a value of - is returned.
   * 
   * @example
   * 100
   */
  bandwidthPercent?: string;
  /**
   * @remarks
   * The ID of the QoS policy.
   * 
   * @example
   * qos-pksbqfmotl5hzqmhf8
   */
  qosId?: string;
  /**
   * @remarks
   * The description of the QoS queue.
   * 
   * The description can be up to **256** characters in length. It cannot start with `http://` or `https://`.
   * 
   * @example
   * qos-queue-test
   */
  queueDescription?: string;
  /**
   * @remarks
   * The ID of the QoS queue.
   * 
   * @example
   * qos-queue-9nyx2u7n71s2rcy4n5
   */
  queueId?: string;
  /**
   * @remarks
   * The name of the QoS queue.
   * 
   * The name can be up to **128** characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * qos-queue-test
   */
  queueName?: string;
  /**
   * @remarks
   * The type of the QoS queue. Valid values:
   * 
   * - **High**: high-priority queue.
   * - **Medium**: standard queue.
   * - **Default**: default queue.
   * 
   * 
   * > You cannot create a default queue.
   * 
   * @example
   * High
   */
  queueType?: string;
  /**
   * @remarks
   * The state of the QoS queue. Valid values:
   * 
   * - **Normal**: The QoS queue is available.
   * - **Configuring**: The QoS queue is being configured.
   * - **Deleting**: The QoS queue is being deleted.
   * 
   * @example
   * Normal
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidthPercent: 'BandwidthPercent',
      qosId: 'QosId',
      queueDescription: 'QueueDescription',
      queueId: 'QueueId',
      queueName: 'QueueName',
      queueType: 'QueueType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthPercent: 'string',
      qosId: 'string',
      queueDescription: 'string',
      queueId: 'string',
      queueName: 'string',
      queueType: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

