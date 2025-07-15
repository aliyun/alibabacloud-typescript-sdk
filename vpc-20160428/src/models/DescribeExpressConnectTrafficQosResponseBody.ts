// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExpressConnectTrafficQosResponseBodyQosListAssociatedInstanceList extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance to which the QoS policy is associated.
   * 
   * @example
   * pc-bp159zj8zujwy3p07j83e
   */
  instanceId?: string;
  /**
   * @remarks
   * The configuration progress of the instance to which the QoS policy is associated. Valid values: **0** to **100**.
   * 
   * @example
   * 100
   */
  instanceProgressing?: number;
  /**
   * @remarks
   * The state of the instance to which the QoS policy is associated. Valid values:
   * 
   * - **Normal**: The instance is available.
   * - **Configuring**: The instance is being configured.
   * - **Deleting**: The instance is being deleted.
   * 
   * @example
   * Normal
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The type of the instance to which the QoS policy is associated. Only **PHYSICALCONNECTION** is returned.
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

export class DescribeExpressConnectTrafficQosResponseBodyQosListTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
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
   * The information about the instances to which the QoS policy is associated.
   */
  associatedInstanceList?: DescribeExpressConnectTrafficQosResponseBodyQosListAssociatedInstanceList[];
  /**
   * @remarks
   * The configuration progress of the QoS policy. Valid values: **0** to **100**.
   * 
   * @example
   * 100
   */
  progressing?: number;
  /**
   * @remarks
   * The description of the QoS policy.
   * 
   * The description can be up to 256 characters in length. It cannot start with `http://` or `https://`.
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
   * The name can be up to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * qos-test
   */
  qosName?: string;
  /**
   * @remarks
   * The information about the QoS queues.
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
   * The state of the QoS policy. Valid values:
   * 
   * - **Normal**: The QoS policy is available.
   * - **Configuring**: The QoS policy is being configured.
   * 
   *  > If a QoS policy is in the Configuring state, you cannot perform most of the operations to create, update, or delete QoS policies, QoS queues, or QoS rules.
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The tag list.
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
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  count?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: **1 to 100**. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * *   If **NextToken** is empty, no next page exists.
   * *   If a value is returned for **NextToken**, the value can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The information about QoS policies.
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
   * The number of returned entries.
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

