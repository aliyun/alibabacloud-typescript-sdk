// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UntagCloudResourcesResponseBodyFailedResourcesTags } from "./UntagCloudResourcesResponseBodyFailedResourcesTags";


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
   * The resource IDs.
   * 
   * @example
   * aig-00000001
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the cloud resource.
   * 
   * Valid values:
   * 
   * *   AppId: app ID.
   * *   WyId: Alibaba Cloud Workspace user ID.
   * *   AppInstanceGroupId: delivery group ID.
   * *   AliUid: tenant ID.
   * 
   * @example
   * AppInstanceGroupId
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags that failed to be removed from the cloud resources.
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

