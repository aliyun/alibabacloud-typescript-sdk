// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGroupsForUserRequest extends $dara.Model {
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * nextToken
   * 
   * @example
   * NTxxx
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

