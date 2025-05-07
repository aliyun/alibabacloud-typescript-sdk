// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWarningEventMetricRequest extends $dara.Model {
  /**
   * @remarks
   * The SAE application type. Valid values:
   * 
   * *   **micro_service**
   * *   **web**
   * *   **job**
   * 
   * @example
   * micro_service
   */
  appSource?: string;
  /**
   * @remarks
   * The CPU allocation policy. Valid values:
   * 
   * *   **request**: CPU cores are allocated only when a request is initiated.
   * *   **always**: Fixed CPU cores are always allocated.
   * 
   * @example
   * always
   */
  cpuStrategy?: string;
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * This parameter is required.
   * 
   * @example
   * 1675824035951
   */
  endTime?: number;
  /**
   * @remarks
   * The number of entries to return. Valid values: 0 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * This parameter is required.
   * 
   * @example
   * 1675823135951
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      appSource: 'AppSource',
      cpuStrategy: 'CpuStrategy',
      endTime: 'EndTime',
      limit: 'Limit',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appSource: 'string',
      cpuStrategy: 'string',
      endTime: 'number',
      limit: 'number',
      regionId: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

