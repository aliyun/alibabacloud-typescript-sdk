// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSharedResourcesResponseBodySharedResources extends $dara.Model {
  /**
   * @remarks
   * The time when the shared resource was associated with the resource share.
   * 
   * @example
   * 2020-12-07T07:39:02.921Z
   */
  createTime?: string;
  resourceArn?: string;
  /**
   * @remarks
   * The ID of the shared resource.
   * 
   * @example
   * vsw-bp1upw03qyz8n7us9****
   */
  resourceId?: string;
  /**
   * @remarks
   * The ID of the resource share.
   * 
   * @example
   * rs-6GRmdD3X****
   */
  resourceShareId?: string;
  /**
   * @remarks
   * The status of the shared resource. This parameter is returned only when you query the resources that other accounts share with you.
   * 
   * Valid values:
   * 
   * *   Available: The resource is available.
   * *   ZonalResourceInaccessible: The resource is unavailable in the current zone.
   * *   LimitExceeded: The resource is unavailable because the maximum number of resources that other accounts can share with you exceeds the upper limit.
   * *   Unavailable: The resource is unavailable.
   * 
   * @example
   * Available
   */
  resourceStatus?: string;
  /**
   * @remarks
   * The cause of the association failure.
   * 
   * @example
   * The reason for the association failure.
   */
  resourceStatusMessage?: string;
  /**
   * @remarks
   * The type of the shared resource.
   * 
   * For more information about the types of resources that can be shared, see [Services that work with Resource Sharing](https://help.aliyun.com/document_detail/450526.html).
   * 
   * @example
   * VSwitch
   */
  resourceType?: string;
  /**
   * @remarks
   * The time when the association of the shared resource was updated.
   * 
   * @example
   * 2020-12-07T07:39:02.921Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      resourceArn: 'ResourceArn',
      resourceId: 'ResourceId',
      resourceShareId: 'ResourceShareId',
      resourceStatus: 'ResourceStatus',
      resourceStatusMessage: 'ResourceStatusMessage',
      resourceType: 'ResourceType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      resourceArn: 'string',
      resourceId: 'string',
      resourceShareId: 'string',
      resourceStatus: 'string',
      resourceStatusMessage: 'string',
      resourceType: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSharedResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The token that is used to initiate the next request. If the response of the current request is truncated, you can use the token to initiate another request and obtain the remaining records.
   * 
   * @example
   * TGlzdFJlc291cm****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04677DCA-7C33-464B-8811-1B1DA3C3D197
   */
  requestId?: string;
  /**
   * @remarks
   * The information of the shared resources.
   */
  sharedResources?: ListSharedResourcesResponseBodySharedResources[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      sharedResources: 'SharedResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      sharedResources: { 'type': 'array', 'itemType': ListSharedResourcesResponseBodySharedResources },
    };
  }

  validate() {
    if(Array.isArray(this.sharedResources)) {
      $dara.Model.validateArray(this.sharedResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

