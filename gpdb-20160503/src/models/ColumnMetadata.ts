// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ColumnMetadata extends $dara.Model {
  columnDefault?: string;
  comment?: string;
  dataType?: string;
  isCaseSensitive?: boolean;
  isCurrency?: boolean;
  isPrimaryKey?: boolean;
  isSigned?: boolean;
  maxLength?: number;
  name?: string;
  nullable?: boolean;
  precision?: number;
  scale?: number;
  schemaName?: string;
  tableName?: string;
  udtName?: string;
  static names(): { [key: string]: string } {
    return {
      columnDefault: 'ColumnDefault',
      comment: 'Comment',
      dataType: 'DataType',
      isCaseSensitive: 'IsCaseSensitive',
      isCurrency: 'IsCurrency',
      isPrimaryKey: 'IsPrimaryKey',
      isSigned: 'IsSigned',
      maxLength: 'MaxLength',
      name: 'Name',
      nullable: 'Nullable',
      precision: 'Precision',
      scale: 'Scale',
      schemaName: 'SchemaName',
      tableName: 'TableName',
      udtName: 'UdtName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnDefault: 'string',
      comment: 'string',
      dataType: 'string',
      isCaseSensitive: 'boolean',
      isCurrency: 'boolean',
      isPrimaryKey: 'boolean',
      isSigned: 'boolean',
      maxLength: 'number',
      name: 'string',
      nullable: 'boolean',
      precision: 'number',
      scale: 'number',
      schemaName: 'string',
      tableName: 'string',
      udtName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

