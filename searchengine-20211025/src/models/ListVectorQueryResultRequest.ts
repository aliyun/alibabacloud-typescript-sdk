// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVectorQueryResultRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   * 
   * @example
   * {}
   */
  body?: { [key: string]: any };
  path?: string;
  /**
   * @remarks
   * The query type. Valid values: vector, primary_key, and vector_text.
   * 
   * @example
   * primary_key
   */
  queryType?: string;
  /**
   * @remarks
   * The vector query type. Valid values: vector, image, and text.
   * 
   * @example
   * image
   */
  vectorQueryType?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      path: 'path',
      queryType: 'queryType',
      vectorQueryType: 'vectorQueryType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      path: 'string',
      queryType: 'string',
      vectorQueryType: 'string',
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

