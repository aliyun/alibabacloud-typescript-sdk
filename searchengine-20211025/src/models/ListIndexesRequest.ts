// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIndexesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the data catalog for the Data Lake Formation (DLF) data source.
   * 
   * @example
   * clg-paimon-765e9e2d43ab4fccbf095853a661eafc
   */
  catalog?: string;
  /**
   * @remarks
   * The database of the DLF data source.
   * 
   * @example
   * dlf_test
   */
  database?: string;
  /**
   * @remarks
   * Specifies whether to use the new version of the console page.
   * 
   * @example
   * true
   */
  newMode?: boolean;
  /**
   * @remarks
   * The data table of the DLF data source.
   * 
   * @example
   * rag
   */
  table?: string;
  static names(): { [key: string]: string } {
    return {
      catalog: 'catalog',
      database: 'database',
      newMode: 'newMode',
      table: 'table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalog: 'string',
      database: 'string',
      newMode: 'boolean',
      table: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

