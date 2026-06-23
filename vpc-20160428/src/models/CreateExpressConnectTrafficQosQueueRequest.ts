// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateExpressConnectTrafficQosQueueRequest extends $dara.Model {
  /**
   * @remarks
   * The bandwidth percentage of the QoS queue.
   * 
   * * When the QoS queue type is **Medium**, this parameter is required. Valid values: 1 to 100.
   * * When the QoS queue type is **Default**, this parameter is set to "-".
   * 
   * @example
   * 100
   */
  bandwidthPercent?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
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
   * qos-2giu0a6vd5x0mv****
   */
  qosId?: string;
  /**
   * @remarks
   * The description of the QoS queue.
   * 
   * The description must be 0 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * qos-queue-test
   */
  queueDescription?: string;
  /**
   * @remarks
   * The name of the QoS queue.
   * 
   * The name must be 0 to 128 characters in length and cannot start with `http://` or `https://`.
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
   * 
   * - **Medium**: lower-priority queue.
   * 
   * - **Default**: default priority queue.
   * 
   * > The default priority queue cannot be created.
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
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query region IDs.
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

