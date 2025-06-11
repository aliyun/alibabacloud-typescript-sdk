// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRestorableTenantsResponseBodyTenantsBackupSets extends $dara.Model {
  /**
   * @remarks
   * The ID of the full backup set used for restore.
   * 
   * @example
   * bak-4n****gacpa8
   */
  backupSetId?: string;
  /**
   * @remarks
   * The checkpoint of the backup set.
   * 
   * @example
   * 2024-01-01\\"T\\"12:10:10.000\\"Z\\"
   */
  checkpoint?: string;
  /**
   * @remarks
   * The ID of the backup set.
   * 
   * @example
   * bak-xxxxx
   */
  setId?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * t5********
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      backupSetId: 'BackupSetId',
      checkpoint: 'Checkpoint',
      setId: 'SetId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSetId: 'string',
      checkpoint: 'string',
      setId: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

