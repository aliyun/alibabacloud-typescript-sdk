// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveOperationMaintainConfResponseBodyConfig extends $dara.Model {
  /**
   * @remarks
   * The time when the configuration was created.
   * 
   * @example
   * 2023-07-04T19:28:46
   */
  createdTime?: string;
  /**
   * @remarks
   * The day of the cycle.
   * 
   * - If CycleType is set to Month, this parameter returns a number from 1 to 28 that indicates the day of the month. Multiple days are separated by commas (,).
   * 
   * - If CycleType is set to Week, this parameter returns a number from 1 to 7 that indicates the day of the week. Multiple days are separated by commas (,).
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
   * 
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
   * @example
   * 09:00Z
   */
  maintainEndTime?: string;
  /**
   * @remarks
   * The start time of the maintenance window.
   * 
   * @example
   * 8:00Z
   */
  maintainStartTime?: string;
  /**
   * @remarks
   * The time when the configuration was last modified.
   * 
   * @example
   * 2025-04-02T02:10:08Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * Indicates whether the configuration is enabled. Valid values:1: Enabled2: Disabled
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
   * Indicates whether a configuration has been set. Valid values:1: Yes0: NoThe value of this parameter is 0 for the first query.
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

