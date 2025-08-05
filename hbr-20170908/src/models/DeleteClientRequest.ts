// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteClientRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the client.
   * 
   * @example
   * c-000************f3h
   */
  clientId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acf************kwy
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * @example
   * v-000************gs3
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

