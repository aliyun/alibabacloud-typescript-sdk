// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveOperationMaintenanceConfigResponseBodyConfig extends $dara.Model {
  /**
   * @remarks
   * The time when the O\\&M task was created. The time follows the ISO 8601 standard in the *yyyy-mm-dd*T*hh:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2018-05-30T14:30:00Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The interval between two O\\&M tasks.
   * 
   * *   If the CycleType parameter is set to Month, the CycleTime parameter returns a string of numbers ranging from 1 to 28, which indicates the specific days of the month. The numbers are separated with commas (,). The CycleTime parameter returns 0 when the configurations do not take effect.
   * *   If the CycleType parameter is set to Week, the CycleTime parameter returns a string of numbers ranging from 1 to 7, which indicates the specific days of the week. The numbers are separated with commas (,). The CycleTime parameter returns 0 when the configurations do not take effect.
   * 
   * @example
   * 1,2,3
   */
  cycleTime?: string;
  /**
   * @remarks
   * The unit of the O\\&M task cycle. Valid values:
   * 
   * *   Month
   * *   Week
   * 
   * @example
   * Week
   */
  cycleType?: string;
  /**
   * @remarks
   * The end time of the O\\&M window. The time follows the ISO 8601 standard in the *hh:mm:ss* Z format. The time is displayed in UTC.
   * 
   * @example
   * 20:00:00Z
   */
  maintainEndTime?: string;
  /**
   * @remarks
   * The start time of the O\\&M window. The time follows the ISO 8601 standard in the *hh:mm:ss* Z format. The time is displayed in UTC.
   * 
   * @example
   * 18:00:00Z
   */
  maintainStartTime?: string;
  /**
   * @remarks
   * The time when the last O\\&M task configurations are modified. The time follows the ISO 8601 standard in the *yyyy-mm-dd*T*hh:mm:ss*Z format. The time is displayed in Coordinated Universal Time (UTC).
   * 
   * @example
   * 2024-05-30T14:30:00Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * Indicates whether the configurations take effect. Valid values:
   * 
   * *   1: The configurations are in effect.
   * *   2: The configurations are invalid.
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
   * The configuration details of the O\\&M task.
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
   * The request ID.
   * 
   * @example
   * 794120D1-E0CF-4713-BAE4-EBAEA04506AF
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

