// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSqlLogStatisticResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The total cold storage data. Unit: bytes.
   * 
   * @example
   * 8585901
   */
  coldSqlSize?: number;
  /**
   * @remarks
   * The free cold storage data. Unit: bytes.
   * 
   * @example
   * 5041450
   */
  freeColdSqlSize?: number;
  /**
   * @remarks
   * The free hot storage data. Unit: bytes.
   * 
   * @example
   * 297245
   */
  freeHotSqlSize?: number;
  /**
   * @remarks
   * The total hot storage data. Unit: bytes.
   * 
   * @example
   * 1118042
   */
  hotSqlSize?: number;
  /**
   * @remarks
   * The amount of data imported in the last day. Unit: bytes.
   * 
   * @example
   * 297245
   */
  importSqlSize?: number;
  /**
   * @remarks
   * The timestamp in UNIX timestamp format. Unit: milliseconds.
   * 
   * @example
   * 1712568564928
   */
  timestamp?: number;
  /**
   * @remarks
   * The total storage data (cold data + hot data).
   * 
   * @example
   * 9703943
   */
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
   * The returned status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeSqlLogStatisticResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * > If the request is successful, **Successful** is returned. If the request fails, an error message such as an error code is returned.
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
   * Indicates whether the request is successful. Valid values:
   * * true: The request is successful.
   * * false: The request fails.
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

