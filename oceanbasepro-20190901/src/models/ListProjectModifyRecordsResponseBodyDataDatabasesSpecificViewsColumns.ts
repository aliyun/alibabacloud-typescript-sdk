// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectModifyRecordsResponseBodyDataDatabasesSpecificViewsColumns extends $dara.Model {
  /**
   * @example
   * comments
   */
  columnComment?: string;
  /**
   * @example
   * PRI
   */
  columnKey?: string;
  /**
   * @example
   * col_name
   */
  columnName?: string;
  /**
   * @example
   * FLOAT
   */
  columnType?: string;
  /**
   * @example
   * null
   */
  dataLength?: number;
  /**
   * @example
   * 64
   */
  dataPrecision?: number;
  /**
   * @example
   * null
   */
  dataScale?: number;
  /**
   * @example
   * null
   */
  defaultValue?: string;
  /**
   * @example
   * utf16
   */
  encoding?: string;
  /**
   * @example
   * false
   */
  isGenerateField?: boolean;
  /**
   * @example
   * mapped_name
   */
  mappedName?: string;
  /**
   * @example
   * true
   */
  nullable?: boolean;
  /**
   * @example
   * null
   */
  position?: number;
  /**
   * @example
   * null
   */
  rawColumnType?: string;
  /**
   * @example
   * INT8
   */
  recordFieldType?: string;
  /**
   * @example
   * DATABASE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      columnComment: 'ColumnComment',
      columnKey: 'ColumnKey',
      columnName: 'ColumnName',
      columnType: 'ColumnType',
      dataLength: 'DataLength',
      dataPrecision: 'DataPrecision',
      dataScale: 'DataScale',
      defaultValue: 'DefaultValue',
      encoding: 'Encoding',
      isGenerateField: 'IsGenerateField',
      mappedName: 'MappedName',
      nullable: 'Nullable',
      position: 'Position',
      rawColumnType: 'RawColumnType',
      recordFieldType: 'RecordFieldType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnComment: 'string',
      columnKey: 'string',
      columnName: 'string',
      columnType: 'string',
      dataLength: 'number',
      dataPrecision: 'number',
      dataScale: 'number',
      defaultValue: 'string',
      encoding: 'string',
      isGenerateField: 'boolean',
      mappedName: 'string',
      nullable: 'boolean',
      position: 'number',
      rawColumnType: 'string',
      recordFieldType: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

