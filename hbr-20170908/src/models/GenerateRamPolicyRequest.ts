// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateRamPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The type of policy that you want to generate. Valid values:
   * 
   * *   BACKUP: the permission to back up data to a backup vault
   * *   RESTORE: the permission to restore data from a backup vault
   * 
   * This parameter is required.
   * 
   * @example
   * system
   */
  actionType?: string;
  /**
   * @remarks
   * Specifies whether to generate the policy based on an existing instance-specific rule. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  requireBasePolicy?: boolean;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-*********************
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * This parameter is required.
   * 
   * @example
   * v-0007al3m******7ao
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      requireBasePolicy: 'RequireBasePolicy',
      resourceGroupId: 'ResourceGroupId',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      requireBasePolicy: 'boolean',
      resourceGroupId: 'string',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

