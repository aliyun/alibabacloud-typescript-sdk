// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletionProtectionRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must make sure that it is unique among all requests. ClientToken can contain only ASCII characters.
   * 
   * >  If you do not set this parameter, **ClientToken** is set to the value of **RequestId**. The value of **RequestId** may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the instance for which you want to enable deletion protection.
   * 
   * This parameter is required.
   * 
   * @example
   * eip-uf6id7gvguruxe41v****
   */
  instanceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * Specifies whether to enable deletion protection. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  protectionEnable?: boolean;
  /**
   * @remarks
   * The ID of the region where the instance for which you want to enable deletion protection is deployed. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of instance. Valid values:
   * 
   * *   **EIP**: Elastic IP Address (EIP)
   * *   **CBWP**: EIP bandwidth plan
   * *   **NATGW**: NAT gateway
   * 
   * This parameter is required.
   * 
   * @example
   * EIP
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      ownerId: 'OwnerId',
      protectionEnable: 'ProtectionEnable',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      ownerId: 'number',
      protectionEnable: 'boolean',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

