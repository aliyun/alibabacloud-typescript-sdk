// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBakDataSourceStorageAccessInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ee-d84wwm3cazdbjli1m1*****
   */
  backupSetId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FullBackup
   */
  backupType?: string;
  /**
   * @example
   * dbs
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ds-7iz7uwzgcgumznkd02xn*****
   */
  dataSourceId?: string;
  /**
   * @example
   * 3600
   */
  durationSeconds?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionCode?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      backupSetId: 'BackupSetId',
      backupType: 'BackupType',
      clientToken: 'ClientToken',
      dataSourceId: 'DataSourceId',
      durationSeconds: 'DurationSeconds',
      regionCode: 'RegionCode',
      regionId: 'RegionId',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSetId: 'string',
      backupType: 'string',
      clientToken: 'string',
      dataSourceId: 'string',
      durationSeconds: 'number',
      regionCode: 'string',
      regionId: 'string',
      storageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

