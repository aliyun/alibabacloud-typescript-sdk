// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIndexesRequest extends $dara.Model {
  catalog?: string;
  database?: string;
  /**
   * @remarks
   * Specifies whether the OpenSearch Vector Search Edition instance is of the new version.
   * 
   * @example
   * true
   */
  newMode?: boolean;
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

