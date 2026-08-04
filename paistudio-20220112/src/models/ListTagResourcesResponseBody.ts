// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesResponseBodyTagResources extends $dara.Model {
  /**
   * @remarks
   * Resource ID
   * 
   * @example
   * rgqssemfn6vjqqev
   */
  resourceId?: string;
  /**
   * @remarks
   * Resource type
   * 
   * @example
   * ResourceGroup
   */
  resourceType?: string;
  /**
   * @remarks
   * Tag key
   * 
   * @example
   * tagKey
   */
  tagKey?: string;
  /**
   * @remarks
   * Tag value
   * 
   * @example
   * tagValue
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Pagination token for the next page of results
   * 
   * @example
   * 3iEiu84Yk3TwHLzJV.usagf1Ain49xYKGoB6zffsDqPYZQQ5
   */
  nextToken?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * CE22EE94-8AFE-53B5-9C2C-B36207B1CBF9
   */
  requestId?: string;
  /**
   * @remarks
   * The list of resources.
   */
  tagResources?: ListTagResourcesResponseBodyTagResources[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagResources: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResources },
    };
  }

  validate() {
    if(Array.isArray(this.tagResources)) {
      $dara.Model.validateArray(this.tagResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

