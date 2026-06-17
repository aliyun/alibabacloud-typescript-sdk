// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSupabaseProjectTagsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. The key can be 1 to 64 characters in length.
   * 
   * The `Tag.N` parameter specifies a key-value pair to filter Supabase instances.
   * 
   * N is an integer from 1 to 20.
   * 
   * - If you specify only `Tag.N.Key`, the operation returns all instances that have the specified tag key.
   * 
   * - If you specify only `Tag.N.Value`, an `InvalidParameter.TagValue` error is returned.
   * 
   * - If you specify multiple tag key-value pairs, the operation returns only Supabase instances that match all the specified pairs.
   * 
   * @example
   * test-key
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The value can be 1 to 128 characters in length.
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
   * The token for the next page of results. This token is returned in the `NextToken` parameter of a previous request.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * > You must specify at least one of the `ResourceId` and `Tag` parameters.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. Set the value to `instance`.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * A list of tags.
   * 
   * > You must specify at least one of the `ResourceId` and `Tag` parameters.
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

