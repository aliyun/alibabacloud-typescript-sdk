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
  totalSqlSize?: number;
  static names(): { [key: string]: string } {
    return {
      coldSqlSize: 'ColdSqlSize',
      freeColdSqlSize: 'FreeColdSqlSize',
      freeHotSqlSize: 'FreeHotSqlSize',
      hotSqlSize: 'HotSqlSize',
      importSqlSize: 'ImportSqlSize',
      timestamp: 'Timestamp',
      totalSqlSize: 'TotalSqlSize',
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
      totalSqlSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSqlLogStatisticResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: DescribeSqlLogStatisticResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * >  If the request was successful, **Successful** is returned. If the request failed, an error message is returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B6D17591-B48B-4D31-9CD6-9B9796B2****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeSqlLogStatisticResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

