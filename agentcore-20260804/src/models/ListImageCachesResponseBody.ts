// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImageCachesResponseBodyItemsError extends $dara.Model {
  /**
   * @remarks
   * The secure and non-empty error code for the current creation attempt.
   * 
   * This parameter is required.
   * 
   * @example
   * ACSCacheBuildFailed
   */
  code?: string;
  /**
   * @remarks
   * The secure and non-empty description of the failure. It does not contain credentials, internal addresses, or stack traces.
   * 
   * This parameter is required.
   * 
   * @example
   * Failed to create the image cache. Please try again
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
   * The ID of the source ACR Enterprise instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-example
   */
  acrInstanceId?: string;
  /**
   * @remarks
   * The deduplicated number of agents in the current workspace that have useImageCache set to true and are associated with this logical resource. The value is greater than or equal to 0. This matches the set filtered by imageCacheId in ListAllAgents. Disabled agents are not counted, and this value is independent of the number of occupied instances.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  agentCount?: number;
  /**
   * @remarks
   * The actual cache size in bytes. The value is greater than or equal to 0 if known, or null if unknown. The compressed size of the source image cannot be used as a substitute.
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
   * Indicates whether the resource can be deleted. The value is true if no configuration references with the switch enabled exist in the current workspace, no valid instances are occupying the resource, and the resource is not being deleted. If the reference status is unknown, the query fails instead of defaulting to true.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  canDelete?: boolean;
  /**
   * @remarks
   * The creation time of the logical resource in the current workspace, in RFC 3339 format with the time zone. Content updates for the latest tag do not refresh this time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-10-10T00:00:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The reason why deletion is blocked. The value is null if canDelete is true. Otherwise, the value is returned based on the priority of DELETING, AGENT_ENABLED, and INSTANCES_RELEASING. Old instances may still occupy the resource even if the agent count is 0.
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
   * The digest in the sha256: format followed by a 64-character lowercase hexadecimal string. It only describes the currently registered content and does not indicate whether old instances have been switched.
   * 
   * This parameter is required.
   * 
   * @example
   * sha256:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
   */
  digest?: string;
  /**
   * @remarks
   * The cache failure details. It is a non-null object when the status is FAILED, and null for other statuses. It only describes the current content and the current creation attempt.
   * 
   * This parameter is required.
   * 
   * **if can be null:**
   * true
   */
  error?: ListImageCachesResponseBodyItemsError;
  /**
   * @remarks
   * The logical resource ID that can be managed in the current workspace. This is not the shared physical cache ID.
   * 
   * This parameter is required.
   * 
   * @example
   * img-example
   */
  imageId?: string;
  /**
   * @remarks
   * The domain name of the source image. It does not include the protocol, path, or credentials.
   * 
   * This parameter is required.
   * 
   * @example
   * example-registry.cn-hangzhou.cr.aliyuncs.com
   */
  registry?: string;
  /**
   * @remarks
   * The path of the source image repository in the namespace/repository format. The namespace is included.
   * 
   * This parameter is required.
   * 
   * @example
   * team/app
   */
  repository?: string;
  /**
   * @remarks
   * The status of the image cache. Valid values: PENDING (creating), READY (available), FAILED (abnormal), and DELETING (deleting in the current workspace).
   * 
   * This parameter is required.
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * The tag of the source image. It is case-sensitive. Regular tags cannot be registered with different digests, except for the exact lowercase \\"latest\\".
   * 
   * This parameter is required.
   * 
   * @example
   * v1
   */
  tag?: string;
  /**
   * @remarks
   * The workspace ID. It must be consistent with the requested workspace. Resources with the same content from other workspaces must not be returned.
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
   * The records on the current page. An empty array is returned if no matching items are found.
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
   * The opaque cursor for the next page. An empty string indicates that no more pages are available.
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
   * Indicates whether the request was successful. A value of true does not indicate that the cache creation is complete.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of records that match the current filter conditions. Do not use this value to determine whether all pages have been returned.
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

