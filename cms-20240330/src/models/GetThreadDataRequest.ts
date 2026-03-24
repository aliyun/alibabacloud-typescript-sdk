// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetThreadDataRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of session data entries to return. The maximum value is 100.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * xxxxxxxxxx
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

