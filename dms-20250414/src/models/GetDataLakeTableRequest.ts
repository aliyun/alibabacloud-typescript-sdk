// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataLakeTableRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the data catalog.
   * 
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
   * The name of the database to which the table belongs.
   * 
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
   * The name of the table.
   * 
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
   * @remarks
   * The tenant ID. Call the GetUserActiveTenant or ListUserTenants operation to get this ID.
   * 
   * @example
   * 3****
   */
  tid?: number;
  /**
   * @remarks
   * The ID of the workspace.
   * 
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

