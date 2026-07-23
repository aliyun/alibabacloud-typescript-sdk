// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataCenterDatabaseRequest extends $dara.Model {
  /**
   * @remarks
   * Used only by the frontend.
   * 
   * @example
   * Frontend only
   */
  callFrom?: string;
  /**
   * @remarks
   * The current Data Management unit.
   * 
   * @example
   * cn-hangzhou
   */
  dmsUnit?: string;
  /**
   * @remarks
   * The import type.
   *   - FILE
   * 
   * @example
   * FILE
   */
  importType?: string;
  /**
   * @remarks
   * Used only by the frontend.
   * 
   * @example
   * Frontend only
   */
  language?: string;
  /**
   * @remarks
   * The keyword for fuzzy match of databases.
   * 
   * @example
   * testdb
   */
  searchKey?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      callFrom: 'CallFrom',
      dmsUnit: 'DmsUnit',
      importType: 'ImportType',
      language: 'Language',
      searchKey: 'SearchKey',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callFrom: 'string',
      dmsUnit: 'string',
      importType: 'string',
      language: 'string',
      searchKey: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

