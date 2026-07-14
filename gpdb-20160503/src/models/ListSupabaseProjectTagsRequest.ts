// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSupabaseProjectTagsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. The tag key must be 1 to 64 characters in length.
   * 
   * Tag.N is used to exactly match Supabase instances that have the specified tags bound. A tag is a key-value pair.
   * 
   * Valid values of N: 1 to 20.
   * 
   * - If you specify only Tag.N.Key, all instances associated with the specified tag key are returned.
   * - If you specify only Tag.N.Value, the error message `InvalidParameter.TagValue` is returned.
   * - If you specify multiple tag key-value pairs at the same time, only instances that match all the specified tag key-value pairs are returned.
   * 
   * @example
   * test-key
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The tag value must be 1 to 128 characters in length.
   * 
   * Valid values of N: 1 to 20.
   * 
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSupabaseProjectTagsRequest extends $dara.Model {
  /**
   * @remarks
   * The token for the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * Region ID
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The instance ID.
   * > You must specify at least one of ResourceId and Tag.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. Set the value to instance.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of tags.
   * > You must specify at least one of ResourceId and Tag.
   */
  tag?: ListSupabaseProjectTagsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListSupabaseProjectTagsRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

