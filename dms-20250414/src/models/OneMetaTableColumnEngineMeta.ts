// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OneMetaTableColumnEngineMeta extends $dara.Model {
  autoIncrement?: boolean;
  dataLength?: number;
  dataPrecision?: number;
  dataScale?: number;
  defaultValue?: string;
  encoding?: string;
  extra?: string;
  generationColumn?: boolean;
  generationExpression?: string;
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

