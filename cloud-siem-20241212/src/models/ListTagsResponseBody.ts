// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagsResponseBodyTags extends $dara.Model {
  /**
   * @remarks
   * The number of quick queries returned on the current page.
   * 
   * @example
   * 8
   */
  count?: number;
  /**
   * @remarks
   * The key of the tag to query. You can specify multiple keys. N is a positive integer.
   * 
   * @example
   * False
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of results to return when using NextToken-based pagination. Valid values: 1 to 100. Default value: 50.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next query. Leave this parameter empty for the first query or if no more results exist. If a next query is available, set this parameter to the NextToken value returned by the previous API call.
   * 
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * The entity tags. The value is a JSON array string in the following format:
   * 
   * `"[{"tagKey1":"tagValue1"},{"tagKey2":"tagValue2"}]"`
   */
  tags?: ListTagsResponseBodyTags[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      tags: { 'type': 'array', 'itemType': ListTagsResponseBodyTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

