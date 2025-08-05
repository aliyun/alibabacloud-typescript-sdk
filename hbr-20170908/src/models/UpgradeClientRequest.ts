// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeClientRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Cloud Backup client.
   * 
   * @example
   * c-000boklw******63a9
   */
  clientId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmy6uja5wyc2i
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * @example
   * v-000djw8ci******3ic
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      resourceGroupId: 'ResourceGroupId',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
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

