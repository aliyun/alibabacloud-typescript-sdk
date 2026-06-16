// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListContextStoresRequest extends $dara.Model {
  /**
   * @example
   * my-context-store
   */
  contextStoreName?: string;
  /**
   * @example
   * experience
   */
  contextType?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * MTIzNDU2Nzg5MA==
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

