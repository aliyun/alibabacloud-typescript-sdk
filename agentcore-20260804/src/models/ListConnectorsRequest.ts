// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConnectorsRequest extends $dara.Model {
  /**
   * @remarks
   * The page size. The current version does not support this parameter.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The next page token. The current version does not support this parameter.
   * 
   * @example
   * dGVzdA==
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

