// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ColumnKnowledgeInfo extends $dara.Model {
  /**
   * @remarks
   * User-edited business knowledge content, which can be modified via the EditMetaKnowledgeAsset API.
   */
  assetDescription?: string;
  /**
   * @remarks
   * The last modified time of the field.
   */
  assetModifiedGmt?: string;
  /**
   * @remarks
   * The name of the field.
   */
  columnName?: string;
  /**
   * @remarks
   * The data type of the field.
   */
  columnType?: string;
  /**
   * @remarks
   * Field description in the CREATE TABLE statement.
   */
  description?: string;
  level?: number;
  /**
   * @remarks
   * The field order in the CREATE TABLE statement.
   */
  position?: number;
  static names(): { [key: string]: string } {
    return {
      assetDescription: 'AssetDescription',
      assetModifiedGmt: 'AssetModifiedGmt',
      columnName: 'ColumnName',
      columnType: 'ColumnType',
      description: 'Description',
      level: 'Level',
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
      level: 'number',
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

