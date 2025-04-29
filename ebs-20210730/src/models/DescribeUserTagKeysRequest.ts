// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserTagKeysRequest extends $dara.Model {
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
   * The query token returned by this call (Token).
   * 
   * @example
   * f07b150eadfa1d7a
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region to which the resource belongs. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to view the latest list of Alibaba Cloud regions.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The tagKey for filtering the query.
   * 
   * @example
   * tagKey
   */
  tagFilterKey?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      tagFilterKey: 'TagFilterKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      tagFilterKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

