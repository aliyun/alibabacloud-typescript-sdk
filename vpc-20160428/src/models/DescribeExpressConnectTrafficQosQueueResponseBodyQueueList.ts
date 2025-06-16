// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeExpressConnectTrafficQosQueueResponseBodyQueueListRuleList } from "./DescribeExpressConnectTrafficQosQueueResponseBodyQueueListRuleList";


export class DescribeExpressConnectTrafficQosQueueResponseBodyQueueList extends $dara.Model {
  /**
   * @remarks
   * The percentage of bandwidth allocated to a QoS queue.
   * 
   * *   If QueueType is set to **Medium**, this parameter is returned. Valid values: **1** to **100**.
   * *   If QueueType is set to **Default**, a value of - is returned.
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
   * qos-ncfgzxg40zks5n0qze
   */
  qosId?: string;
  /**
   * @remarks
   * The description of the QoS queue.
   * 
   * The name must be **0** to **256** characters in length and cannot start with `http://` or `https://`.
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
   * The name must be **0** to **128** characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * qos-queue-test
   */
  queueName?: string;
  /**
   * @remarks
   * The priority of the QoS queue. Valid values:
   * 
   * *   **High**
   * *   **Medium**
   * *   **Default**
   * 
   * 
   * 
   * >  You cannot create a QoS queue of the default priority.
   * 
   * @example
   * High
   */
  queueType?: string;
  /**
   * @remarks
   * The information about the QoS rules.
   */
  ruleList?: DescribeExpressConnectTrafficQosQueueResponseBodyQueueListRuleList[];
  /**
   * @remarks
   * The state of the QoS queue. Valid values:
   * 
   * *   **Normal**: The QoS queue is available.
   * *   **Configuring**: The QoS queue is being configured.
   * *   **Deleting**: The QoS queue is being deleted.
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
      ruleList: 'RuleList',
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
      ruleList: { 'type': 'array', 'itemType': DescribeExpressConnectTrafficQosQueueResponseBodyQueueListRuleList },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ruleList)) {
      $dara.Model.validateArray(this.ruleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

