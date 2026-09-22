// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. This parameter is required. The tag key is case-sensitive and must be 1 to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * Resolution
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The tag value is case-sensitive and can be up to 256 characters in length. If this parameter is not specified, the value of the tag key is not restricted, which means any tag value under the key is matched.
   * 
   * @example
   * 720p
   * 
   * **if can be null:**
   * true
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

export class ListTagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The paged query token. You do not need to specify this parameter for the first request. If the previous invoke returned a non-empty NextToken value, pass it in as-is to retrieve subsequent paging results.
   * 
   * @example
   * AAAAAYRHtOLVQzCYj17y+OP7LZRrUJaF4rnBGQkWwMiVHlLZBB1w3Us37CVvhvyM0TXavA==
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of resource IDs. A maximum of 50 resource IDs are supported.
   * 
   * If the resource type is delivery group, specify the delivery group ID (prefixed with `aig-`). You can call the ListAppInstanceGroup operation to obtain the delivery group ID.
   * 
   * > Specify at least one of ResourceId.N and Tag.N. If only ResourceId.N is specified, all tags bound to the specified resources are returned.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * - APPINSTANCEGROUP: delivery group.
   * 
   * This parameter is case-insensitive. Only this value is supported. If you specify other values, the error code `InvalidResourceType.Invalid` is returned.
   * 
   * This parameter is required.
   * 
   * @example
   * APPINSTANCEGROUP
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of tag conditions. A maximum of 20 tag conditions are supported.
   * 
   * > Specify at least one of ResourceId.N and Tag.N. Multiple tags have an AND relationship. Only resources that have all specified tags bound are returned.
   * 
   * **if can be null:**
   * true
   */
  tag?: ListTagResourcesRequestTag[];
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
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
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

