// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccountPrivilegeObjectsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database account.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  accountName?: string;
  /**
   * @remarks
   * The column name used to filter the results.
   * 
   * @example
   * col1
   */
  columnPrivilegeObject?: string;
  /**
   * @remarks
   * <props="china">The ID of the Enterprise Edition, Basic Edition, or Data Lakehouse Edition cluster.
   * <props="intl">The ID of the Data Lakehouse Edition cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1k3wdmt139****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The database name used to filter the results.
   * 
   * @example
   * database1
   */
  databasePrivilegeObject?: string;
  /**
   * @remarks
   * The page number. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The maximum number of entries per page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The privilege level. Only the Database, Table, and Column levels are supported. The Global level is not supported.
   * 
   * @example
   * Column
   */
  privilegeType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ch-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The table name used to filter the results.
   * 
   * @example
   * table1
   */
  tablePrivilegeObject?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      columnPrivilegeObject: 'ColumnPrivilegeObject',
      DBClusterId: 'DBClusterId',
      databasePrivilegeObject: 'DatabasePrivilegeObject',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      privilegeType: 'PrivilegeType',
      regionId: 'RegionId',
      tablePrivilegeObject: 'TablePrivilegeObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      columnPrivilegeObject: 'string',
      DBClusterId: 'string',
      databasePrivilegeObject: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      privilegeType: 'string',
      regionId: 'string',
      tablePrivilegeObject: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

