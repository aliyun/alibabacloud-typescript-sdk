// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListShareReceiversRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of records to return.
   * 
   * @example
   * 1000
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to retrieve the next page of results. If the response does not include this token, pass an empty string ("").
   * 
   * @example
   * ""
   */
  pageToken?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      pageToken: 'pageToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      pageToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

