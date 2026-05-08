// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListContextStoreAPIKeysRequest extends $dara.Model {
  /**
   * @example
   * 100
   */
  maxResults?: number;
  /**
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

