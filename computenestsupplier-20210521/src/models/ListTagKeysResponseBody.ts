// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagKeysResponseBody extends $dara.Model {
  /**
   * @remarks
   * The tag keys.
   */
  keys?: string[];
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAZ9FmxgN6wKfeK/GOKRnnjU=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8872ACE6-0297-54A4-8AAD-3A8623EC6C5D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      keys: 'Keys',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keys: { 'type': 'array', 'itemType': 'string' },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.keys)) {
      $dara.Model.validateArray(this.keys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

