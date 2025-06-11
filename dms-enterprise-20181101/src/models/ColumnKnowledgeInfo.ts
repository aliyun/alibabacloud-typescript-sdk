// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ColumnKnowledgeInfo extends $dara.Model {
  assetDescription?: string;
  assetModifiedGmt?: string;
  columnName?: string;
  columnType?: string;
  description?: string;
  position?: number;
  static names(): { [key: string]: string } {
    return {
      assetDescription: 'AssetDescription',
      assetModifiedGmt: 'AssetModifiedGmt',
      columnName: 'ColumnName',
      columnType: 'ColumnType',
      description: 'Description',
      position: 'Position',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetDescription: 'string',
      assetModifiedGmt: 'string',
      columnName: 'string',
      columnType: 'string',
      description: 'string',
      position: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

