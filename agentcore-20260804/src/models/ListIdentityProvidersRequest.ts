// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIdentityProvidersRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return on a single page. Valid values: 1 to 100. If you do not specify this parameter, 10 entries are returned by default.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The cursor for querying the next page. Do not specify this parameter for the first call. For subsequent calls, specify the nextToken value returned in the previous call.
   * 
   * @example
   * aWRlbnRpdHktcHJvdmlkZXItb2Zmc2V0OjEw
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

