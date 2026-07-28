// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyEipForwardModeRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * Generate a parameter value from your client to ensure uniqueness across different requests. ClientToken supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is different.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-0016e04115b
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the EIP instance to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * eip-j5ebhbw3br92fy****
   */
  instanceId?: string;
  /**
   * @remarks
   * The binding mode. Valid values:
   * 
   * - **NAT** (default): NAT mode (standard mode).
   * 
   * - **MULTI_BINDED**: multi-EIP to ENI mode.
   * 
   * - **BINDED**: EIP to ENI mode.
   * 
   * 
   * > This parameter is required only when **InstanceType** is set to **NetworkInterface**.
   * 
   * This parameter is required.
   * 
   * @example
   * BINDED
   */
  mode?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the EIP. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      mode: 'Mode',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      mode: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

