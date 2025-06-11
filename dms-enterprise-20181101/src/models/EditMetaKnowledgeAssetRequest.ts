// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EditMetaKnowledgeAssetRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  assetDescription?: string;
  columnName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dbId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  tableName?: string;
  tableSchemaName?: string;
  static names(): { [key: string]: string } {
    return {
      assetDescription: 'AssetDescription',
      columnName: 'ColumnName',
      dbId: 'DbId',
      tableName: 'TableName',
      tableSchemaName: 'TableSchemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetDescription: 'string',
      columnName: 'string',
      dbId: 'number',
      tableName: 'string',
      tableSchemaName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

