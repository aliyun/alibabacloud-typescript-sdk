// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExpressConnectTrafficQosQueueRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the RequestId of the API request as the ClientToken. The RequestId may differ for each API request.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe63****
   */
  clientToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The QoS policy ID.
   * 
   * @example
   * qos-2giu0a6vd5x0mv****
   */
  qosId?: string;
  /**
   * @remarks
   * The QoS queue IDs.
   */
  queueIdList?: string[];
  /**
   * @remarks
   * The QoS queue names.
   */
  queueNameList?: string[];
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
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      qosId: 'QosId',
      queueIdList: 'QueueIdList',
      queueNameList: 'QueueNameList',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      qosId: 'string',
      queueIdList: { 'type': 'array', 'itemType': 'string' },
      queueNameList: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      resourceOwnerAccount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.queueIdList)) {
      $dara.Model.validateArray(this.queueIdList);
    }
    if(Array.isArray(this.queueNameList)) {
      $dara.Model.validateArray(this.queueNameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

