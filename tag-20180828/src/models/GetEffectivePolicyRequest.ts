// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEffectivePolicyRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. Only `cn-shanghai` is supported.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  tagKeys?: string[];
  /**
   * @remarks
   * The ID of the target object.
   * 
   * > This parameter is optional in Single-Account Mode and required in Multi-Account Mode.
   * 
   * @example
   * 154950938137****
   */
  targetId?: string;
  /**
   * @remarks
   * The type of the target object. Valid values:
   * 
   * - USER: queries the effective policy for the current logon account. This value applies only to Single-Account Mode.
   * 
   * - ROOT: queries the effective policy for the Root Folder in a Resource Directory. This value applies only to Multi-Account Mode.
   * 
   * - FOLDER: queries the effective policy for a Folder in a Resource Directory. This value applies only to Multi-Account Mode.
   * 
   * - ACCOUNT: queries the effective policy for a Member in a Resource Directory. This value applies only to Multi-Account Mode.
   * 
   * > This parameter is optional in Single-Account Mode and required in Multi-Account Mode. The value is case-insensitive.
   * 
   * @example
   * ACCOUNT
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      tagKeys: 'TagKeys',
      targetId: 'TargetId',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      tagKeys: { 'type': 'array', 'itemType': 'string' },
      targetId: 'string',
      targetType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tagKeys)) {
      $dara.Model.validateArray(this.tagKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

