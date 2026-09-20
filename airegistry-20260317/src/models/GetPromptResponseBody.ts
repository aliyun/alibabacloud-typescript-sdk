// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPromptResponseBodyDataVersionDetails extends $dara.Model {
  /**
   * @remarks
   * The commit message of the version.
   * 
   * @example
   * This is a test Version
   */
  commitMsg?: string;
  /**
   * @remarks
   * The time when the version was last modified.
   * 
   * @example
   * 1627545952000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The unique identifier of the prompt.
   * 
   * @example
   * customer-service-qa
   */
  promptKey?: string;
  /**
   * @remarks
   * The creator of the version.
   * 
   * @example
   * admin
   */
  srcUser?: string;
  /**
   * @remarks
   * The version status. Valid values: draft and online.
   * 
   * @example
   * online
   */
  status?: string;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 0.0.1
   */
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
  /**
   * @remarks
   * The list of business tags.
   */
  bizTags?: string[];
  /**
   * @remarks
   * The description of the prompt.
   * 
   * @example
   * Prompt for test
   */
  description?: string;
  /**
   * @remarks
   * The version number of the draft version. This value is empty if no draft version exists.
   * 
   * @example
   * 0.0.1
   */
  editingVersion?: string;
  /**
   * @remarks
   * The time when the prompt was last modified.
   * 
   * @example
   * 2025-11-13T02:11:53Z
   */
  gmtModified?: number;
  /**
   * @remarks
   * The mapping between prompt labels and versions.
   */
  labels?: { [key: string]: string };
  /**
   * @remarks
   * The version number of the latest version of the prompt.
   * 
   * @example
   * 0.0.1
   */
  latestVersion?: string;
  /**
   * @remarks
   * The number of online versions of the prompt.
   * 
   * @example
   * 1
   */
  onlineCnt?: number;
  /**
   * @remarks
   * The unique identifier of the prompt.
   * 
   * @example
   * customer-service-qa
   */
  promptKey?: string;
  /**
   * @remarks
   * The version number of the prompt version that is under review.
   * 
   * @example
   * 0.0.1
   */
  reviewingVersion?: string;
  /**
   * @remarks
   * The schema version.
   * 
   * @example
   * 1.0
   */
  schemaVersion?: number;
  /**
   * @remarks
   * The list of version details.
   */
  versionDetails?: GetPromptResponseBodyDataVersionDetails[];
  /**
   * @remarks
   * The list of version numbers.
   */
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
  /**
   * @remarks
   * The returned result.
   */
  data?: GetPromptResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D9E87E66-9EF0-5C10-A5E6-924020A0C9B7
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

