// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloseLogSyncToSLSRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp198m028ih55****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The log type. Valid values:
   * 
   * - **ADBMYSQL_AUDIT_LOG**
   * - **ADBMYSQL_INSERT_LOG**
   * 
   * Default value: `ADBMYSQL_AUDIT_LOG`.
   * 
   * @example
   * ADBMYSQL_AUDIT_LOG
   */
  logType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      logType: 'LogType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      logType: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

