// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveOperationMaintenanceConfigResponseBodyConfig extends $dara.Model {
  /**
   * @remarks
   * The time when the O\\&M task configuration was created. The time is in the *yyyy-mm-dd*T*hh:mm:ss*Z format and is displayed in UTC.
   * 
   * @example
   * 2018-05-30T14:30:00Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The days of the cycle.
   * 
   * - If CycleType is set to Month, this parameter returns the days of the month. Valid values: 1 to 28. Multiple values are separated by commas (,).
   * 
   * - If CycleType is set to Week, this parameter returns the days of the week. Valid values: 1 to 7. Multiple values are separated by commas (,).
   * 
   * @example
   * 1,2,3
   */
  cycleTime?: string;
  /**
   * @remarks
   * The cycle type.
   * 
   * - Month
   * 
   * - Week
   * 
   * @example
   * Month
   */
  cycleType?: string;
  /**
   * @remarks
   * The end time of the O\\&M time window. The time is in the *hh:mm:ss*Z format and is displayed in UTC.
   * 
   * @example
   * 20:00:00Z
   */
  maintainEndTime?: string;
  /**
   * @remarks
   * The start time of the O\\&M time window. The time is in the *hh:mm:ss*Z format and is displayed in UTC.
   * 
   * @example
   * 18:00:00Z
   */
  maintainStartTime?: string;
  /**
   * @remarks
   * The time when the operations and maintenance (O\\&M) task configuration was modified. The time is in the *yyyy-mm-dd*T*hh:mm:ss*Z format and is displayed in UTC.
   * 
   * @example
   * 2024-05-30T14:30:00Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * Indicates whether the configuration is enabled.
   * 
   * - 1: Enabled
   * 
   * - 2: Disabled
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
   * The details of the configuration.
   */
  config?: DescribeActiveOperationMaintenanceConfigResponseBodyConfig;
  /**
   * @remarks
   * Indicates whether a configuration is set.
   * 
   * - 1: A configuration is set.
   * 
   * - 0: No configuration is set.
   * 
   * @example
   * 0
   */
  hasConfig?: number;
  /**
   * @remarks
   * The request ID.
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

