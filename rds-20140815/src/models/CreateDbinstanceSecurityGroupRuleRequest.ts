// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBInstanceSecurityGroupRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can call [DescribeDBInstances](https://help.aliyun.com/document_detail/2628785.html) to obtain the instance ID.
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
   * The transport layer protocol type. Valid values:
   * 
   * - TCP
   * - UDP
   * 
   * @example
   * TCP
   */
  ipProtocol?: string;
  ownerAccount?: string;
  ownerId?: string;
  /**
   * @remarks
   * The range of destination ports for the transport layer protocol (TCP/UDP) that the security group opens.
   * 
   * Valid values: 1 to 65535. Separate the start port and end port with a forward slash (/). Example: 1/200.
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
   * The source IP address range. CIDR format and IPv4 format are supported.
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

