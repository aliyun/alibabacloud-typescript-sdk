// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletionProtectionRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the instance for which you want to set deletion protection.
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
   * - **true**: Enabled.
   * 
   * - **false**: Disabled.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  protectionEnable?: boolean;
  /**
   * @remarks
   * The region ID of the instance for which you want to set deletion protection. You can call [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) to query the most recent region list.
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
   * The type of instance for which you want to set deletion protection. Valid values:
   * 
   * - **EIP**: elastic IP address.
   * 
   * - **CBWP**: Internet Shared Bandwidth.
   * 
   * - **NATGW**: NAT gateway.
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

