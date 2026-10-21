// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageCacheResponseBodyDataError extends $dara.Model {
  /**
   * @remarks
   * The secure and non-empty error code for the current creation failure.
   * 
   * This parameter is required.
   * 
   * @example
   * ACSCacheBuildFailed
   */
  code?: string;
  /**
   * @remarks
   * The secure and non-empty display message for the creation failure, excluding credentials, internal addresses, or stack traces.
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

export class GetImageCacheResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The source ACR Enterprise instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-example
   */
  acrInstanceId?: string;
  /**
   * @remarks
   * The number of unique agents in the current workspace that have useImageCache set to true and are associated with this logical resource. The value is greater than or equal to 0. This uses the same collection as the imageCacheId filter in ListAllAgents. Disabled agents are not counted, regardless of the number of occupied instances.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  agentCount?: number;
  /**
   * @remarks
   * The actual cache size in bytes. The known value is greater than or equal to 0. If unknown, the value is null. The compressed size of the source image cannot be used as a substitute.
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
   * Indicates whether deletion is allowed. The value is true if there are no configuration references with the switch enabled, no valid instances occupying the resource, and the resource is not being deleted in the current workspace. If the reference status is unknown, the query fails instead of allowing deletion by default.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  canDelete?: boolean;
  /**
   * @remarks
   * The creation time of the logical resource in the current workspace, in RFC3339 format with time zone. Content updates for the latest tag do not refresh this time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-10-10T00:00:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The reason why deletion is blocked. The value is null if canDelete is true. Otherwise, the value is returned based on the priority of DELETING, AGENT_ENABLED, and INSTANCES_RELEASING. Even if the agent count is 0, old instances may still occupy the resource.
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
   * The current content digest in the sha256: format followed by a 64-character lowercase hexadecimal string. It only describes the currently registered content and does not prove that old instances have been switched.
   * 
   * This parameter is required.
   * 
   * @example
   * sha256:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
   */
  digest?: string;
  /**
   * @remarks
   * The cache failure reason. This must be a non-null object when the status is FAILED, and null for other statuses. It only describes the current content and the current creation round.
   * 
   * This parameter is required.
   * 
   * **if can be null:**
   * true
   */
  error?: GetImageCacheResponseBodyDataError;
  /**
   * @remarks
   * The logical resource ID manageable by the current workspace, not the shared physical cache ID.
   * 
   * This parameter is required.
   * 
   * @example
   * img-example
   */
  imageId?: string;
  /**
   * @remarks
   * The source image domain name, excluding the protocol, path, and credentials.
   * 
   * This parameter is required.
   * 
   * @example
   * example-registry.cn-hangzhou.cr.aliyuncs.com
   */
  registry?: string;
  /**
   * @remarks
   * The source image repository path in the namespace/repository format, which includes the namespace.
   * 
   * This parameter is required.
   * 
   * @example
   * team/app
   */
  repository?: string;
  /**
   * @remarks
   * The image cache status. Valid values:
   * - PENDING: Creating.
   * - READY: Available.
   * - FAILED: Abnormal.
   * - DELETING: Deleting in the current workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * The source image tag with case preserved. Regular tags cannot be registered with different digests, except for the exact lowercase latest tag.
   * 
   * This parameter is required.
   * 
   * @example
   * v1
   */
  tag?: string;
  /**
   * @remarks
   * The workspace ID, which must match the requested workspace. Resources with the same content from other workspaces are not returned.
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
      error: GetImageCacheResponseBodyDataError,
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

export class GetImageCacheResponseBody extends $dara.Model {
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
   * The query result of the image cache details.
   * 
   * This parameter is required.
   */
  data?: GetImageCacheResponseBodyData;
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
   * Indicates whether the request is successful. This does not indicate that the cache creation is complete.
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
      data: GetImageCacheResponseBodyData,
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

