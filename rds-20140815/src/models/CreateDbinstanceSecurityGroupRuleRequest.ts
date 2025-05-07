// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBInstanceSecurityGroupRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance. You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/2628785.html) operation to query the IDs of instances.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-bp15i4hn07r******
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The description of the security group rule.
   * 
   * @example
   * zht_test
   */
  description?: string;
  /**
   * @remarks
   * The type of the transport layer protocol. Valid values:
   * 
   * *   TCP
   * *   UDP
   * 
   * @example
   * TCP
   */
  ipProtocol?: string;
  ownerAccount?: string;
  ownerId?: string;
  /**
   * @remarks
   * The range of destination ports over which TCP and UDP traffic is allowed in the security group rule.
   * 
   * Valid values: 1 to 65535. Separate the start port number and the end port number with a forward slash (/). Example: 1/200.
   * 
   * This parameter is required.
   * 
   * @example
   * 1/200
   */
  portRange?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The range of source IP addresses. CIDR blocks and IPv4 addresses are supported.
   * 
   * @example
   * 192.XX.XX.100
   */
  sourceCidrIp?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      description: 'Description',
      ipProtocol: 'IpProtocol',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      portRange: 'PortRange',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sourceCidrIp: 'SourceCidrIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      description: 'string',
      ipProtocol: 'string',
      ownerAccount: 'string',
      ownerId: 'string',
      portRange: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sourceCidrIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

