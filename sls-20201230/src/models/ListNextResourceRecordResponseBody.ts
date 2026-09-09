// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ResourceRecord } from "./ResourceRecord";


export class ListNextResourceRecordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of resource records.
   */
  items?: ResourceRecord[];
  /**
   * @remarks
   * The maximum number of records returned in this request.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page. An empty value indicates that no more data is available.
   * 
   * @example
   * t7F6JzTNNTjkq2tRBH8hR0a_NcuVYQWjbVwdFeuFhkylsUhrDl0JSofT5mrbI0oV"
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of records that match the filter criteria.
   * 
   * @example
   * 245
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ResourceRecord },
      maxResults: 'number',
      nextToken: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

