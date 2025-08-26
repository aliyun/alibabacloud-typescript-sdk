// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataLakeTableRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hive
   * 
   * **if can be null:**
   * false
   */
  catalogName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * default
   * 
   * **if can be null:**
   * false
   */
  dbName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100g_customer
   * 
   * **if can be null:**
   * false
   */
  name?: string;
  /**
   * @example
   * 3****
   */
  tid?: number;
  /**
   * @example
   * 12****
   */
  workspaceId?: number;
  static names(): { [key: string]: string } {
    return {
      catalogName: 'CatalogName',
      dbName: 'DbName',
      name: 'Name',
      tid: 'Tid',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogName: 'string',
      dbName: 'string',
      name: 'string',
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

