// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExpressConnectTrafficQosResponseBodyQosListAssociatedInstanceList extends $dara.Model {
  /**
   * @remarks
   * The ID of the associated instance.
   * 
   * @example
   * pc-bp159zj8zujwy3p07****
   */
  instanceId?: string;
  /**
   * @remarks
   * The configuration progress of the associated instance. Valid values: **0** to **100**.
   * 
   * @example
   * 100
   */
  instanceProgressing?: number;
  /**
   * @remarks
   * The status of the associated instance. Valid values:
   * 
   * - **Normal**: The instance is available.
   * 
   * - **Configuring**: The instance is being configured.
   * 
   * - **Deleting**: The instance is being deleted.
   * 
   * @example
   * Normal
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The type of the associated instance. Valid value: **PHYSICALCONNECTION** (Express Connect circuit).
   * 
   * @example
   * PHYSICALCONNECTION
   */
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceProgressing: 'InstanceProgressing',
      instanceStatus: 'InstanceStatus',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceProgressing: 'number',
      instanceStatus: 'string',
      instanceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressConnectTrafficQosResponseBodyQosListQueueList extends $dara.Model {
  /**
   * @remarks
   * The bandwidth percentage of the QoS queue.
   * 
   * * When the QoS queue type is **Medium**, this parameter is required. Valid values: **1** to **100**.
   * 
   * * When the QoS queue type is **Default**, the value of this parameter is "-".
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
   * qos-pksbqfmotl5hzq****
   */
  qosId?: string;
  /**
   * @remarks
   * The description of the QoS queue.
   * 
   * The description must be **0** to **256** characters in length, and cannot start with `http://` or `https://`.
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
   * qos-queue-9nyx2u7n71s2rc****
   */
  queueId?: string;
  /**
   * @remarks
   * The name of the QoS queue.
   * 
   * The name must be **0** to **128** characters in length, and cannot start with `http://` or `https://`.
   * 
   * @example
   * qos-queue-test
   */
  queueName?: string;
  /**
   * @remarks
   * The type of the QoS queue. Valid values:
   * 
   * - **High**: High-priority queue.
   * 
   * - **Medium**: Medium-priority queue.
   * 
   * - **Default**: Default-priority queue.
   * 
   * > You cannot create a default-priority queue.
   * 
   * @example
   * High
   */
  queueType?: string;
  /**
   * @remarks
   * The status of the QoS queue. Valid values:
   * 
   * - **Normal**: The queue is available.
   * 
   * - **Configuring**: The queue is being configured.
   * 
   * - **Deleting**: The queue is being deleted.
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

export class DescribeExpressConnectTrafficQosResponseBodyQosListTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource.
   * 
   * @example
   * FinanceJoshua
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressConnectTrafficQosResponseBodyQosList extends $dara.Model {
  /**
   * @remarks
   * The list of associated instances.
   */
  associatedInstanceList?: DescribeExpressConnectTrafficQosResponseBodyQosListAssociatedInstanceList[];
  /**
   * @remarks
   * The overall configuration progress of the QoS policy. Valid values: **0** to **100**.
   * 
   * @example
   * 100
   */
  progressing?: number;
  /**
   * @remarks
   * The description of the QoS policy. 
   * 
   * The description must be **0** to **256** characters in length, and cannot start with `http://` or `https://`.
   * 
   * @example
   * qos-test
   */
  qosDescription?: string;
  /**
   * @remarks
   * The ID of the QoS policy.
   * 
   * @example
   * qos-pksbqfmotl5hzq****
   */
  qosId?: string;
  /**
   * @remarks
   * The name of the QoS policy. 
   * 
   * The name must be **0** to **128** characters in length, and cannot start with `http://` or `https://`.
   * 
   * @example
   * qos-test
   */
  qosName?: string;
  /**
   * @remarks
   * The list of QoS queues.
   */
  queueList?: DescribeExpressConnectTrafficQosResponseBodyQosListQueueList[];
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmz7vtyl4f***
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the QoS policy. Valid values:
   * 
   * - **Normal**: The QoS policy is available.
   * 
   * - **Configuring**: The QoS policy is being configured.
   * 
   * > When a QoS policy is in the Configuring state, most creation, update, and deletion operations for QoS policies, QoS queues, and QoS rules are restricted.
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The tags of the resource.
   */
  tags?: DescribeExpressConnectTrafficQosResponseBodyQosListTags[];
  static names(): { [key: string]: string } {
    return {
      associatedInstanceList: 'AssociatedInstanceList',
      progressing: 'Progressing',
      qosDescription: 'QosDescription',
      qosId: 'QosId',
      qosName: 'QosName',
      queueList: 'QueueList',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedInstanceList: { 'type': 'array', 'itemType': DescribeExpressConnectTrafficQosResponseBodyQosListAssociatedInstanceList },
      progressing: 'number',
      qosDescription: 'string',
      qosId: 'string',
      qosName: 'string',
      queueList: { 'type': 'array', 'itemType': DescribeExpressConnectTrafficQosResponseBodyQosListQueueList },
      resourceGroupId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': DescribeExpressConnectTrafficQosResponseBodyQosListTags },
    };
  }

  validate() {
    if(Array.isArray(this.associatedInstanceList)) {
      $dara.Model.validateArray(this.associatedInstanceList);
    }
    if(Array.isArray(this.queueList)) {
      $dara.Model.validateArray(this.queueList);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressConnectTrafficQosResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries on the current page.
   * 
   * @example
   * 1
   */
  count?: string;
  /**
   * @remarks
   * The number of entries to return per page. Valid values: **1** to **100**. Default value: **20**.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query. Valid values:
   * 
   * - Leave empty for the first query or when no next query is required.
   * 
   * - If a next query is required, set the value to the **NextToken** value returned by the previous API call.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of QoS policies.
   */
  qosList?: DescribeExpressConnectTrafficQosResponseBodyQosList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4CF20CC7-D1FC-425B-A15B-DF7C8E2131A7
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      qosList: 'QosList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'string',
      maxResults: 'number',
      nextToken: 'string',
      qosList: { 'type': 'array', 'itemType': DescribeExpressConnectTrafficQosResponseBodyQosList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.qosList)) {
      $dara.Model.validateArray(this.qosList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

