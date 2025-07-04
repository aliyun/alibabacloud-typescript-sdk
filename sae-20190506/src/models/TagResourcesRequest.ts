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
   * The IDs of resources. Separate multiple resource IDs with comma (,). This parameter is required if you do not specify the **Tags** parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * ["d42921c4-5433-4abd-8075-0e536f8b****"]
   */
  resourceIds?: string;
  /**
   * @remarks
   * The type of the resource. Set the value to `application`.
   * 
   * This parameter is required.
   * 
   * @example
   * application
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag in the format of a key-value pair. This parameter is required if you do not specify the **ResourceIds** parameter. The following parameters are involved:
   * 
   * *   **key**: the tag key. It cannot exceed 128 characters in length.
   * *   **value**: the tag value. It cannot exceed 128 characters in length.
   * 
   * Tag keys and tag values are case-sensitive. If you specify multiple tags, the system adds all the tags to the specified resources. Each tag key on a resource can have only one tag value. If you create a tag that has the same key as an existing tag, the value of the existing tag is overwritten.
   * 
   * Tag keys and tag values cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
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

