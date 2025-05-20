// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ReadMessageListResponseBodyDataRows } from "./ReadMessageListResponseBodyDataRows";


export class ReadMessageListResponseBodyData extends $dara.Model {
  count?: number;
  maxResults?: number;
  nextToken?: string;
  page?: number;
  pageSize?: number;
  rows?: ReadMessageListResponseBodyDataRows[];
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      page: 'Page',
      pageSize: 'PageSize',
      rows: 'Rows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      maxResults: 'number',
      nextToken: 'string',
      page: 'number',
      pageSize: 'number',
      rows: { 'type': 'array', 'itemType': ReadMessageListResponseBodyDataRows },
    };
  }

  validate() {
    if(Array.isArray(this.rows)) {
      $dara.Model.validateArray(this.rows);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

