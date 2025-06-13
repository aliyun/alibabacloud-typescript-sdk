// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeHALogsResponseBodyHaLogItems } from "./DescribeHalogsResponseBodyHaLogItems";


export class DescribeHALogsResponseBody extends $dara.Model {
  /**
   * @example
   * pc-a*************
   */
  DBInstanceName?: string;
  /**
   * @example
   * polardb_mysql_rw
   */
  DBInstanceType?: string;
  /**
   * @remarks
   * The failover logs.
   */
  haLogItems?: DescribeHALogsResponseBodyHaLogItems[];
  /**
   * @example
   * 1
   */
  haStatus?: number;
  /**
   * @example
   * 10
   */
  itemsNumbers?: number;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @example
   * 6BD9CDE4-5E7B-4BF3-9BB8-83C73E******
   */
  requestId?: string;
  /**
   * @example
   * 160
   */
  totalRecords?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      DBInstanceType: 'DBInstanceType',
      haLogItems: 'HaLogItems',
      haStatus: 'HaStatus',
      itemsNumbers: 'ItemsNumbers',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalRecords: 'TotalRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      DBInstanceType: 'string',
      haLogItems: { 'type': 'array', 'itemType': DescribeHALogsResponseBodyHaLogItems },
      haStatus: 'number',
      itemsNumbers: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalRecords: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.haLogItems)) {
      $dara.Model.validateArray(this.haLogItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

