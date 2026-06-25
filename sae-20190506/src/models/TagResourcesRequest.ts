// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The resource IDs. You can specify up to 50 resource IDs in a JSON array. This parameter is required unless you specify the **Tags** parameter.
   * 
   * This parameter is required.
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
   * The key-value pairs of the tags. This parameter is required unless you specify the **ResourceIds** parameter. The following rules apply:
   * 
   * - **key**: The tag key. The key must be 1 to 128 characters in length.
   * 
   * - **value**: The tag value. The value must be 1 to 128 characters in length.
   * 
   * Tags are case-sensitive. If you specify multiple tags, they are created and bound to the specified resources. For a single resource, each tag key must be unique. If you specify a tag key that already exists for a resource, the operation updates the existing tag value.
   * 
   * A tag key cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.
   * 
   * @example
   * [{"key":"k1","value":"v1"}]
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceIds: 'ResourceIds',
      resourceType: 'ResourceType',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

