// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveOperationMaintainConfResponseBodyConfig extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-03-18T06:51:11+08:00
   */
  createdTime?: string;
  /**
   * @remarks
   * The cycle time.
   * 
   * - If CycleType is set to Month, the return value is a number from 1 to 28, which indicates the day of the month. Multiple values are separated by commas (,).
   * - If CycleType is set to Week, the return value is a number from 1 to 7, which indicates the day of the week. Multiple values are separated by commas (,).
   * 
   * @example
   * 1
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
   * Week
   */
  cycleType?: string;
  /**
   * @remarks
   * The end time of the maintenance window.
   * 
   * @example
   * 22:00Z
   */
  maintainEndTime?: string;
  /**
   * @remarks
   * The start time of the maintenance window.
   * 
   * @example
   * 18:00Z
   */
  maintainStartTime?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2025-06-27T07:12:53Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * Indicates whether the configuration takes effect. Valid values:
   * 
   * - 1: Yes.
   * - 2: No.
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

export class DescribeActiveOperationMaintainConfResponseBody extends $dara.Model {
  /**
   * @remarks
   * The proactive maintenance configuration.
   */
  config?: DescribeActiveOperationMaintainConfResponseBodyConfig;
  /**
   * @remarks
   * Indicates whether proactive maintenance is configured. Valid values:
   * 
   * - 1: Configured.
   * - 0: Not configured.
   * 
   * @example
   * 1
   */
  hasConfig?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9A23C87D-87DF-4DA0-A50E-CB13F4F7923D
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

