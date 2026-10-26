// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MigrateDBNodesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must ensure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * Instance ID of the instance. You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/26232.html) operation to query instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-t4n3a****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The list of nodes in the cluster.
   */
  DBNodeShrink?: string;
  /**
   * @remarks
   * The time when the migration takes effect. Valid values:
   * * **Immediately**: The migration takes effect immediately. This is the default value.
   * * **MaintainTime**: The migration takes effect during the maintenance window.
   * * **ScheduleTime**: The migration takes effect at a specified time.
   * 
   * > If you set this parameter to **ScheduleTime**, you must also specify the SwitchTime parameter.
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
   * The time when the modification is performed. Perform the modification during off-peak hours. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time must be in UTC.
   * 
   * @example
   * 2022-05-06T09:24:00Z
   */
  switchTime?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
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

