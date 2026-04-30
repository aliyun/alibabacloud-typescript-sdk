// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ColumnKnowledgeVO extends $dara.Model {
  assetDescription?: string;
  assetModifiedGmt?: string;
  autoIncrement?: boolean;
  columnId?: number;
  columnKeyType?: string;
  columnName?: string;
  columnType?: string;
  description?: string;
  hotLevel?: number;
  level?: number;
  levelType?: string;
  nullable?: boolean;
  plain?: boolean;
  position?: number;
  securityLevel?: string;
  tableId?: number;
  title?: string;
  userSensitivityLevel?: string;
  static names(): { [key: string]: string } {
    return {
      assetDescription: 'AssetDescription',
      assetModifiedGmt: 'AssetModifiedGmt',
      autoIncrement: 'AutoIncrement',
      columnId: 'ColumnId',
      columnKeyType: 'ColumnKeyType',
      columnName: 'ColumnName',
      columnType: 'ColumnType',
      description: 'Description',
      hotLevel: 'HotLevel',
      level: 'Level',
      levelType: 'LevelType',
      nullable: 'Nullable',
      plain: 'Plain',
      position: 'Position',
      securityLevel: 'SecurityLevel',
      tableId: 'TableId',
      title: 'Title',
      userSensitivityLevel: 'UserSensitivityLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetDescription: 'string',
      assetModifiedGmt: 'string',
      autoIncrement: 'boolean',
      columnId: 'number',
      columnKeyType: 'string',
      columnName: 'string',
      columnType: 'string',
      description: 'string',
      hotLevel: 'number',
      level: 'number',
      levelType: 'string',
      nullable: 'boolean',
      plain: 'boolean',
      position: 'number',
      securityLevel: 'string',
      tableId: 'number',
      title: 'string',
      userSensitivityLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

