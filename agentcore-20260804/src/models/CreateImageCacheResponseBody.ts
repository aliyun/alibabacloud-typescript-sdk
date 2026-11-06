// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImageCacheResponseBodyDataError extends $dara.Model {
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
   * Image cache creation failed. Try again
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

export class CreateImageCacheResponseBodyData extends $dara.Model {
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
  error?: CreateImageCacheResponseBodyDataError;
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
   * The image cache status.
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
      error: CreateImageCacheResponseBodyDataError,
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

export class CreateImageCacheResponseBody extends $dara.Model {
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
   * The result of creating the image cache.
   * 
   * This parameter is required.
   */
  data?: CreateImageCacheResponseBodyData;
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
   * The request ID, which is used for troubleshooting.
   * 
   * This parameter is required.
   * 
   * @example
   * req-example
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. A successful request does not mean that the cache creation is complete.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateImageCacheResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

