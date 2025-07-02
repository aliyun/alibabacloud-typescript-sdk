// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListIpamsResponseBodyIpams } from "./ListIpamsResponseBodyIpams";


export class ListIpamsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The IPAMs.
   */
  ipams?: ListIpamsResponseBodyIpams[];
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If **NextToken** is empty, no next page exists.
   * *   If a value of **NextToken** is returned, the value indicates the token that is used for the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 23CA0A0B-B0F5-5495-B355-7D9A9203A46B
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      ipams: 'Ipams',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      ipams: { 'type': 'array', 'itemType': ListIpamsResponseBodyIpams },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ipams)) {
      $dara.Model.validateArray(this.ipams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

