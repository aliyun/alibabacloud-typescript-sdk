// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MigrateDBNodesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies the client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * The instance ID. You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/26232.html) operation to query the IDs of instances.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-t4n3a****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The details of the nodes.
   */
  DBNodeShrink?: string;
  /**
   * @remarks
   * The time when you want the system to start the migration. Valid value:
   * 
   * *   **Immediately**: The system immediately starts the migration. This is the default value.
   * *   **MaintainTime**: The system starts the migration during the specified maintenance window.
   * *   **Specified**: The system starts the migration at the specified point in time.
   * 
   * @example
   * MaintainTime
   */
  effectiveTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies the time when the modification is performed. We recommend that you apply the specification during off-peak hours. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * @example
   * 2022-05-06T09:24:00Z
   */
  switchTime?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      DBNodeShrink: 'DBNode',
      effectiveTime: 'EffectiveTime',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      switchTime: 'SwitchTime',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBInstanceId: 'string',
      DBNodeShrink: 'string',
      effectiveTime: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      switchTime: 'string',
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

