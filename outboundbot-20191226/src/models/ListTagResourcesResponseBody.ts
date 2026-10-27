// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesResponseBodyTagResources extends $dara.Model {
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * b949ae1f-01dc-4191-ae5a-70fbe6772fd8
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key1
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value1
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
   * The status code of the operation.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message returned by the operation.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The token for the next query.
   * 
   * @example
   * b949ae1f-01dc-4191-ae5a-70fbe6772fd8
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The list of resources.
   */
  tagResources?: ListTagResourcesResponseBodyTagResources[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
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

