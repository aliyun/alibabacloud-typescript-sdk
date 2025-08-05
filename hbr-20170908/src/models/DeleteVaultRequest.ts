// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteVaultRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmoiyerpacj4q
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The token.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a*
   */
  token?: string;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * @example
   * v-*********************
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      token: 'Token',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      token: 'string',
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

