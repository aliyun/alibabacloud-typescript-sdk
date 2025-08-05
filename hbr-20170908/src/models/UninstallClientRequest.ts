// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UninstallClientRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the HBR client.
   * 
   * This parameter is required.
   * 
   * @example
   * c-000iuqo******zi3rn
   */
  clientId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm3erpwweavki
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * @example
   * v-0008n2q******ax3
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

