// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SimpleQuery extends $dara.Model {
  field?: string;
  /**
   * @example
   * eq / gt / gte / lt / lte / match / prefix / and / or / not
   */
  operation?: string;
  subQueries?: SimpleQuery[];
  value?: string;
  static names(): { [key: string]: string } {
    return {
      field: 'Field',
      operation: 'Operation',
      subQueries: 'SubQueries',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      operation: 'string',
      subQueries: { 'type': 'array', 'itemType': SimpleQuery },
      value: 'string',
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

