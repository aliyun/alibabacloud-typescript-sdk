// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentSpecResponseBodyDataVersions extends $dara.Model {
  /**
   * @remarks
   * The version author.
   * 
   * @example
   * alice
   */
  author?: string;
  /**
   * @remarks
   * The creation time. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1787671022000
   */
  createTime?: number;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * A sample description that explains the purpose of the resource
   */
  description?: string;
  /**
   * @remarks
   * The number of downloads.
   * 
   * @example
   * 10
   */
  downloadCount?: number;
  /**
   * @remarks
   * The publish pipeline information.
   * 
   * @example
   * {"status":"SUCCESS"}
   */
  publishPipelineInfo?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * The update time. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1787671022000
   */
  updateTime?: number;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 1.0.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      author: 'author',
      createTime: 'createTime',
      description: 'description',
      downloadCount: 'downloadCount',
      publishPipelineInfo: 'publishPipelineInfo',
      status: 'status',
      updateTime: 'updateTime',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      author: 'string',
      createTime: 'number',
      description: 'string',
      downloadCount: 'number',
      publishPipelineInfo: 'string',
      status: 'string',
      updateTime: 'number',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentSpecResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The business tags.
   * 
   * @example
   * Sample property value
   */
  bizTags?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * A sample description that explains the purpose of the resource
   */
  description?: string;
  /**
   * @remarks
   * The number of downloads.
   * 
   * @example
   * 10
   */
  downloadCount?: number;
  /**
   * @remarks
   * The version that is currently being edited.
   * 
   * @example
   * 1.0.0
   */
  editingVersion?: string;
  /**
   * @remarks
   * Indicates whether the AgentSpec is enabled.
   */
  enable?: boolean;
  /**
   * @remarks
   * The source.
   * 
   * @example
   * UPLOAD
   */
  from?: string;
  /**
   * @remarks
   * The version labels.
   */
  labels?: { [key: string]: string };
  /**
   * @remarks
   * The name.
   * 
   * @example
   * agentspec-example
   */
  name?: string;
  /**
   * @remarks
   * The number of online versions.
   * 
   * @example
   * 1
   */
  onlineCnt?: number;
  /**
   * @remarks
   * The version that is currently under review.
   * 
   * @example
   * 1.0.0
   */
  reviewingVersion?: string;
  /**
   * @remarks
   * The visibility scope.
   * 
   * @example
   * PRIVATE
   */
  scope?: string;
  /**
   * @remarks
   * The update time. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1787671022000
   */
  updateTime?: number;
  /**
   * @remarks
   * The list of version summaries.
   */
  versions?: GetAgentSpecResponseBodyDataVersions[];
  static names(): { [key: string]: string } {
    return {
      bizTags: 'bizTags',
      description: 'description',
      downloadCount: 'downloadCount',
      editingVersion: 'editingVersion',
      enable: 'enable',
      from: 'from',
      labels: 'labels',
      name: 'name',
      onlineCnt: 'onlineCnt',
      reviewingVersion: 'reviewingVersion',
      scope: 'scope',
      updateTime: 'updateTime',
      versions: 'versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizTags: 'string',
      description: 'string',
      downloadCount: 'number',
      editingVersion: 'string',
      enable: 'boolean',
      from: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      name: 'string',
      onlineCnt: 'number',
      reviewingVersion: 'string',
      scope: 'string',
      updateTime: 'number',
      versions: { 'type': 'array', 'itemType': GetAgentSpecResponseBodyDataVersions },
    };
  }

  validate() {
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    if(Array.isArray(this.versions)) {
      $dara.Model.validateArray(this.versions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentSpecResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: GetAgentSpecResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A1B2C3D4-E5F6-47A8-90AB-CDEF12345678
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetAgentSpecResponseBodyData,
      requestId: 'string',
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

