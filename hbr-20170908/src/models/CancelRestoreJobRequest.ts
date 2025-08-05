// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelRestoreJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the restore job.
   * 
   * This parameter is required.
   * 
   * @example
   * r-*********************
   */
  restoreId?: string;
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
  static names(): { [key: string]: string } {
    return {
      restoreId: 'RestoreId',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      restoreId: 'string',
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

