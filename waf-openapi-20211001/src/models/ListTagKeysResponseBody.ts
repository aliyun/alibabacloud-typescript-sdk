// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTagKeysResponseBodyKeys } from "./ListTagKeysResponseBodyKeys";


export class ListTagKeysResponseBody extends $dara.Model {
  /**
   * @remarks
   * The keys and types of the tags.
   */
  keys?: ListTagKeysResponseBodyKeys[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0*****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8CB8BB88-24C7-5608-BF5E-4DCA****CF1C
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
      keys: { 'type': 'array', 'itemType': ListTagKeysResponseBodyKeys },
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

