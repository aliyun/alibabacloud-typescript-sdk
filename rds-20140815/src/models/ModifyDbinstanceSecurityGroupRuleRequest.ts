// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceSecurityGroupRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
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
  /**
   * @remarks
   * This parameter is required.
   */
  securityGroupRuleId?: string;
  /**
   * @remarks
   * This parameter is required.
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
      securityGroupRuleId: 'SecurityGroupRuleId',
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
      securityGroupRuleId: 'string',
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

