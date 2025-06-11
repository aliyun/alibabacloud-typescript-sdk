// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ColumnKnowledgeInfo } from "./ColumnKnowledgeInfo";


export class TableKnowledgeInfo extends $dara.Model {
  assetDescription?: string;
  assetModifiedGmt?: string;
  columnList?: ColumnKnowledgeInfo[];
  description?: string;
  summary?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      assetDescription: 'AssetDescription',
      assetModifiedGmt: 'AssetModifiedGmt',
      columnList: 'ColumnList',
      description: 'Description',
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

