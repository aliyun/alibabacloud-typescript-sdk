// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyEipForwardModeRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **RequestId** may be different for each request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-0016e04115b
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the EIP whose attributes you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * eip-j5ebhbw3br92fy****
   */
  instanceId?: string;
  /**
   * @remarks
   * The association mode. Valid values:
   * 
   * *   **NAT** (default): the standard NAT mode.
   * *   **MULTI_BINDED**: the multi-EIP-to-ENI mode.
   * *   **BINDED**: the cut-through mode.
   * 
   * >  This parameter is required only if **InstanceType** is set to **NetworkInterface**.
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
   * The ID of the region to which the EIP belongs. You can call the DescribeRegions operation to query the most recent region list.
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

