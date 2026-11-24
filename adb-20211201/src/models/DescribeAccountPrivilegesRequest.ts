// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccountPrivilegesRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database account whose permissions you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * account1
   */
  accountName?: string;
  /**
   * @remarks
   * Filters the results by column name. This parameter is available only when the privilege level is column.
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
   * amv-bp1k5p066e1a****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Filters the results by database name. This parameter is available only when the privilege level is database, table, or column.
   * 
   * @example
   * db1
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
   * The number of entries per page. Default value: 20.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The privilege level to query. This value is returned by the DescribeEnabledPrivileges operation.
   * 
   * @example
   * Global
   */
  privilegeType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Filters the results by table name. You can use this parameter together with the database name for joint filtering. This parameter is available only when the privilege level is table or column.
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

