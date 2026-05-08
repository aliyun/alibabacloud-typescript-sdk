// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListContextStoresRequest extends $dara.Model {
  /**
   * @example
   * test-context-store
   */
  contextStoreName?: string;
  /**
   * @example
   * memory
   */
  contextType?: string;
  /**
   * @example
   * 100
   */
  maxResults?: number;
  /**
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

