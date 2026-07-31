// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccountPrivilegesRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database account whose privileges you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * account1
   */
  accountName?: string;
  /**
   * @remarks
   * Filters the results by column name. This parameter is used only when `PrivilegeType` is set to `Column`.
   * 
   * @example
   * col1
   */
  columnPrivilegeObject?: string;
  /**
   * @remarks
   * <props="china">The ID of the Enterprise Edition, Basic Edition, or Lakehouse Edition cluster.
   * <props="intl">The ID of the Lakehouse Edition cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1k5p066e1a****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Filters the results by database name. This parameter is used only when `PrivilegeType` is set to `Database`, `Table`, or `Column`.
   * 
   * @example
   * db1
   */
  databasePrivilegeObject?: string;
  /**
   * @remarks
   * The page number. Pages start at 1. Default value: 1.
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
   * The privilege level to query. To obtain the valid values for this parameter, call the `DescribeEnabledPrivileges` operation.
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
   * Filters the results by table name. You can use this parameter with `DatabasePrivilegeObject` to refine the search. This parameter is used only when `PrivilegeType` is set to `Table` or `Column`.
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

