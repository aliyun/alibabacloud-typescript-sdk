// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgenticTableColumnEngineMeta extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the column uses auto-increment.
   */
  autoIncrement?: boolean;
  /**
   * @remarks
   * The data length of the column. This parameter typically applies to string and binary data types.
   */
  dataLength?: number;
  /**
   * @remarks
   * The data precision of the column, which is the total number of digits in a numeric type.
   */
  dataPrecision?: number;
  /**
   * @remarks
   * The data scale of the column, which is the number of digits to the right of the decimal point in a numeric type.
   */
  dataScale?: number;
  /**
   * @remarks
   * The default value of the column.
   */
  defaultValue?: string;
  /**
   * @remarks
   * The character encoding of the column.
   */
  encoding?: string;
  /**
   * @remarks
   * Engine-specific attributes or flags for the column.
   */
  extra?: string;
  /**
   * @remarks
   * Indicates whether the column is a generated column.
   */
  generationColumn?: boolean;
  /**
   * @remarks
   * The expression used to generate the column\\"s value. Applies only if `GenerationColumn` is `true`.
   */
  generationExpression?: string;
  /**
   * @remarks
   * Indicates whether the column is nullable.
   */
  nullable?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoIncrement: 'AutoIncrement',
      dataLength: 'DataLength',
      dataPrecision: 'DataPrecision',
      dataScale: 'DataScale',
      defaultValue: 'DefaultValue',
      encoding: 'Encoding',
      extra: 'Extra',
      generationColumn: 'GenerationColumn',
      generationExpression: 'GenerationExpression',
      nullable: 'Nullable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoIncrement: 'boolean',
      dataLength: 'number',
      dataPrecision: 'number',
      dataScale: 'number',
      defaultValue: 'string',
      encoding: 'string',
      extra: 'string',
      generationColumn: 'boolean',
      generationExpression: 'string',
      nullable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

