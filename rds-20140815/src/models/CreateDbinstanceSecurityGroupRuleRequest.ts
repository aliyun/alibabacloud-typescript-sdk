// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBInstanceSecurityGroupRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceId?: string;
  description?: string;
  ipProtocol?: string;
  ownerAccount?: string;
  ownerId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  portRange?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
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

