// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWorkerDetectionResponseBodyDetectionItemsResultsTopAccessTablesSearchResults extends $dara.Model {
  /**
   * @remarks
   * The number of accesses to the table.
   * 
   * @example
   * 345
   */
  accessCount?: number;
  /**
   * @remarks
   * The average amount of time for scanning. Unit: milliseconds.
   * 
   * @example
   * 234
   */
  avgScanCost?: number;
  /**
   * @remarks
   * The average data size for scanning. Unit: bytes.
   * 
   * @example
   * 234
   */
  avgScanSize?: number;
  /**
   * @remarks
   * The maximum amount of time for scanning. Unit: milliseconds.
   * 
   * @example
   * 2345
   */
  maxScanCost?: number;
  /**
   * @remarks
   * The maximum data size for scanning. Unit: bytes.
   * 
   * @example
   * 234
   */
  maxScanSize?: number;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * adb_lake_logs_pgsql
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      accessCount: 'AccessCount',
      avgScanCost: 'AvgScanCost',
      avgScanSize: 'AvgScanSize',
      maxScanCost: 'MaxScanCost',
      maxScanSize: 'MaxScanSize',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessCount: 'number',
      avgScanCost: 'number',
      avgScanSize: 'number',
      maxScanCost: 'number',
      maxScanSize: 'number',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

