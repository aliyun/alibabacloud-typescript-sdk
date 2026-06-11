// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSkillDetailResponseBodyDataVersions extends $dara.Model {
  author?: string;
  commitMsg?: string;
  createTime?: number;
  description?: string;
  downloadCount?: number;
  publishPipelineInfo?: string;
  status?: string;
  updateTime?: number;
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
  bizTags?: string;
  description?: string;
  downloadCount?: number;
  editingVersion?: string;
  enable?: boolean;
  from?: string;
  labels?: { [key: string]: string };
  name?: string;
  namespaceId?: string;
  onlineCnt?: number;
  owner?: string;
  reviewingVersion?: string;
  scope?: string;
  updateTime?: number;
  versions?: GetSkillDetailResponseBodyDataVersions[];
  writeable?: boolean;
  static names(): { [key: string]: string } {
    return {
      bizTags: 'BizTags',
      description: 'Description',
      downloadCount: 'DownloadCount',
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
  data?: GetSkillDetailResponseBodyData;
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

