// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelBackupJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup job.
   * 
   * This parameter is required.
   * 
   * @example
   * j-******************************
   */
  jobId?: string;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * @example
   * v-*****************************
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
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

