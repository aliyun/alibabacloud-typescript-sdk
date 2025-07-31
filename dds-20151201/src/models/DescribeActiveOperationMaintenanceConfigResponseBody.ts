// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveOperationMaintenanceConfigResponseBodyConfig extends $dara.Model {
  /**
   * @remarks
   * The time when the O\\&M task was created. The timefollows the *yyyy-mm-dd*t*hh:mm:ss*z format. The time is displayed in UTC.
   * 
   * @example
   * 2022-01-20T00:05:54+08:00
   */
  createdTime?: string;
  /**
   * @remarks
   * The start time of the O\\&M period. The time follows the *hh:mm* z format. The time is displayed in UTC.
   * 
   * @example
   * 6
   */
  cycleTime?: string;
  /**
   * @remarks
   * The cyclical type of the O\\&M task.
   * 
   * @example
   * ***
   */
  cycleType?: string;
  /**
   * @remarks
   * The end time of the maintenance window. The time follows the *hh:mm*z format. The time is displayed in UTC.
   * 
   * @example
   * 04:00:00Z
   */
  maintainEndTime?: string;
  /**
   * @remarks
   * The start time of the maintenance window. The time follows the *hh:mm*z format.
   * 
   * @example
   * 18:00:00Z
   */
  maintainStartTime?: string;
  /**
   * @remarks
   * The time when the O\\&M task was modified. The time follows the *yyyy-mm-dd*t*hh:mm:ss*z format. The time is displayed in Coordinated Universal Time (UTC).
   * 
   * @example
   * 2021-07-26T05:50:34.000+00:00
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The state of the O\\&M task. Valid values: **0**: The O\\&M task is in the starting state. **1**: The O\\&M task is in the running state. **2**: The O\\&M task is in the stopped state.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      cycleTime: 'CycleTime',
      cycleType: 'CycleType',
      maintainEndTime: 'MaintainEndTime',
      maintainStartTime: 'MaintainStartTime',
      modifiedTime: 'ModifiedTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      cycleTime: 'string',
      cycleType: 'string',
      maintainEndTime: 'string',
      maintainStartTime: 'string',
      modifiedTime: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveOperationMaintenanceConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The description of the configuration.
   */
  config?: DescribeActiveOperationMaintenanceConfigResponseBodyConfig;
  /**
   * @remarks
   * Indicates whether the O\\&M task is configured. Valid values:
   * 
   * *   1: The O\\&M task is configured.
   * *   0: The O\\&M task is not configured.
   * 
   * @example
   * 0
   */
  hasConfig?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 72651AF9-7897-41A7-8B67-6C15C7F26A0A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      hasConfig: 'HasConfig',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: DescribeActiveOperationMaintenanceConfigResponseBodyConfig,
      hasConfig: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

