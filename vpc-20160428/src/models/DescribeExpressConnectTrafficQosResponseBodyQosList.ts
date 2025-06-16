// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeExpressConnectTrafficQosResponseBodyQosListAssociatedInstanceList } from "./DescribeExpressConnectTrafficQosResponseBodyQosListAssociatedInstanceList";
import { DescribeExpressConnectTrafficQosResponseBodyQosListQueueList } from "./DescribeExpressConnectTrafficQosResponseBodyQosListQueueList";
import { DescribeExpressConnectTrafficQosResponseBodyQosListTags } from "./DescribeExpressConnectTrafficQosResponseBodyQosListTags";


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

