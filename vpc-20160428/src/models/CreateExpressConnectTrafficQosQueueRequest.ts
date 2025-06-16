// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateExpressConnectTrafficQosQueueRequest extends $dara.Model {
  /**
   * @remarks
   * The percentage of bandwidth allocated to the QoS queue.
   * 
   * *   If QueueType is set to **Medium**, this parameter is required. Valid values: 1 to 100.
   * *   If QueueType is set to **Default**, a value of - is returned.
   * 
   * @example
   * 100
   */
  bandwidthPercent?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must make sure that it is unique among all requests. ClientToken can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, **ClientToken** is set to the value of **RequestId**. The value of **RequestId** for each API request may be different.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the QoS policy.
   * 
   * This parameter is required.
   * 
   * @example
   * qos-2giu0a6vd5x0mv4700
   */
  qosId?: string;
  /**
   * @remarks
   * The description of the QoS queue.
   * 
   * It must be 0 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * qos-queue-test
   */
  queueDescription?: string;
  /**
   * @remarks
   * The name of the QoS queue.
   * 
   * It must be 0 to 128 characters in length and cannot start with `http://` or `https://`.
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
   * *   **Default**: default queue.
   * 
   * > You cannot create a QoS queue of the default priority.
   * 
   * This parameter is required.
   * 
   * @example
   * High
   */
  queueType?: string;
  /**
   * @remarks
   * The region ID of the QoS policy.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidthPercent: 'BandwidthPercent',
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      qosId: 'QosId',
      queueDescription: 'QueueDescription',
      queueName: 'QueueName',
      queueType: 'QueueType',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthPercent: 'string',
      clientToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      qosId: 'string',
      queueDescription: 'string',
      queueName: 'string',
      queueType: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

