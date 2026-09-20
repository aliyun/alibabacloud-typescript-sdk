// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSkillDetailResponseBodyDataVersions extends $dara.Model {
  /**
   * @remarks
   * The author.
   * 
   * @example
   * 22618
   */
  author?: string;
  /**
   * @remarks
   * The version commit message.
   * 
   * @example
   * Description of version 1
   */
  commitMsg?: string;
  /**
   * @remarks
   * The timestamp when the file was created, in milliseconds.
   * 
   * @example
   * 2025-12-02T02:12:01Z
   */
  createTime?: number;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * dataphin_300067022_pre
   */
  description?: string;
  /**
   * @remarks
   * The number of downloads.
   * 
   * @example
   * 100
   */
  downloadCount?: number;
  /**
   * @remarks
   * The skill review information.
   * 
   * @example
   * {
   *   "executionId": "54408ebe-3c19-4e2e-82a3-f400cedfcd24",
   *   "status": "APPROVED",
   *   "pipeline": [
   *     {
   *       "nodeId": "fence",
   *       "executedAt": "2026-05-21T07:42:24.684194457Z",
   *       "passed": true,
   *       "messageType": "json",
   *       "message": {
   *         "resultCode": "PASS_PARTIAL_SKIP",
   *         "reports": [
   *           {
   *             "file": "SKILL.md",
   *             "taskId": "E25BDA44-6E10-51AF-B6AB-417EBB4CEF40",
   *             "riskLevel": "none"
   *           },
   *           {
   *             "file": "pdf-3/presentation.pptx",
   *             "taskId": "BEEC2D66-B9AE-5C4F-828D-BFAB6E561891",
   *             "riskLevel": "skip",
   *             "errorCode": "500",
   *             "errorMessage": "Scan failed. Please contact us through the online service."
   *           }
   *         ]
   *       },
   *       "checkpoints": [
   *         {
   *           "title": "promptAttack",
   *           "passed": true
   *         },
   *         {
   *           "title": "contentModeration",
   *           "passed": true
   *         }
   *       ],
   *       "durationMs": 18933
   *     }
   *   ]
   * }
   */
  publishPipelineInfo?: string;
  /**
   * @remarks
   * The resource status.
   * 
   * @example
   * online
   */
  status?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2021-05-06T06:37Z
   */
  updateTime?: number;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 2017-08-01
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      author: 'Author',
      commitMsg: 'CommitMsg',
      createTime: 'CreateTime',
      description: 'Description',
      downloadCount: 'DownloadCount',
      publishPipelineInfo: 'PublishPipelineInfo',
      status: 'Status',
      updateTime: 'UpdateTime',
      version: 'Version',
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
   * test
   */
  bizTags?: string;
  /**
   * @remarks
   * The skill description.
   * 
   * @example
   * kms-rds-rduphoenix-val-mysql kms key
   */
  description?: string;
  /**
   * @remarks
   * The total number of downloads.
   * 
   * @example
   * 100
   */
  downloadCount?: number;
  /**
   * @remarks
   * The draft mode. Valid values:
   * - VERSIONED: Numbered mode. Each draft corresponds to a specific version number.
   * - HEAD: Workspace mode. A permanent draft workspace overwrites in place and publishes version snapshots.
   * 
   * @example
   * HEAD
   */
  draftMode?: string;
  /**
   * @remarks
   * The version that is being edited.
   * 
   * @example
   * 0.0.3
   */
  editingVersion?: string;
  /**
   * @remarks
   * Indicates whether the skill is enabled.
   * 
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @remarks
   * The source tag.
   * 
   * @example
   * aqs
   */
  from?: string;
  /**
   * @remarks
   * The version label mapping.
   */
  labels?: { [key: string]: string };
  /**
   * @remarks
   * The skill name.
   * 
   * @example
   * 0521B历史1
   */
  name?: string;
  /**
   * @remarks
   * The namespace ID.
   * 
   * @example
   * cn-beijing:beta
   */
  namespaceId?: string;
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
   * The UID of the owner.
   * 
   * @example
   * 199458752209xxxx
   */
  owner?: string;
  /**
   * @remarks
   * The version that is under review.
   * 
   * @example
   * 0.0.2
   */
  reviewingVersion?: string;
  /**
   * @remarks
   * The visibility scope.
   * 
   * @example
   * PUBLIC
   */
  scope?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2021-05-06T06:37Z
   */
  updateTime?: number;
  /**
   * @remarks
   * The list of all version summaries.
   */
  versions?: GetSkillDetailResponseBodyDataVersions[];
  /**
   * @remarks
   * Indicates whether the skill can be edited.
   * 
   * @example
   * true
   */
  writeable?: boolean;
  static names(): { [key: string]: string } {
    return {
      bizTags: 'BizTags',
      description: 'Description',
      downloadCount: 'DownloadCount',
      draftMode: 'DraftMode',
      editingVersion: 'EditingVersion',
      enable: 'Enable',
      from: 'From',
      labels: 'Labels',
      name: 'Name',
      namespaceId: 'NamespaceId',
      onlineCnt: 'OnlineCnt',
      owner: 'Owner',
      reviewingVersion: 'ReviewingVersion',
      scope: 'Scope',
      updateTime: 'UpdateTime',
      versions: 'Versions',
      writeable: 'Writeable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizTags: 'string',
      description: 'string',
      downloadCount: 'number',
      draftMode: 'string',
      editingVersion: 'string',
      enable: 'boolean',
      from: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      name: 'string',
      namespaceId: 'string',
      onlineCnt: 'number',
      owner: 'string',
      reviewingVersion: 'string',
      scope: 'string',
      updateTime: 'number',
      versions: { 'type': 'array', 'itemType': GetSkillDetailResponseBodyDataVersions },
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
   * The detailed information of the skill.
   */
  data?: GetSkillDetailResponseBodyData;
  /**
   * @remarks
   * The unique request ID generated by Alibaba Cloud for this request.
   * 
   * @example
   * C5272879-3C44-5E5A-8056-CB4E8EB36DCD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
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

