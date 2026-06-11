// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataCenterDatabaseRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is for internal use.
   * 
   * @example
   * Frontend only
   */
  callFrom?: string;
  /**
   * @remarks
   * The DMS unit.
   * 
   * @example
   * cn-hangzhou
   */
  dmsUnit?: string;
  /**
   * @remarks
   * The import type.
   * 
   * - FILE
   * 
   * @example
   * FILE
   */
  importType?: string;
  /**
   * @remarks
   * This parameter is for internal use.
   * 
   * @example
   * Frontend only
   */
  language?: string;
  /**
   * @remarks
   * The keyword for a fuzzy search for databases.
   * 
   * @example
   * testdb
   */
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      callFrom: 'CallFrom',
      dmsUnit: 'DmsUnit',
      importType: 'ImportType',
      language: 'Language',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callFrom: 'string',
      dmsUnit: 'string',
      importType: 'string',
      language: 'string',
      searchKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

