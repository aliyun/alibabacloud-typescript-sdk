// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteLogQueryResponseBody extends $dara.Model {
  /**
   * @example
   * []。
   */
  queryResult?: any[];
  /**
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****。
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      queryResult: 'QueryResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryResult: { 'type': 'array', 'itemType': 'any' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.queryResult)) {
      $dara.Model.validateArray(this.queryResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

