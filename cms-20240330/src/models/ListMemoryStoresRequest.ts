// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMemoryStoresRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of results to return. Maximum value: 200.
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
   * The pagination token.
   * 
   * @example
   * H8low6kptuLKf7Sttrso6EOE0-JV__****Low6kpt0lk3XsTt_SOYeoE0c7Vb-le
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

