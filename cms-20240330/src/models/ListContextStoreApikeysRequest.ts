// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListContextStoreAPIKeysRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return in a single request. If this parameter is not specified, the service returns a default number of entries.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token used to retrieve the next page of results. Leave this parameter empty to retrieve the first page.
   * 
   * @example
   * 615dfe7fd00f699ea94d5e63ba564aaf22450858c58f1387cc78f883b2254ab47232ce40fa95d9cb
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

