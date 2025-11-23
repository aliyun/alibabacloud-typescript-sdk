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
   * The region where the data lake resides.
   * 
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
   * The table name.
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
   * The tenant ID. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) or [ListUserTenants](https://help.aliyun.com/document_detail/198074.html) operation to obtain the tenant ID.
   * 
   * @example
   * 3
   */
  tid?: number;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 12****
   */
  workspaceId?: number;
  static names(): { [key: string]: string } {
    return {
      catalogName: 'CatalogName',
      dataRegion: 'DataRegion',
      dbName: 'DbName',
      name: 'Name',
      tid: 'Tid',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogName: 'string',
      dataRegion: 'string',
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

