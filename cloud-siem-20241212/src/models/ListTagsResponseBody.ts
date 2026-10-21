// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagsResponseBodyTags extends $dara.Model {
  /**
   * @remarks
   * The number of custom queries returned on the current page.
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
   * The maximum number of entries to return when you use NextToken for pagination. Valid values: 1 to 100. Default value: 50.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. If not all results are returned in a query, a value is returned for NextToken. In the next query, set NextToken to this value.
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

