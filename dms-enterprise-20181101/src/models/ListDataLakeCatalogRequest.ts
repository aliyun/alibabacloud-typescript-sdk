// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataLakeCatalogRequest extends $dara.Model {
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
   * @example
   * hive
   * 
   * **if can be null:**
   * false
   */
  searchKey?: string;
  /**
   * @example
   * 3
   */
  tid?: number;
  workspaceId?: number;
  static names(): { [key: string]: string } {
    return {
      dataRegion: 'DataRegion',
      searchKey: 'SearchKey',
      tid: 'Tid',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataRegion: 'string',
      searchKey: 'string',
      tid: 'number',
      workspaceId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

