// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPartitionSummariesRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page of results. If the response does not include this token, pass an empty string ("").
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
   * hh=10
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

