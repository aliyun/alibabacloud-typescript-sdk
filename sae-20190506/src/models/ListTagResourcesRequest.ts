// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * A query can return a maximum of 50 results. If the number of results exceeds this limit, the response includes a NextToken. To retrieve the next page of results, pass this token in your next request.
   * 
   * @example
   * A2RN
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The resource IDs, specified as a JSON array of strings. This parameter is required if the **Tags** parameter is not specified.
   * 
   * @example
   * ["d42921c4-5433-4abd-8075-0e536f8b****"]
   */
  resourceIds?: string;
  /**
   * @remarks
   * The resource type. Only `application` is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * application
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags used to filter resources. This parameter is required if the **ResourceIds** parameter is not specified. A tag is a key-value pair.
   * 
   * - **key**: The tag key. The key can be 1 to 128 characters in length.
   * 
   * - **value**: The tag value. The value can be 1 to 128 characters in length.
   * 
   * Tag keys and tag values are case-sensitive. If you specify multiple tags, the operation returns only resources that have all the specified tags.
   * 
   * A tag key cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.
   * 
   * @example
   * [{"key":"k1","value":"v1"}]
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceIds: 'ResourceIds',
      resourceType: 'ResourceType',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      regionId: 'string',
      resourceIds: 'string',
      resourceType: 'string',
      tags: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

