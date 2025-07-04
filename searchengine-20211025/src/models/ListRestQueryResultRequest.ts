// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRestQueryResultRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the index table.
   * 
   * @example
   * main_index
   */
  indexName?: string;
  /**
   * @remarks
   * The rest query statement.
   * 
   * @example
   * query%3Drelation_id%3A%221151274675_2%22%26%26cluster%3Dgeneral%26%26config%3Dstart%3A0%2Chit%3A10%2Cformat%3Ajson
   */
  query?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      indexName: 'indexName',
      query: 'query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexName: 'string',
      query: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.query) {
      $dara.Model.validateMap(this.query);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

