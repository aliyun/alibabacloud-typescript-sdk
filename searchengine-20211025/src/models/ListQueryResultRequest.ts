// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQueryResultRequest extends $dara.Model {
  /**
   * @remarks
   * The query statement
   * 
   * @example
   * query%3D1%26%26config%3Dstart%3A0%2Chit%3A10%2Cformat%3Ajson%26%26cluster%3Dgeneral
   */
  query?: string;
  /**
   * @remarks
   * The SQL statement that is executed in the query
   * 
   * @example
   * query%3Dselect%20max(content_id)%20from%20generation
   */
  sql?: string;
  static names(): { [key: string]: string } {
    return {
      query: 'query',
      sql: 'sql',
    };
  }

  static types(): { [key: string]: any } {
    return {
      query: 'string',
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

