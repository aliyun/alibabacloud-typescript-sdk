// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVaultRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the backup vault. The description must be 0 to 255 characters in length.
   * 
   * @example
   * vault description
   */
  description?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm2fa2xeiebyy
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * This parameter is required.
   * 
   * @example
   * v-*********************
   */
  vaultId?: string;
  /**
   * @remarks
   * The name of the backup vault. The name must be 1 to 64 characters in length.
   * 
   * @example
   * vaultname
   */
  vaultName?: string;
  /**
   * @remarks
   * Specifies whether to enable the immutable backup feature for storage vaults. After the immutable backup feature is enabled, backup vaults and all backup data cannot be deleted until the retention period expires. The immutable backup feature cannot be disabled after it is enabled. Only standard backup vaults and archive vaults support the immutable backup feature.
   * 
   * @example
   * true
   */
  wormEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      resourceGroupId: 'ResourceGroupId',
      vaultId: 'VaultId',
      vaultName: 'VaultName',
      wormEnabled: 'WormEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      resourceGroupId: 'string',
      vaultId: 'string',
      vaultName: 'string',
      wormEnabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

