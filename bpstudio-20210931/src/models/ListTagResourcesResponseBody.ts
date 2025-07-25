// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesResponseBodyTagResources extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * MW7T1820ACJX9BI7
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type. Valid values: application and template.
   * 
   * @example
   * application
   */
  resourceType?: string;
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * Key
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * Value
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
   * The HTTP status code. A value of 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * bp.java.nopowerContact
   */
  message?: string;
  /**
   * @remarks
   * The returned value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results. If the NextToken parameter is empty, no next page exists.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 847C9D0A-BABD-589C-8A9C-6464409EDED9
   */
  requestId?: string;
  /**
   * @remarks
   * The tags that are added to the resources.
   */
  tagResources?: ListTagResourcesResponseBodyTagResources[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
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

