// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSqlPatternCompareReportRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of time window 2. Specify the time in UTC in the yyyy-MM-ddTHH:mmZ or yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-09-08T01:00Z
   */
  compareEndTime?: string;
  /**
   * @remarks
   * The start time of time window 2. Specify the time in UTC in the yyyy-MM-ddTHH:mmZ or yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-09-08T00:00Z
   */
  compareStartTime?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * am-2ze1234567890****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end time of time window 1. Specify the time in UTC in the yyyy-MM-ddTHH:mmZ or yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-09-07T01:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The report type. Valid values:
   * 
   * - `NEW`: Patterns that are new in time window 2.
   * - `CHANGED`: Patterns that exist in both time windows and have an increased average value in at least one metric.
   * 
   * This parameter is required.
   * 
   * @example
   * CHANGED
   */
  patternType?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The start time of time window 1. Specify the time in UTC in the yyyy-MM-ddTHH:mmZ or yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-09-07T00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      compareEndTime: 'CompareEndTime',
      compareStartTime: 'CompareStartTime',
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      patternType: 'PatternType',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compareEndTime: 'string',
      compareStartTime: 'string',
      DBClusterId: 'string',
      endTime: 'string',
      patternType: 'string',
      regionId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

