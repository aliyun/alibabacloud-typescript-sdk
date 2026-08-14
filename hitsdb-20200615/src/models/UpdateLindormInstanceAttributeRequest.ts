// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLindormInstanceAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable deletion protection. Valid values:
   * 
   * - **true**: Enabled.
   * 
   * - **false**: Disabled.
   * 
   * @example
   * true
   */
  deletionProtection?: boolean;
  dispositionType?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * lindorm-test
   */
  instanceAlias?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ld-bp1z3506imz2f****
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @example
   * 2026-10-01
   */
  plannedCompletionDate?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      deletionProtection: 'DeletionProtection',
      dispositionType: 'DispositionType',
      instanceAlias: 'InstanceAlias',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      plannedCompletionDate: 'PlannedCompletionDate',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletionProtection: 'boolean',
      dispositionType: 'string',
      instanceAlias: 'string',
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      plannedCompletionDate: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

