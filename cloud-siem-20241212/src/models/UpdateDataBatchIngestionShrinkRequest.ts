// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataBatchIngestionShrinkRequest extends $dara.Model {
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
  dataIngestionIdsShrink?: string;
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
  logUserIdsShrink?: string;
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
      dataIngestionIdsShrink: 'DataIngestionIds',
      dataSourceRecognizeEnabled: 'DataSourceRecognizeEnabled',
      lang: 'Lang',
      logUserIdsShrink: 'LogUserIds',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoScanNew: 'string',
      dataBatchIngestionMode: 'string',
      dataIngestionIdsShrink: 'string',
      dataSourceRecognizeEnabled: 'boolean',
      lang: 'string',
      logUserIdsShrink: 'string',
      regionId: 'string',
      roleFor: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

