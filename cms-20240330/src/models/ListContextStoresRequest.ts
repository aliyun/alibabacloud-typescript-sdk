// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListContextStoresRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the context store.
   * 
   * @example
   * test-context-store
   */
  contextStoreName?: string;
  /**
   * @remarks
   * The context type.
   * 
   * @example
   * memory
   */
  contextType?: string;
  /**
   * @remarks
   * The maximum number of results to return.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page of results.
   * 
   * @example
   * OCAQV0pBqldexv7EidbIZw==
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      contextStoreName: 'contextStoreName',
      contextType: 'contextType',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contextStoreName: 'string',
      contextType: 'string',
      maxResults: 'number',
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

