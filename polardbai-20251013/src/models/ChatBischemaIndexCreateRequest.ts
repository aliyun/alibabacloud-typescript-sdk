// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatBISchemaIndexCreateRequest extends $dara.Model {
  /**
   * @example
   * 空字符串, \"graph_info.time,text_info.ext\"
   */
  columnsExcluded?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * db_test
   */
  dbName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pc-2ze454l20me07****
   */
  instanceName?: string;
  /**
   * @example
   * 空字符串
   */
  tableNameSuffix?: string;
  /**
   * @example
   * 空字符串, \"graph_info,image_info,text_info\"
   */
  tablesIncluded?: string;
  /**
   * @example
   * 0,1
   */
  toSample?: number;
  static names(): { [key: string]: string } {
    return {
      columnsExcluded: 'ColumnsExcluded',
      dbName: 'DbName',
      instanceName: 'InstanceName',
      tableNameSuffix: 'TableNameSuffix',
      tablesIncluded: 'TablesIncluded',
      toSample: 'ToSample',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnsExcluded: 'string',
      dbName: 'string',
      instanceName: 'string',
      tableNameSuffix: 'string',
      tablesIncluded: 'string',
      toSample: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

