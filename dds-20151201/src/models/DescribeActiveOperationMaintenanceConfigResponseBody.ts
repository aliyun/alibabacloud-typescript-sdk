// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveOperationMaintenanceConfigResponseBodyConfig extends $dara.Model {
  /**
   * @remarks
   * The time when the O&M task configuration was created. The time is in the <i>yyyy-mm-dd</i>T<i>hh:mm:ss</i>Z format. The time is displayed in UTC.
   * 
   * @example
   * 2018-05-30T14:30:00Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The cycle time.
   * 
   * - If CycleType is set to Month, the return value is a number from 1 to 28, which indicates the day of the month. Multiple values are separated by commas (,).
   * - If CycleType is set to Week, the return value is a number from 1 to 7, which indicates the day of the week. Multiple values are separated by commas (,).
   * 
   * Value format: This field returns a list of numeric serial numbers separated by commas (,), such as "1,2,3", which indicates the execution days of the O&M cycle. It is not a datetime value and does not involve time formats or time zones.
   * 
   * @example
   * 1,2,3
   */
  cycleTime?: string;
  /**
   * @remarks
   * The cycle type. Valid values:
   * 
   * - Month: Monthly.
   * - Week: Weekly.
   * 
   * @example
   * Month
   */
  cycleType?: string;
  /**
   * @remarks
   * The end time of the O&M time window. The time is in the <i>hh:mm:ss</i>Z format. The time is displayed in UTC.
   * 
   * @example
   * 20:00:00Z
   */
  maintainEndTime?: string;
  /**
   * @remarks
   * The start time of the O&M time window. The time is in the <i>hh:mm:ss</i>Z format. The time is displayed in UTC.
   * 
   * @example
   * 18:00:00Z
   */
  maintainStartTime?: string;
  /**
   * @remarks
   * The time when the O&M task configuration was modified. The time is in the <i>yyyy-mm-dd</i>T<i>hh:mm:ss</i>Z format. The time is displayed in UTC.
   * 
   * @example
   * 2024-05-30T14:30:00Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * Indicates whether the configuration is effective. Valid values:
   * 
   * - 1: Effective.
   * - 2: Invalid.
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
   * Indicates whether the O&M task is configured. Valid values:
   * 
   * - 1: Configured.
   * - 0: Not configured.
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

