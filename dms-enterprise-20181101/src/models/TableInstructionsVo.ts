// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TableInstructionsVO extends $dara.Model {
  assetCreatedGmt?: string;
  assetDescription?: string;
  assetModifiedGmt?: string;
  dbId?: number;
  dbType?: string;
  summary?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      assetCreatedGmt: 'AssetCreatedGmt',
      assetDescription: 'AssetDescription',
      assetModifiedGmt: 'AssetModifiedGmt',
      dbId: 'DbId',
      dbType: 'DbType',
      summary: 'Summary',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetCreatedGmt: 'string',
      assetDescription: 'string',
      assetModifiedGmt: 'string',
      dbId: 'number',
      dbType: 'string',
      summary: 'string',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

