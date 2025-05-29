// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstancePerformanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * gp-bp12ga6v69h86****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The end time of the query.
   * 
   * @example
   * 2022-07-09T03:47Z
   */
  endTime?: string;
  /**
   * @remarks
   * The database engine of the instance.
   * 
   * @example
   * gpdb
   */
  engine?: string;
  /**
   * @remarks
   * The queried performance metrics.
   */
  performanceKeys?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5E85244A-AB47-46A3-A3AD-5F307DCB407E
   */
  requestId?: string;
  /**
   * @remarks
   * The start time of the query.
   * 
   * @example
   * 2022-07-08T03:47Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      endTime: 'EndTime',
      engine: 'Engine',
      performanceKeys: 'PerformanceKeys',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      endTime: 'string',
      engine: 'string',
      performanceKeys: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.performanceKeys)) {
      $dara.Model.validateArray(this.performanceKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

