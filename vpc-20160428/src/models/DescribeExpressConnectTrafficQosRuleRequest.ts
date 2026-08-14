// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExpressConnectTrafficQosRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * Generate a parameter value from your client to ensure uniqueness across different requests. ClientToken supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may differ for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The QoS policy ID returned by the CreateExpressConnectTrafficQos operation.
   * 
   * > This parameter is required. If you do not specify this parameter, the service returns IllegalParam.QosId (400).
   * 
   * @example
   * qos-2giu0a6vd5x0mv****
   */
  qosId?: string;
  /**
   * @remarks
   * The QoS queue ID returned by the CreateExpressConnectTrafficQosQueue operation.
   * 
   * > This parameter is required. If you do not specify this parameter, the service returns IllegalParam.QueueId (400).
   * 
   * @example
   * qos-queue-9nyx2u7n71s2rc****
   */
  queueId?: string;
  /**
   * @remarks
   * The region ID of the QoS policy.
   * 
   * You can call [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) to query the region ID.
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
   * The list of QoS rule IDs.
   */
  ruleIdList?: string[];
  /**
   * @remarks
   * The list of QoS rule names.
   */
  ruleNameList?: string[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      qosId: 'QosId',
      queueId: 'QueueId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      ruleIdList: 'RuleIdList',
      ruleNameList: 'RuleNameList',
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
      ruleIdList: { 'type': 'array', 'itemType': 'string' },
      ruleNameList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ruleIdList)) {
      $dara.Model.validateArray(this.ruleIdList);
    }
    if(Array.isArray(this.ruleNameList)) {
      $dara.Model.validateArray(this.ruleNameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

