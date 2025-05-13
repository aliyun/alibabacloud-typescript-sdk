// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CapacityPlanRequestDataInfo extends $dara.Model {
  /**
   * @remarks
   * Disk data metric code. Options:
   * 
   * - totalRawData: Raw data information
   * - document: Data document information, estimated document count
   * - dailyIncrement: Daily data growth
   * - dailyIncrementDoc: Daily incremental document count
   * - retentionTime: Data retention period
   * - replica: Replica settings
   * 
   * @example
   * totalRawData
   */
  code?: string;
  /**
   * @remarks
   * Disk usage metric value.
   * 
   * @example
   * 100
   */
  size?: number;
  /**
   * @remarks
   * Total number of data entries.
   * 
   * @example
   * 10000
   */
  totalCount?: number;
  /**
   * @remarks
   * Disk data type. Options:
   * 
   * - hot: Hot data
   * - warm: Cold data
   * 
   * @example
   * hot
   */
  type?: string;
  /**
   * @remarks
   * Data or time unit. Options:
   * 
   * - Data units: MiB, GiB, TB, PB
   * - Time units: DAYS, WEEKS, MONTHS, YEARS
   * 
   * @example
   * MiB
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      size: 'size',
      totalCount: 'totalCount',
      type: 'type',
      unit: 'unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      size: 'number',
      totalCount: 'number',
      type: 'string',
      unit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

