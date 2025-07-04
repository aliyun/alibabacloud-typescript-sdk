// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPostQueryResultRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   * 
   * @example
   * {}
   */
  body?: { [key: string]: any };
  /**
   * @remarks
   * The query type. Valid values: sql: SQL query. ha3: Havenask query.
   * 
   * @example
   * ha3
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
    };
  }

  validate() {
    if(this.body) {
      $dara.Model.validateMap(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

