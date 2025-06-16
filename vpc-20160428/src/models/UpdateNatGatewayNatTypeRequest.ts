// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNatGatewayNatTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate a value, and you must make sure that each request has a unique token value. The client token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the value of **RequestId** as the value of **ClientToken**. The **request ID** may be different for each request.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to only precheck this request. Valid values:
   * 
   * **true**: prechecks the request without upgrading the Internet NAT gateway. The system checks whether your AccessKey pair is valid, whether RAM users are granted required permissions, and whether the required parameters are set. If the request fails to pass the precheck, an error code is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * 
   * **false**: sends the API request. This is the default value. After the request passes the precheck, a 2XX HTTP status code is returned and the Internet NAT gateway is upgraded.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the standard NAT gateway to be upgraded.
   * 
   * This parameter is required.
   * 
   * @example
   * ngw-bp1b0lic8uz4r6vf2****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The type of Internet NAT gateway. Set the value to **Enhanced**, which specifies an enhanced Internet NAT gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * Enhanced
   */
  natType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the NAT gateway that you want to upgrade is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The vSwitch to which the enhanced Internet NAT gateway belongs.
   * 
   * >  If you do not set this parameter, the system generates an Internet NAT gateway in a random vSwitch of a virtual private cloud (VPC).
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-bp17nszybg8epodke****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      natGatewayId: 'NatGatewayId',
      natType: 'NatType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      natGatewayId: 'string',
      natType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

