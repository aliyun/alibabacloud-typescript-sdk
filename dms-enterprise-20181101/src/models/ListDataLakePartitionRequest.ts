// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataLakePartitionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hive
   */
  catalogName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   * 
   * **if can be null:**
   * false
   */
  dataRegion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * default
   */
  dbName?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * f056501ada12c1cc
   */
  nextToken?: string;
  partNames?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_table
   */
  tableName?: string;
  /**
   * @example
   * 3***
   */
  tid?: number;
  workspaceId?: number;
  static names(): { [key: string]: string } {
    return {
      catalogName: 'CatalogName',
      dataRegion: 'DataRegion',
      dbName: 'DbName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      partNames: 'PartNames',
      tableName: 'TableName',
      tid: 'Tid',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogName: 'string',
      dataRegion: 'string',
      dbName: 'string',
      maxResults: 'number',
      nextToken: 'string',
      partNames: { 'type': 'array', 'itemType': 'string' },
      tableName: 'string',
      tid: 'number',
      workspaceId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.partNames)) {
      $dara.Model.validateArray(this.partNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

