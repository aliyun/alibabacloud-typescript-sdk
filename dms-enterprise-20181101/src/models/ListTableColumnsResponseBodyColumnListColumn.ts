// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTableColumnsResponseBodyColumnListColumn extends $dara.Model {
  /**
   * @example
   * false
   */
  autoIncrement?: boolean;
  /**
   * @example
   * 12345
   */
  columnId?: string;
  /**
   * @example
   * c1
   */
  columnName?: string;
  /**
   * @example
   * varchar
   */
  columnType?: string;
  /**
   * @example
   * 32
   */
  dataLength?: number;
  /**
   * @example
   * 0
   */
  dataPrecision?: number;
  /**
   * @example
   * 0
   */
  dataScale?: number;
  /**
   * @example
   * aaa
   */
  defaultValue?: string;
  /**
   * @example
   * column desc
   */
  description?: string;
  /**
   * @example
   * NULL
   */
  functionType?: string;
  /**
   * @example
   * true
   */
  nullable?: boolean;
  /**
   * @example
   * INNER
   */
  securityLevel?: string;
  /**
   * @example
   * false
   */
  sensitive?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoIncrement: 'AutoIncrement',
      columnId: 'ColumnId',
      columnName: 'ColumnName',
      columnType: 'ColumnType',
      dataLength: 'DataLength',
      dataPrecision: 'DataPrecision',
      dataScale: 'DataScale',
      defaultValue: 'DefaultValue',
      description: 'Description',
      functionType: 'FunctionType',
      nullable: 'Nullable',
      securityLevel: 'SecurityLevel',
      sensitive: 'Sensitive',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoIncrement: 'boolean',
      columnId: 'string',
      columnName: 'string',
      columnType: 'string',
      dataLength: 'number',
      dataPrecision: 'number',
      dataScale: 'number',
      defaultValue: 'string',
      description: 'string',
      functionType: 'string',
      nullable: 'boolean',
      securityLevel: 'string',
      sensitive: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

