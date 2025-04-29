// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserTagKeysResponseBody extends $dara.Model {
  /**
   * @remarks
   * Number of items per page in paginated queries. The maximum value is 100.
   * 
   * Default value:
   * 
   * - If no value is set or the set value is less than 10, the default is 10.
   * 
   * - If the set value is greater than 100, the default is 100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query. An empty NextToken indicates there are no more results.
   * 
   * @example
   * f07b150eadfa1d7a
   */
  nextToken?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * C123F94F-4E38-19AE-942A-A8D6F44F****
   */
  requestId?: string;
  /**
   * @remarks
   * List of matching tag keys.
   */
  tagKeys?: string[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagKeys: 'TagKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      tagKeys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tagKeys)) {
      $dara.Model.validateArray(this.tagKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

