// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The pagination token. A single query returns up to 50 results. If the total number of results exceeds 50, a NextToken is returned. You can use this token in the next query to retrieve the remaining results.
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
   * The resource IDs. You can specify multiple resource IDs separated by commas (,). This parameter is required if you do not specify the **Tags** parameter.
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
   * The tag key-value pairs. This parameter is required if you do not specify the **ResourceIds** parameter.
   * - **key**: the tag key. The value must be 1 to 128 characters in length.
   * - **value**: the tag value. The value must be 1 to 128 characters in length.
   * 
   * Tag keys and values are case-sensitive. If you specify multiple tags, multiple tags are created and bound to the specified resource at the same time. A tag key on a resource can map to only one tag value. If you add a tag with an existing key, the tag value is updated to the new value.
   * 
   * The key and value cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
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

