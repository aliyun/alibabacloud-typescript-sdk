// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveOperationMaintainConfResponseBodyConfig extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * The time is in the YYYY-MM-DDTHH:mm:ss format.
   * 
   * @example
   * 2023-07-04T19:28:46
   */
  createdTime?: string;
  /**
   * @remarks
   * The cycle time.
   * 
   * - If CycleType is set to Month, a number from 1 to 28 is returned, indicating the day of the month. Multiple values are separated by commas (,).
   * - If CycleType is set to Week, a number from 1 to 7 is returned, indicating the day of the week. Multiple values are separated by commas (,).
   * 
   * @example
   * 1
   */
  cycleTime?: string;
  /**
   * @remarks
   * The cycle type. Valid values:
   * 
   * - Month: monthly
   * - Week: weekly
   * 
   * @example
   * Week
   */
  cycleType?: number;
  /**
   * @remarks
   * The end time of the maintenance window.
   * 
   * The time is in UTC in the HH:mmZ format.
   * 
   * @example
   * 09:00Z
   */
  maintainEndTime?: string;
  /**
   * @remarks
   * The start time of the maintenance window.
   * 
   * The time is in UTC. Example: 8:00Z.
   * 
   * @example
   * 8:00Z
   */
  maintainStartTime?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * The time is in the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2025-04-02T02:10:08Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * Indicates whether the configuration is effective. Valid values: 1 (yes) and 2 (no).
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
      cycleType: 'number',
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

export class DescribeActiveOperationMaintainConfResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configuration information.
   */
  config?: DescribeActiveOperationMaintainConfResponseBodyConfig;
  /**
   * @remarks
   * Indicates whether the configuration has been set. Valid values: 1 (yes) and 0 (no). On the first visit, HasConfig is 0.
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
   * 14109129-EF13-5C83-AD86-7581D9552603
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
      config: DescribeActiveOperationMaintainConfResponseBodyConfig,
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

