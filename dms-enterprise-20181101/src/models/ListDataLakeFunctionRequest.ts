// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataLakeFunctionRequest extends $dara.Model {
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
   * @example
   * default
   */
  dbName?: string;
  /**
   * @example
   * .*
   */
  functionNamePattern?: string;
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
      functionNamePattern: 'FunctionNamePattern',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      tid: 'Tid',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogName: 'string',
      dataRegion: 'string',
      dbName: 'string',
      functionNamePattern: 'string',
      maxResults: 'number',
      nextToken: 'string',
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

