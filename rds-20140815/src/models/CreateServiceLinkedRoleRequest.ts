// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceLinkedRoleRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to query the most recent region list.
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
   * The name of the service-linked role.
   * 
   * *   **AliyunServiceRoleForRdsPgsqlOnEcs**: the service-linked role for ApsaraDB RDS for PostgreSQL.
   * *   **AliyunServiceRoleForRDSProxyOnEcs**: the service-linked role for the database proxy feature of ApsaraDB RDS for PostgreSQL.
   * 
   * This parameter is required.
   * 
   * @example
   * AliyunServiceRoleForRdsPgsqlOnEcs
   */
  serviceLinkedRole?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      serviceLinkedRole: 'ServiceLinkedRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      serviceLinkedRole: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

