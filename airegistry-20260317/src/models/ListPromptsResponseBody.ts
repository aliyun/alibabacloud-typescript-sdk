// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPromptsResponseBodyDataPageItems extends $dara.Model {
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
  pageItems?: ListPromptsResponseBodyDataPageItems[];
  pageNumber?: number;
  pagesAvailable?: number;
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
  data?: ListPromptsResponseBodyData;
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

