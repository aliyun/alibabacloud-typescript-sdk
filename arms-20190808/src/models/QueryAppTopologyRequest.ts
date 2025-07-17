// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAppTopologyRequest extends $dara.Model {
  /**
   * @remarks
   * The application type
   * 
   * @example
   * TRACE
   */
  appType?: string;
  /**
   * @remarks
   * The database domain name.
   * 
   * @example
   * rm-xxx.mysql.rds.aliyuncs.com:3306
   */
  db?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * orders
   */
  dbName?: string;
  /**
   * @remarks
   * The end of the time range to query. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1671952708499
   */
  endTime?: number;
  /**
   * @remarks
   * The filter conditions.
   */
  filters?: { [key: string]: string };
  /**
   * @remarks
   * The ID of the application.
   * 
   * Log on to the **ARMS console**. In the left-side navigation pane, choose **Browser Monitoring** > **Browser Monitoring**. On the Browser Monitoring page, click the name of an application. The URL in the address bar contains the process ID (PID) of the application. The PID is indicated in the pid=xxx format. The PID is usually percent encoded as xxx%40xxx. You must modify this value to remove the percent encoding. For example, if the PID in the URL is eb4zdose6v%409781be0f44d\\*\\*\\*\\*, you must replace %40 with an at sign (@) to obtain eb4zdose6v@9781be0f44d\\*\\*\\*\\*.
   * 
   * @example
   * atc889zkcf@d8deedfa9bf****
   */
  pid?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * RPC interface name.
   * 
   * @example
   * /eventCenter
   */
  rpc?: string;
  /**
   * @remarks
   * The start of the time range to query. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1595568910000
   */
  startTime?: number;
  /**
   * @remarks
   * The type kind of topology.
   * 
   * This parameter is required.
   * 
   * @example
   * apm_apps_v2
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      db: 'Db',
      dbName: 'DbName',
      endTime: 'EndTime',
      filters: 'Filters',
      pid: 'Pid',
      regionId: 'RegionId',
      rpc: 'Rpc',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      db: 'string',
      dbName: 'string',
      endTime: 'number',
      filters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      pid: 'string',
      regionId: 'string',
      rpc: 'string',
      startTime: 'number',
      type: 'string',
    };
  }

  validate() {
    if(this.filters) {
      $dara.Model.validateMap(this.filters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

