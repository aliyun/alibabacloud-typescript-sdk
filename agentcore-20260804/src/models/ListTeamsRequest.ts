// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTeamsRequest extends $dara.Model {
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * team
   */
  nameLike?: string;
  /**
   * @example
   * dGVhbS1vZmZzZXQ6MTA
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nameLike: 'nameLike',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nameLike: 'string',
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

