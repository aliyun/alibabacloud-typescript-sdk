// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagCloudResourcesResponseBodyResourceTagsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * Resolution
   */
  key?: string;
  /**
   * @remarks
   * The tag type.
   * 
   * @example
   * Custom
   */
  scope?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * 1080p
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      scope: 'Scope',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      scope: 'string',
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

export class ListTagCloudResourcesResponseBodyResourceTags extends $dara.Model {
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * aig-0001
   */
  resourceId?: string;
  /**
   * @remarks
   * The cloud resource type.
   * 
   * @example
   * AppInstanceGroupId
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: ListTagCloudResourcesResponseBodyResourceTagsTags[];
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tags: { 'type': 'array', 'itemType': ListTagCloudResourcesResponseBodyResourceTagsTags },
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

export class ListTagCloudResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination token that indicates whether more results are available for the next query.
   * 
   * @example
   * AAAAAYRHtOLVQzCYj17y+OP7LZRrUJaF4rnBGQkWwMiVHlLZBB1w3Us37CVvhvyM0TXavA==
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of tags bound to the resources.
   */
  resourceTags?: ListTagCloudResourcesResponseBodyResourceTags[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      resourceTags: 'ResourceTags',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      resourceTags: { 'type': 'array', 'itemType': ListTagCloudResourcesResponseBodyResourceTags },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resourceTags)) {
      $dara.Model.validateArray(this.resourceTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

