// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchDBInstanceHARequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5xxxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The time when the switching takes effect. Valid values:
   * 
   * *   **Immediate**: The switching immediately takes effect.
   * *   **MaintainTime**: The switching takes effect during the maintenance time.
   * 
   * Default value: **Immediate**.
   * 
   * @example
   * Immediate
   */
  effectiveTime?: string;
  /**
   * @remarks
   * Specifies whether to enable forcible switching. Valid values:
   * 
   * *   **Yes**
   * *   **No**
   * 
   * Default value: **No**.
   * 
   * @example
   * No
   */
  force?: string;
  /**
   * @remarks
   * The secondary instance ID. You can call the DescribeDBInstanceHAConfig operation to query the secondary instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 349054
   */
  nodeId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      effectiveTime: 'EffectiveTime',
      force: 'Force',
      nodeId: 'NodeId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      effectiveTime: 'string',
      force: 'string',
      nodeId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

