// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPostQueryResultRequest extends $dara.Model {
  /**
   * @remarks
   * The request structure.
   * 
   * @example
   * {"assemblyQuery":"query=id:1&&cluster=general&&config=start:0,hit:10,format:json"}
   */
  body?: { [key: string]: any };
  /**
   * @remarks
   * sql: SQL query. ha3: HA3 query.
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

