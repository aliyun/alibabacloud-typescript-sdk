// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagCloudResourcesResponseBodyFailedResourcesTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * System/Scheduler/STOP_NEW_USER_CONNECTION
   */
  key?: string;
  /**
   * @remarks
   * The tag type.
   * 
   * @example
   * System
   */
  scope?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * true
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

export class TagCloudResourcesResponseBodyFailedResources extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * TAG_KEY_DUPLICATED
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Duplicate tag keys exist.
   */
  message?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * aig-001
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
  tags?: TagCloudResourcesResponseBodyFailedResourcesTags[];
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
      tags: { 'type': 'array', 'itemType': TagCloudResourcesResponseBodyFailedResourcesTags },
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

export class TagCloudResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of failed resources and tag information.
   */
  failedResources?: TagCloudResourcesResponseBodyFailedResources[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
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
      failedResources: { 'type': 'array', 'itemType': TagCloudResourcesResponseBodyFailedResources },
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

