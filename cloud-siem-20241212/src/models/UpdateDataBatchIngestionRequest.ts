// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataBatchIngestionRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically discover new users.
   * 
   * - enabled: Enables the feature.
   * 
   * - disabled: Disables the feature.
   * 
   * @example
   * enabled
   */
  autoScanNew?: string;
  /**
   * @remarks
   * The mode for batch data ingestion. Valid values:
   * 
   * - full
   * 
   * - increment
   * 
   * @example
   * full
   */
  dataBatchIngestionMode?: string;
  /**
   * @remarks
   * The list of ingestion policy IDs.
   */
  dataIngestionIds?: string[];
  /**
   * @remarks
   * Specifies whether to automatically discover new Logstores.
   * 
   * @example
   * true
   */
  dataSourceRecognizeEnabled?: boolean;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The list of user IDs for batch data ingestion.
   */
  logUserIds?: number[];
  /**
   * @remarks
   * The region of the Data Management hub for threat analysis. Select a region for the management hub based on the region of your assets. Valid values:
   * 
   * - cn-hangzhou: Your assets are in the Chinese mainland.
   * 
   * - ap-southeast-1: Your assets are in a region outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of the member whose perspective the administrator wants to switch to.
   * 
   * @example
   * 173326*******
   */
  roleFor?: number;
  static names(): { [key: string]: string } {
    return {
      autoScanNew: 'AutoScanNew',
      dataBatchIngestionMode: 'DataBatchIngestionMode',
      dataIngestionIds: 'DataIngestionIds',
      dataSourceRecognizeEnabled: 'DataSourceRecognizeEnabled',
      lang: 'Lang',
      logUserIds: 'LogUserIds',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoScanNew: 'string',
      dataBatchIngestionMode: 'string',
      dataIngestionIds: { 'type': 'array', 'itemType': 'string' },
      dataSourceRecognizeEnabled: 'boolean',
      lang: 'string',
      logUserIds: { 'type': 'array', 'itemType': 'number' },
      regionId: 'string',
      roleFor: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataIngestionIds)) {
      $dara.Model.validateArray(this.dataIngestionIds);
    }
    if(Array.isArray(this.logUserIds)) {
      $dara.Model.validateArray(this.logUserIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

