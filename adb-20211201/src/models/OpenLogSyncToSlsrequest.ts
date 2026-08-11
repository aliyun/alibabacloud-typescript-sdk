// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenLogSyncToSLSRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1ub9grke1****
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
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The Simple Log Service LogStore.
   * 
   * This parameter is required.
   * 
   * @example
   * adbmysql-audit-log
   */
  targetLogStore?: string;
  /**
   * @remarks
   * The Simple Log Service project.
   * 
   * This parameter is required.
   * 
   * @example
   * log-service-****-cn-shenzhen
   */
  targetProject?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      logType: 'LogType',
      regionId: 'RegionId',
      targetLogStore: 'TargetLogStore',
      targetProject: 'TargetProject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      logType: 'string',
      regionId: 'string',
      targetLogStore: 'string',
      targetProject: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

