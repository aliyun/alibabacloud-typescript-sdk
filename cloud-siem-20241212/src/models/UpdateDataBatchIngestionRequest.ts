// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataBatchIngestionRequest extends $dara.Model {
  /**
   * @example
   * enabled。
   */
  autoScanNew?: string;
  /**
   * @example
   * full。
   */
  dataBatchIngestionMode?: string;
  dataIngestionIds?: string[];
  /**
   * @example
   * true。
   */
  dataSourceRecognizeEnabled?: boolean;
  /**
   * @example
   * zh。
   */
  lang?: string;
  logUserIds?: number[];
  /**
   * @example
   * cn-hangzhou。
   */
  regionId?: string;
  /**
   * @example
   * 173326*******。
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

