// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMetaTableChangeLogRequest extends $dara.Model {
  /**
   * @remarks
   * The type of change. Valid values: CREATE_TABLE, ALTER_TABLE, DROP_TABLE, ADD_PARTITION, and DROP_PARTITION.
   * 
   * @example
   * ALTER_TABLE
   */
  changeType?: string;
  /**
   * @remarks
   * The end date of the table change. Format: yyyy-MM-dd HH:mm:ss.
   * - If the date validation fails, the system uses the current time as the end date by default.
   * - If both the start date and end date fail validation, the system automatically retrieves the table change records from the last 30 days.
   * 
   * @example
   * 2020-06-02 00:00:00
   */
  endDate?: string;
  /**
   * @remarks
   * The type of the changed object. Valid values: TABLE and PARTITION.
   * 
   * @example
   * TABLE
   */
  objectType?: string;
  /**
   * @remarks
   * The page number. Used for pagination.
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
   * The start date of the table change. Format: yyyy-MM-dd HH:mm:ss.
   * - If the date validation fails, the system uses the current time as the start date by default.
   * - If both the start date and end date fail validation, the system automatically retrieves the table change records from the last 30 days.
   * 
   * @example
   * 2020-06-01 00:00:00
   */
  startDate?: string;
  /**
   * @remarks
   * The globally unique identifier (GUID) of the table. Format: odps.projectName.tableName. You can call [GetMetaDBTableList](https://help.aliyun.com/document_detail/2780086.html) to obtain the GUID of the table.
   * > Currently, you can call [GetMetaTableChangeLog](https://help.aliyun.com/document_detail/2780094.html) to retrieve the change log of only MaxCompute tables.
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

