// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIdentityProvidersRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of records to return per page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The cursor for querying the next page. Do not specify this parameter for the first call. For subsequent calls, specify the nextToken value returned from the previous call.
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

