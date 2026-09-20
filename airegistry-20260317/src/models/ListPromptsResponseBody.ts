// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPromptsResponseBodyDataPageItems extends $dara.Model {
  /**
   * @remarks
   * The list of business tags.
   */
  bizTags?: string[];
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test prompt
   */
  description?: string;
  /**
   * @remarks
   * The version number of the draft version of the prompt. This value is empty if no draft version exists.
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
   * 2026-04-22 11:51:03
   */
  gmtModified?: number;
  /**
   * @remarks
   * The mapping between prompt versions and labels.
   */
  labels?: { [key: string]: string };
  /**
   * @remarks
   * The latest version number of the prompt.
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
   * customer
   */
  promptKey?: string;
  /**
   * @remarks
   * The version number of the prompt version that is under review. This value is empty if no version is under review.
   * 
   * @example
   * 0.0.1
   */
  reviewingVersion?: string;
  /**
   * @remarks
   * The schema version of the prompt.
   * 
   * @example
   * 1
   */
  schemaVersion?: number;
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
    };
  }

  validate() {
    if(Array.isArray(this.bizTags)) {
      $dara.Model.validateArray(this.bizTags);
    }
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPromptsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of prompts.
   */
  pageItems?: ListPromptsResponseBodyDataPageItems[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of available pages.
   * 
   * @example
   * 1
   */
  pagesAvailable?: number;
  /**
   * @remarks
   * The total number of prompts.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageItems: 'PageItems',
      pageNumber: 'PageNumber',
      pagesAvailable: 'PagesAvailable',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageItems: { 'type': 'array', 'itemType': ListPromptsResponseBodyDataPageItems },
      pageNumber: 'number',
      pagesAvailable: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.pageItems)) {
      $dara.Model.validateArray(this.pageItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPromptsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result.
   */
  data?: ListPromptsResponseBodyData;
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
      data: ListPromptsResponseBodyData,
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

