// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteExpressConnectTrafficQosRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The **ClientToken** value can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-00****
   */
  clientToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The QoS policy ID.
   * 
   * This parameter is required.
   * 
   * @example
   * qos-2giu0a6vd5x0mv****
   */
  qosId?: string;
  /**
   * @remarks
   * The QoS queue ID.
   * 
   * This parameter is required.
   * 
   * @example
   * qos-queue-9nyx2u7n71s2rc****
   */
  queueId?: string;
  /**
   * @remarks
   * The region ID of the QoS policy.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The QoS rule ID.
   * 
   * This parameter is required.
   * 
   * @example
   * qos-rule-iugg0l9x27f2no****
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      qosId: 'QosId',
      queueId: 'QueueId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      qosId: 'string',
      queueId: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      ruleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

