// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMetaTableChangeLogRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the change. Valid values: CREATE_TABLE, ALTER_TABLE, DROP_TABLE, ADD_PARTITION, and DROP_PARTITION.
   * 
   * @example
   * ALTER_TABLE
   */
  changeType?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the yyyy-MM-dd HH:mm:ss format.
   * 
   * *   By default, the system uses the current time as the value of this parameter if the time that you specify is invalid.
   * *   If both the values of the StartDate and EndDate parameters are invalid, the system automatically queries the change logs that are generated within the last 30 days.
   * 
   * @example
   * 2020-06-02 00:00:00
   */
  endDate?: string;
  /**
   * @remarks
   * The entity on which the change is made. Valid values: TABLE and PARTITION.
   * 
   * @example
   * TABLE
   */
  objectType?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the yyyy-MM-dd HH:mm:ss format.
   * 
   * *   By default, the system uses the current time as the value of this parameter if the time that you specify is invalid.
   * *   If both the values of the StartDate and EndDate parameters are invalid, the system automatically queries the change logs that are generated within the last 30 days.
   * 
   * @example
   * 2020-06-01 00:00:00
   */
  startDate?: string;
  /**
   * @remarks
   * The GUID of the table. Specify the GUID in the odps.projectName.tableName format. You can call the [GetMetaDBTableList](https://help.aliyun.com/document_detail/2780086.html) operation to query the GUID.
   * 
   * > To query the change logs of a MaxCompute table, you must call the [GetMetaTableChangeLog](https://help.aliyun.com/document_detail/2780094.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * odps.engine_name.table_name
   */
  tableGuid?: string;
  static names(): { [key: string]: string } {
    return {
      changeType: 'ChangeType',
      endDate: 'EndDate',
      objectType: 'ObjectType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      tableGuid: 'TableGuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeType: 'string',
      endDate: 'string',
      objectType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startDate: 'string',
      tableGuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

