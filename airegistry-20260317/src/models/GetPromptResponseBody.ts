// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPromptResponseBodyDataVersionDetails extends $dara.Model {
  commitMsg?: string;
  gmtModified?: number;
  promptKey?: string;
  srcUser?: string;
  status?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      commitMsg: 'CommitMsg',
      gmtModified: 'GmtModified',
      promptKey: 'PromptKey',
      srcUser: 'SrcUser',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commitMsg: 'string',
      gmtModified: 'number',
      promptKey: 'string',
      srcUser: 'string',
      status: 'string',
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

export class GetPromptResponseBodyData extends $dara.Model {
  bizTags?: string[];
  description?: string;
  editingVersion?: string;
  gmtModified?: number;
  labels?: { [key: string]: string };
  latestVersion?: string;
  onlineCnt?: number;
  promptKey?: string;
  reviewingVersion?: string;
  schemaVersion?: number;
  versionDetails?: GetPromptResponseBodyDataVersionDetails[];
  versions?: string[];
  static names(): { [key: string]: string } {
    return {
      bizTags: 'BizTags',
      description: 'Description',
      editingVersion: 'EditingVersion',
      gmtModified: 'GmtModified',
      labels: 'Labels',
      latestVersion: 'LatestVersion',
      onlineCnt: 'OnlineCnt',
      promptKey: 'PromptKey',
      reviewingVersion: 'ReviewingVersion',
      schemaVersion: 'SchemaVersion',
      versionDetails: 'VersionDetails',
      versions: 'Versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizTags: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      editingVersion: 'string',
      gmtModified: 'number',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      latestVersion: 'string',
      onlineCnt: 'number',
      promptKey: 'string',
      reviewingVersion: 'string',
      schemaVersion: 'number',
      versionDetails: { 'type': 'array', 'itemType': GetPromptResponseBodyDataVersionDetails },
      versions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.bizTags)) {
      $dara.Model.validateArray(this.bizTags);
    }
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    if(Array.isArray(this.versionDetails)) {
      $dara.Model.validateArray(this.versionDetails);
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

export class GetPromptResponseBody extends $dara.Model {
  data?: GetPromptResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetPromptResponseBodyData,
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

