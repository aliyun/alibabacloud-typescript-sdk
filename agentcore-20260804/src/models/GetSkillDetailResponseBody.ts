// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSkillDetailResponseBodyDataVersions extends $dara.Model {
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
   * The commit message.
   * 
   * @example
   * Update documentation
   */
  commitMsg?: string;
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
   * The download count.
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
      commitMsg: 'commitMsg',
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
      commitMsg: 'string',
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

export class GetSkillDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The business tag JSON array string.
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
   * The total number of downloads.
   * 
   * @example
   * 10
   */
  downloadCount?: number;
  /**
   * @remarks
   * The version currently being edited.
   * 
   * @example
   * 1.0.0
   */
  editingVersion?: string;
  /**
   * @remarks
   * Indicates whether the Skill is enabled.
   */
  enable?: boolean;
  /**
   * @remarks
   * The source tag.
   * 
   * @example
   * UPLOAD
   */
  from?: string;
  /**
   * @remarks
   * The label mapping.
   */
  labels?: { [key: string]: string };
  /**
   * @remarks
   * The name.
   * 
   * @example
   * skill-example
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
   * The resource owner.
   * 
   * @example
   * alice
   */
  owner?: string;
  /**
   * @remarks
   * The version currently under review.
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
   * The list of all version summaries.
   */
  versions?: GetSkillDetailResponseBodyDataVersions[];
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * ws-1234567890abcdef
   */
  workspaceId?: string;
  /**
   * @remarks
   * Indicates whether the current user has write permissions.
   */
  writeable?: boolean;
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
      owner: 'owner',
      reviewingVersion: 'reviewingVersion',
      scope: 'scope',
      updateTime: 'updateTime',
      versions: 'versions',
      workspaceId: 'workspaceId',
      writeable: 'writeable',
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
      owner: 'string',
      reviewingVersion: 'string',
      scope: 'string',
      updateTime: 'number',
      versions: { 'type': 'array', 'itemType': GetSkillDetailResponseBodyDataVersions },
      workspaceId: 'string',
      writeable: 'boolean',
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

export class GetSkillDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: GetSkillDetailResponseBodyData;
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
      data: GetSkillDetailResponseBodyData,
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

