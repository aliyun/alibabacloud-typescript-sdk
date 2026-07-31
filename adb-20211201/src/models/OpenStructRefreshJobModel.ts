// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenStructRefreshJobModel extends $dara.Model {
  /**
   * @remarks
   * The end time of the refresh task.
   * 
   * @example
   * 2025-01-15 10:12:00
   */
  endTime?: string;
  /**
   * @remarks
   * The materialized view name.
   * 
   * @example
   * demo_mv
   */
  name?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 2025103010xxxxxxx
   */
  processid?: string;
  /**
   * @remarks
   * The refresh interval.
   * 
   * @example
   * 30s
   */
  refreshInterval?: string;
  /**
   * @remarks
   * The refresh model.
   * 
   * *   FAST
   * *   COMPLETE
   * 
   * @example
   * FAST
   */
  refreshModel?: string;
  /**
   * @remarks
   * The resource group used for the refresh.
   * 
   * @example
   * user_default
   */
  resourceGroup?: string;
  /**
   * @remarks
   * The scheduled start time.
   * 
   * @example
   * 2025-01-15 10:11:00
   */
  scheduledStartTime?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * adb_demo
   */
  schemaName?: string;
  /**
   * @remarks
   * The actual start time.
   * 
   * @example
   * 2025-01-15 10:11:00
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the queried refresh task.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      name: 'Name',
      processid: 'Processid',
      refreshInterval: 'RefreshInterval',
      refreshModel: 'RefreshModel',
      resourceGroup: 'ResourceGroup',
      scheduledStartTime: 'ScheduledStartTime',
      schemaName: 'SchemaName',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      name: 'string',
      processid: 'string',
      refreshInterval: 'string',
      refreshModel: 'string',
      resourceGroup: 'string',
      scheduledStartTime: 'string',
      schemaName: 'string',
      startTime: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

