// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBlockingDetailListRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database. Separate multiple database names with commas (,).
   * 
   * @example
   * school1,school2
   */
  dbNameList?: string;
  /**
   * @remarks
   * The end of the time range to query. Set this parameter to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1682490480548
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the database instance.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-t4nfalp2ap421312z
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number. The value must be an integer that is greater than 0. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: string;
  /**
   * @remarks
   * The number of entries per page. The value must be an integer that is greater than 0. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The hash value of the SQL statement. The hash values of SQL statements of the same type are the same.
   * 
   * @example
   * DC08B955CAD25E7B
   */
  queryHash?: string;
  /**
   * @remarks
   * The beginning of the time range to query. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1679429913757
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dbNameList: 'DbNameList',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      queryHash: 'QueryHash',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbNameList: 'string',
      endTime: 'string',
      instanceId: 'string',
      pageNo: 'string',
      pageSize: 'string',
      queryHash: 'string',
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

