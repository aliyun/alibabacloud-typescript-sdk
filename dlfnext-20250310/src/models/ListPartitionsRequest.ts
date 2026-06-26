// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPartitionsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of records to return in a single request.
   * 
   * @example
   * 1000
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token used to retrieve the next page of results. If the response does not include this token, pass an empty string ("").
   * 
   * @example
   * ""
   */
  pageToken?: string;
  /**
   * @remarks
   * The partition name pattern.
   * 
   * @example
   * partition
   */
  partitionNamePattern?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      pageToken: 'pageToken',
      partitionNamePattern: 'partitionNamePattern',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      pageToken: 'string',
      partitionNamePattern: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

