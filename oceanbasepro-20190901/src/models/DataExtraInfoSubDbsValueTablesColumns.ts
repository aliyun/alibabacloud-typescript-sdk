// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class DataExtraInfoSubDbsValueTablesColumns extends $dara.Model {
  /**
   * @example
   * null
   */
  columnName?: string;
  /**
   * @example
   * null
   */
  position?: number;
  /**
   * @example
   * null
   */
  columnType?: string;
  /**
   * @example
   * null
   */
  recordFieldType?: string;
  /**
   * @example
   * null
   */
  rawColumnType?: string;
  /**
   * @example
   * null
   */
  columnKey?: string;
  /**
   * @example
   * true
   */
  nullable?: boolean;
  /**
   * @example
   * null
   */
  defaultValue?: string;
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
   * utf8
   */
  encoding?: string;
  /**
   * @example
   * comments
   */
  columnComment?: string;
  /**
   * @example
   * false
   */
  isGenerateField?: boolean;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      position: 'Position',
      columnType: 'ColumnType',
      recordFieldType: 'RecordFieldType',
      rawColumnType: 'RawColumnType',
      columnKey: 'ColumnKey',
      nullable: 'Nullable',
      defaultValue: 'DefaultValue',
      dataLength: 'DataLength',
      dataPrecision: 'DataPrecision',
      dataScale: 'DataScale',
      encoding: 'Encoding',
      columnComment: 'ColumnComment',
      isGenerateField: 'IsGenerateField',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      position: 'number',
      columnType: 'string',
      recordFieldType: 'string',
      rawColumnType: 'string',
      columnKey: 'string',
      nullable: 'boolean',
      defaultValue: 'string',
      dataLength: 'number',
      dataPrecision: 'number',
      dataScale: 'number',
      encoding: 'string',
      columnComment: 'string',
      isGenerateField: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

