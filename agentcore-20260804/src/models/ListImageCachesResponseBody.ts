// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImageCachesResponseBodyItemsError extends $dara.Model {
  /**
   * @remarks
   * The error code for the creation failure.
   * 
   * This parameter is required.
   * 
   * @example
   * ACSCacheBuildFailed
   */
  code?: string;
  /**
   * @remarks
   * The description of the creation failure.
   * 
   * This parameter is required.
   * 
   * @example
   * Image cache creation failed. Please try again
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImageCachesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The ID of the source ACR instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-example
   */
  acrInstanceId?: string;
  /**
   * @remarks
   * The number of agents that use the cache.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  agentCount?: number;
  /**
   * @remarks
   * The size of the cache in bytes.
   * 
   * This parameter is required.
   * 
   * @example
   * 1073741824
   * 
   * **if can be null:**
   * true
   */
  cacheSizeBytes?: number;
  /**
   * @remarks
   * Indicates whether deletion is allowed.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  canDelete?: boolean;
  /**
   * @remarks
   * The time when the resource was created. The time is in RFC 3339 format. The Z at the end of the example indicates the UTC time zone.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-10-10T00:00:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The reason why deletion is blocked.
   * 
   * This parameter is required.
   * 
   * @example
   * INSTANCES_RELEASING
   * 
   * **if can be null:**
   * true
   */
  deleteBlockReason?: string;
  /**
   * @remarks
   * The current content digest.
   * 
   * This parameter is required.
   * 
   * @example
   * sha256:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
   */
  digest?: string;
  /**
   * @remarks
   * The reason for the cache failure.
   * 
   * This parameter is required.
   * 
   * **if can be null:**
   * true
   */
  error?: ListImageCachesResponseBodyItemsError;
  /**
   * @remarks
   * The ID of the image cache.
   * 
   * This parameter is required.
   * 
   * @example
   * img-example
   */
  imageId?: string;
  /**
   * @remarks
   * The domain name of the source image.
   * 
   * This parameter is required.
   * 
   * @example
   * example-registry.cn-hangzhou.cr.aliyuncs.com
   */
  registry?: string;
  /**
   * @remarks
   * The repository path of the source image.
   * 
   * This parameter is required.
   * 
   * @example
   * team/app
   */
  repository?: string;
  /**
   * @remarks
   * The cache status.
   * 
   * This parameter is required.
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * The tag of the source image.
   * 
   * This parameter is required.
   * 
   * @example
   * v1
   */
  tag?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ws-example
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      acrInstanceId: 'acrInstanceId',
      agentCount: 'agentCount',
      cacheSizeBytes: 'cacheSizeBytes',
      canDelete: 'canDelete',
      createdAt: 'createdAt',
      deleteBlockReason: 'deleteBlockReason',
      digest: 'digest',
      error: 'error',
      imageId: 'imageId',
      registry: 'registry',
      repository: 'repository',
      status: 'status',
      tag: 'tag',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acrInstanceId: 'string',
      agentCount: 'number',
      cacheSizeBytes: 'number',
      canDelete: 'boolean',
      createdAt: 'string',
      deleteBlockReason: 'string',
      digest: 'string',
      error: ListImageCachesResponseBodyItemsError,
      imageId: 'string',
      registry: 'string',
      repository: 'string',
      status: 'string',
      tag: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.error && typeof (this.error as any).validate === 'function') {
      (this.error as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImageCachesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business response code.
   * 
   * This parameter is required.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * This parameter is required.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The records on the current page. If no matching items are found, an empty array is returned.
   * 
   * This parameter is required.
   */
  items?: ListImageCachesResponseBodyItems[];
  /**
   * @remarks
   * The actual page size used for this request. This is not the number of items on the current page.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The response message.
   * 
   * This parameter is required.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The opaque cursor for the next page. An empty string indicates that there are no more pages.
   * 
   * This parameter is required.
   * 
   * @example
   * opaque-token
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID used for troubleshooting.
   * 
   * This parameter is required.
   * 
   * @example
   * req-example
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. A successful request does not indicate that the cache creation is complete.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of records that match the current filter conditions. Do not use this value to determine whether the traversal is complete.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      httpStatusCode: 'httpStatusCode',
      items: 'items',
      maxResults: 'maxResults',
      message: 'message',
      nextToken: 'nextToken',
      requestId: 'requestId',
      success: 'success',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      items: { 'type': 'array', 'itemType': ListImageCachesResponseBodyItems },
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

