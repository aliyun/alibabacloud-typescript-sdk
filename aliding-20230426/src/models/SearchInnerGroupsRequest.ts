// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchInnerGroupsRequest extends $dara.Model {
  /**
   * @example
   * 100
   */
  maxResults?: number;
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      searchKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

