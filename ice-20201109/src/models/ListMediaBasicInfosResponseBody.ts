// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListMediaBasicInfosResponseBodyMediaInfos } from "./ListMediaBasicInfosResponseBodyMediaInfos";


export class ListMediaBasicInfosResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries returned in the query.
   * 
   * @example
   * 2
   */
  maxResults?: number;
  /**
   * @remarks
   * The media assets that meet the specified conditions.
   */
  mediaInfos?: ListMediaBasicInfosResponseBodyMediaInfos[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * 8EqYpQbZ6Eh7+Zz8DxVYoQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******B7-7F87-4792-BFE9-63CD21******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      mediaInfos: 'MediaInfos',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      mediaInfos: { 'type': 'array', 'itemType': ListMediaBasicInfosResponseBodyMediaInfos },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.mediaInfos)) {
      $dara.Model.validateArray(this.mediaInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

