// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMemoryStoresRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of results to return. The maximum value is 200.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The name of the memory store.
   * 
   * @example
   * qianyi_test_1
   */
  memoryStoreName?: string;
  /**
   * @remarks
   * The token for the next page of results.
   * 
   * @example
   * xxxxxxxxx
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      memoryStoreName: 'memoryStoreName',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      memoryStoreName: 'string',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

