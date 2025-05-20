// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceMissingIndexListRequest extends $dara.Model {
  /**
   * @remarks
   * The query condition based on the average cost savings.
   * 
   * @example
   * <=|8
   */
  avgTotalUserCost?: string;
  /**
   * @remarks
   * The query condition based on the performance improvement.
   * 
   * @example
   * >|10000
   */
  avgUserImpact?: string;
  /**
   * @remarks
   * The end time of the last seek.
   * 
   * @example
   * 1681869544000
   */
  endTime?: string;
  /**
   * @remarks
   * The query condition based on the number of indexes.
   * 
   * @example
   * >=|8
   */
  indexCount?: string;
  /**
   * @remarks
   * The database instance ID.
   * 
   * >  Only ApsaraDB RDS for SQL Server instances are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-************
   */
  instanceId?: string;
  /**
   * @remarks
   * The object name.
   * 
   * @example
   * bas_customer
   */
  objectName?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The query condition based on the total number of pages.
   * 
   * @example
   * >=|100
   */
  reservedPages?: string;
  /**
   * @remarks
   * The query condition based on the table size.
   * 
   * @example
   * >=|100
   */
  reservedSize?: string;
  /**
   * @remarks
   * The query condition based on the number of table rows.
   * 
   * @example
   * >=|100000
   */
  rowCount?: string;
  /**
   * @remarks
   * The start time of the last seek.
   * 
   * @example
   * 1679414400000
   */
  startTime?: string;
  /**
   * @remarks
   * The query condition based on the number of compilations.
   * 
   * @example
   * >=|10000
   */
  uniqueCompiles?: string;
  /**
   * @remarks
   * The query condition based on the number of scans.
   * 
   * @example
   * >=|10000
   */
  userScans?: string;
  /**
   * @remarks
   * The query condition based on the number of seeks.
   * 
   * @example
   * >=|1000
   */
  userSeeks?: string;
  static names(): { [key: string]: string } {
    return {
      avgTotalUserCost: 'AvgTotalUserCost',
      avgUserImpact: 'AvgUserImpact',
      endTime: 'EndTime',
      indexCount: 'IndexCount',
      instanceId: 'InstanceId',
      objectName: 'ObjectName',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      reservedPages: 'ReservedPages',
      reservedSize: 'ReservedSize',
      rowCount: 'RowCount',
      startTime: 'StartTime',
      uniqueCompiles: 'UniqueCompiles',
      userScans: 'UserScans',
      userSeeks: 'UserSeeks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgTotalUserCost: 'string',
      avgUserImpact: 'string',
      endTime: 'string',
      indexCount: 'string',
      instanceId: 'string',
      objectName: 'string',
      pageNo: 'string',
      pageSize: 'string',
      reservedPages: 'string',
      reservedSize: 'string',
      rowCount: 'string',
      startTime: 'string',
      uniqueCompiles: 'string',
      userScans: 'string',
      userSeeks: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

