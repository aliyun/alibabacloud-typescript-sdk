// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSessionsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of sessions to return per page. The value must be a positive integer.
   * 
   * @example
   * 20
   */
  maxResults?: string;
  /**
   * @remarks
   * The pagination token. Do not specify this parameter for the first request. For subsequent requests, pass the nextToken value returned in the previous response. Do not parse or construct this value.
   * 
   * @example
   * example-next-token
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
      maxResults: 'string',
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

