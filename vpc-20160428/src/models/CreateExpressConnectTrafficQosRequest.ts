// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateExpressConnectTrafficQosRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource. You must specify at least 1 tag key and can specify at most 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 128 characters in length and cannot start with aliyun or acs:. It cannot contain http:// or https://.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. You can specify at most 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot start with aliyun or acs:. It cannot contain http:// or https://.
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

export class CreateExpressConnectTrafficQosRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may differ for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The description of the QoS policy.
   * 
   * The description must be 0 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * qos-test
   */
  qosDescription?: string;
  /**
   * @remarks
   * The name of the QoS policy.
   * 
   * The name must be 0 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * qos-test
   */
  qosName?: string;
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
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmxazfdgdg****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The tags of the resource.
   */
  tags?: CreateExpressConnectTrafficQosRequestTags[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      qosDescription: 'QosDescription',
      qosName: 'QosName',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      qosDescription: 'string',
      qosName: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      tags: { 'type': 'array', 'itemType': CreateExpressConnectTrafficQosRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

