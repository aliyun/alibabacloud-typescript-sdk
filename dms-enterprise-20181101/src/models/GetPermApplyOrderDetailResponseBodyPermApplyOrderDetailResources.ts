// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResourcesColumnInfo } from "./GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResourcesColumnInfo";
import { GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResourcesDatabaseInfo } from "./GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResourcesDatabaseInfo";
import { GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResourcesInstanceInfo } from "./GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResourcesInstanceInfo";
import { GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResourcesTableInfo } from "./GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResourcesTableInfo";


export class GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResources extends $dara.Model {
  /**
   * @remarks
   * The information about the column.
   */
  columnInfo?: GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResourcesColumnInfo;
  /**
   * @remarks
   * The information about the database.
   */
  databaseInfo?: GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResourcesDatabaseInfo;
  /**
   * @remarks
   * The information about the instance.
   */
  instanceInfo?: GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResourcesInstanceInfo;
  /**
   * @remarks
   * The information about the table.
   */
  tableInfo?: GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResourcesTableInfo;
  static names(): { [key: string]: string } {
    return {
      columnInfo: 'ColumnInfo',
      databaseInfo: 'DatabaseInfo',
      instanceInfo: 'InstanceInfo',
      tableInfo: 'TableInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnInfo: GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResourcesColumnInfo,
      databaseInfo: GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResourcesDatabaseInfo,
      instanceInfo: GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResourcesInstanceInfo,
      tableInfo: GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResourcesTableInfo,
    };
  }

  validate() {
    if(this.columnInfo && typeof (this.columnInfo as any).validate === 'function') {
      (this.columnInfo as any).validate();
    }
    if(this.databaseInfo && typeof (this.databaseInfo as any).validate === 'function') {
      (this.databaseInfo as any).validate();
    }
    if(this.instanceInfo && typeof (this.instanceInfo as any).validate === 'function') {
      (this.instanceInfo as any).validate();
    }
    if(this.tableInfo && typeof (this.tableInfo as any).validate === 'function') {
      (this.tableInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

