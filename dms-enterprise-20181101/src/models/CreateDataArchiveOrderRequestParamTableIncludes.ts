// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataArchiveOrderRequestParamTableIncludes extends $dara.Model {
  /**
   * @remarks
   * The table name.
   * 
   * This parameter is required.
   * 
   * @example
   * table1
   */
  tableName?: string;
  /**
   * @remarks
   * The filter condition that is specified by the WHERE clause of the archiving configuration. If a time variable is used in the filter condition, the filter condition is specified in the following format: field name <=\\"${variable name}\\". The variable name in the filter condition must be the same as the time variable name that is specified in the Variables parameter.
   * 
   * @example
   * gmt_modified<\\"${time}\\"
   */
  tableWhere?: string;
  static names(): { [key: string]: string } {
    return {
      tableName: 'TableName',
      tableWhere: 'TableWhere',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableName: 'string',
      tableWhere: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

