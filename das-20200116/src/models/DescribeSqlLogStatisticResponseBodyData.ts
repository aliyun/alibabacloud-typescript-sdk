// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSqlLogStatisticResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The size of the SQL Explorer and Audit data that is stored in cold storage. Unit: bytes.
   * 
   * @example
   * 8585901
   */
  coldSqlSize?: number;
  /**
   * @remarks
   * The free quota for cold data storage. Unit: bytes.
   * 
   * @example
   * 5041450
   */
  freeColdSqlSize?: number;
  /**
   * @remarks
   * The free quota for hot data storage. Unit: bytes.
   * 
   * @example
   * 297245
   */
  freeHotSqlSize?: number;
  /**
   * @remarks
   * The size of the SQL Explorer and Audit data that is stored in hot storage. Unit: bytes.
   * 
   * @example
   * 1118042
   */
  hotSqlSize?: number;
  /**
   * @remarks
   * The size of the SQL Explorer and Audit data that was generated in the most recent day. Unit: bytes.
   * 
   * @example
   * 23
   */
  importSqlSize?: number;
  /**
   * @remarks
   * The timestamp. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1712568564928
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      coldSqlSize: 'ColdSqlSize',
      freeColdSqlSize: 'FreeColdSqlSize',
      freeHotSqlSize: 'FreeHotSqlSize',
      hotSqlSize: 'HotSqlSize',
      importSqlSize: 'ImportSqlSize',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coldSqlSize: 'number',
      freeColdSqlSize: 'number',
      freeHotSqlSize: 'number',
      hotSqlSize: 'number',
      importSqlSize: 'number',
      timestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

