// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ColumnKnowledgeInfo } from "./ColumnKnowledgeInfo";


export class TableKnowledgeInfo extends $dara.Model {
  /**
   * @remarks
   * Table usage instructions, which are not editable in OpenAPI.
   */
  assetDescription?: string;
  /**
   * @remarks
   * Last modified time.
   */
  assetModifiedGmt?: string;
  /**
   * @remarks
   * The columns of the table.
   */
  columnList?: ColumnKnowledgeInfo[];
  /**
   * @remarks
   * Table description in the CREAT TABLE statement.
   */
  description?: string;
  level?: number;
  /**
   * @remarks
   * Table business description, which can be edited via EditMetaKnowledgeAsset.
   */
  summary?: string;
  /**
   * @remarks
   * The table name.
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      assetDescription: 'AssetDescription',
      assetModifiedGmt: 'AssetModifiedGmt',
      columnList: 'ColumnList',
      description: 'Description',
      level: 'Level',
      summary: 'Summary',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetDescription: 'string',
      assetModifiedGmt: 'string',
      columnList: { 'type': 'array', 'itemType': ColumnKnowledgeInfo },
      description: 'string',
      level: 'number',
      summary: 'string',
      tableName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.columnList)) {
      $dara.Model.validateArray(this.columnList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

