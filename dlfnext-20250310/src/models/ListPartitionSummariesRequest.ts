// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPartitionSummariesRequest extends $dara.Model {
  /**
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @example
   * ""
   */
  pageToken?: string;
  /**
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

