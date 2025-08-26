// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataLakeDatabaseRequest extends $dara.Model {
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
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * f056501ada12****
   */
  nextToken?: string;
  /**
   * @example
   * default
   * 
   * **if can be null:**
   * false
   */
  searchKey?: string;
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
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      searchKey: 'SearchKey',
      tid: 'Tid',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogName: 'string',
      maxResults: 'number',
      nextToken: 'string',
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

