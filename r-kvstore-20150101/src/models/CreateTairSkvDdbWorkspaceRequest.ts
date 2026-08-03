// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTairSkvDdbWorkspaceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that the token is unique among different requests. The token is case-sensitive and can contain up to 64 ASCII characters.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz**
   */
  clientToken?: string;
  /**
   * @remarks
   * The instance name. The name must be 2 to 128 characters in length and must start with a letter or a Chinese character. The name cannot contain the following characters: @ / : = " < > { } or spaces.
   * 
   * @example
   * apitest
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance type. Set the value to tair_skv_ddb_ws.
   * 
   * This parameter is required.
   * 
   * @example
   * tair_skv_ddb_ws
   */
  instanceType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The password of the instance. The password must meet the following requirements:
   * * The password is 8 to 32 characters in length.
   * * The password contains at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. Supported special characters are `!@#$%^&*()_+-=`.
   * 
   * @example
   * Pass!123456
   */
  password?: string;
  /**
   * @remarks
   * The service port of the instance. Valid values: 1 to 65535. Default value: 443.
   * 
   * @example
   * 443
   */
  port?: number;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/473763.html) to query available regions. Use this parameter to specify the region in which to create the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-resourcegroupid1
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-bp1e7clcw529l773d**
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1nme44gek34slfc**
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID. You can call [DescribeZones](https://help.aliyun.com/document_detail/473764.html) to query available zones.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-e
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      password: 'Password',
      port: 'Port',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceName: 'string',
      instanceType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      password: 'string',
      port: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

