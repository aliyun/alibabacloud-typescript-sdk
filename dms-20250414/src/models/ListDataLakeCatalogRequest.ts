// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataLakeCatalogRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword used to search for data catalog names.
   * 
   * @example
   * hive
   * 
   * **if can be null:**
   * false
   */
  searchKey?: string;
  /**
   * @remarks
   * The tenant ID. Call the GetUserActiveTenant or ListUserTenants operation to get the value of this parameter.
   * 
   * @example
   * 3****
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
      searchKey: 'SearchKey',
      tid: 'Tid',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

