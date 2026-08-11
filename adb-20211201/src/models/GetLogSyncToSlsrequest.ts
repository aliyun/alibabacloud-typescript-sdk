// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLogSyncToSLSRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * am-uf6g8w25jacm7****
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

