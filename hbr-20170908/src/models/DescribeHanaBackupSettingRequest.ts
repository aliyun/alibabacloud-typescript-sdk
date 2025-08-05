// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHanaBackupSettingRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the SAP HANA instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cl-00068btz******oku
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * SYSTEMDB
   */
  databaseName?: string;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * @example
   * v-000css******za5uyqr
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      databaseName: 'string',
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

