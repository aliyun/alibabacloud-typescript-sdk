// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDTCSecurityIpHostsForSQLServerRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can call DescribeDBInstances to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call DescribeDBInstanceAttribute to query the region ID.
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
   * The IP addresses of ECS instances and the computer names of the Windows operating systems. Format: `ip,hostname`. Separate multiple instances with semicolons (;).
   * >For more information about how to view the computer name, see [Configure a distributed transaction whitelist](https://help.aliyun.com/document_detail/124321.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.XX.XX,k3ecstest
   */
  securityIpHosts?: string;
  securityToken?: string;
  /**
   * @remarks
   * The name of the whitelist group.
   * 
   * This parameter is required.
   * 
   * @example
   * test1
   */
  whiteListGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityIpHosts: 'SecurityIpHosts',
      securityToken: 'SecurityToken',
      whiteListGroupName: 'WhiteListGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityIpHosts: 'string',
      securityToken: 'string',
      whiteListGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

