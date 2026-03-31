// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourcesByAdvancedSearchRequest extends $dara.Model {
  /**
   * @remarks
   * The SQL query statement.
   * 
   * This parameter is required.
   * 
   * @example
   * SELECT ResourceId, ResourceName WHERE Tags.Kvpair=\\"business:online\\"
   */
  sql?: string;
  static names(): { [key: string]: string } {
    return {
      sql: 'Sql',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sql: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

