// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgenticTableColumnEngineMeta extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the field is auto-incremented.
   * 
   * @example
   * false
   */
  autoIncrement?: boolean;
  /**
   * @remarks
   * The defined length of the field.
   * 
   * @example
   * 20
   */
  dataLength?: number;
  /**
   * @remarks
   * The precision of the numeric field.
   * 
   * @example
   * 10
   */
  dataPrecision?: number;
  /**
   * @remarks
   * The scale of the numeric field, which is the number of decimal places.
   * 
   * @example
   * 2
   */
  dataScale?: number;
  /**
   * @remarks
   * The default value of the field.
   * 
   * @example
   * 0
   */
  defaultValue?: string;
  /**
   * @remarks
   * The character set of the field.
   * 
   * @example
   * utf8mb4
   */
  encoding?: string;
  /**
   * @remarks
   * The additional information of the field, such as auto_increment.
   * 
   * @example
   * auto_increment
   */
  extra?: string;
  /**
   * @remarks
   * Specifies whether the field is a generated column.
   * 
   * @example
   * false
   */
  generationColumn?: boolean;
  /**
   * @remarks
   * The calculation expression of the generated column.
   * 
   * @example
   * price * quantity
   */
  generationExpression?: string;
  /**
   * @remarks
   * Specifies whether the field allows null values.
   * 
   * @example
   * false
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

