// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SimpleQuery extends $dara.Model {
  field?: Buffer;
  operation?: Buffer;
  subQueries?: SimpleQuery[];
  value?: Buffer;
  static names(): { [key: string]: string } {
    return {
      field: 'field',
      operation: 'operation',
      subQueries: 'sub_queries',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'Buffer',
      operation: 'Buffer',
      subQueries: { 'type': 'array', 'itemType': SimpleQuery },
      value: 'Buffer',
    };
  }

  validate() {
    if(Array.isArray(this.subQueries)) {
      $dara.Model.validateArray(this.subQueries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

