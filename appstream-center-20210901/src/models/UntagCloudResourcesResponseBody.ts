// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagCloudResourcesResponseBodyFailedResourcesTags extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      scope: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagCloudResourcesResponseBodyFailedResources extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * UNTAG_RESOURCE_FAILED
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Failed to untag resource.
   */
  message?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * aig-00000001
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
   * The list of failed tag information.
   */
  tags?: UntagCloudResourcesResponseBodyFailedResourcesTags[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      resourceId: 'string',
      resourceType: 'string',
      tags: { 'type': 'array', 'itemType': UntagCloudResourcesResponseBodyFailedResourcesTags },
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

export class UntagCloudResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of failed resources and tag information.
   */
  failedResources?: UntagCloudResourcesResponseBodyFailedResources[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E25FC620-6B6F-12D2-A992-AD8727DC****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      failedResources: 'FailedResources',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedResources: { 'type': 'array', 'itemType': UntagCloudResourcesResponseBodyFailedResources },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.failedResources)) {
      $dara.Model.validateArray(this.failedResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

