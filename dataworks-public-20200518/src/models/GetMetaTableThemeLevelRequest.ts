// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMetaTableThemeLevelRequest extends $dara.Model {
  /**
   * @remarks
   * The data type. Currently, only odps is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * odps
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The unique ID of the table. Format: odps.${projectName}.${tableName}.
   * 
   * This parameter is required.
   * 
   * @example
   * odps.project1.name1
   */
  tableGuid?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceType: 'DataSourceType',
      tableGuid: 'TableGuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceType: 'string',
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

