// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopHanaDatabaseAsyncRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the SAP HANA instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cl-000dw******45ijer
   */
  clusterId?: string;
  /**
   * @remarks
   * The database name.
   * 
   * This parameter is required.
   * 
   * @example
   * BWP
   */
  databaseName?: string;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * This parameter is required.
   * 
   * @example
   * v-0006wkn******gzkn
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

