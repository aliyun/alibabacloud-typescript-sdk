// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPublicMediaBasicInfosResponseBodyMediaInfos } from "./ListPublicMediaBasicInfosResponseBodyMediaInfos";


export class ListPublicMediaBasicInfosResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 2
   */
  maxResults?: number;
  /**
   * @remarks
   * The media assets that meet the specified conditions.
   */
  mediaInfos?: ListPublicMediaBasicInfosResponseBodyMediaInfos[];
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
   * The total number of media assets that meet the specified conditions.
   * 
   * @example
   * 2
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
      mediaInfos: { 'type': 'array', 'itemType': ListPublicMediaBasicInfosResponseBodyMediaInfos },
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

