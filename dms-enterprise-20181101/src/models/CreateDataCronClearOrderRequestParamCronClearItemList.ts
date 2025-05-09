// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataCronClearOrderRequestParamCronClearItemList extends $dara.Model {
  /**
   * @remarks
   * The name of the field.
   * 
   * This parameter is required.
   * 
   * @example
   * gmt_create
   */
  columnName?: string;
  /**
   * @remarks
   * The filter conditions.
   * 
   * @example
   * where 1 = 1
   */
  filterSQL?: string;
  /**
   * @remarks
   * The retention period of the historical data. Unit: days. For example, if you set the parameter to 7, DMS deletes the data that is retained for more than seven days.
   * 
   * This parameter is required.
   * 
   * @example
   * 7
   */
  remainDays?: number;
  /**
   * @remarks
   * The name of the table. You can call the [ListTables](https://help.aliyun.com/document_detail/141878.html) operation to query the name of the table.
   * 
   * This parameter is required.
   * 
   * @example
   * t1
   */
  tableName?: string;
  /**
   * @remarks
   * The type of time granularity. If the ColumnName parameter specifies a field of a time type, this parameter is required. Valid values:
   * 
   * *   **MILLISECONDS**: milliseconds
   * *   **SECONDS**: seconds
   * 
   * @example
   * MILLISECONDS
   */
  timeUnit?: string;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      filterSQL: 'FilterSQL',
      remainDays: 'RemainDays',
      tableName: 'TableName',
      timeUnit: 'TimeUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      filterSQL: 'string',
      remainDays: 'number',
      tableName: 'string',
      timeUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

