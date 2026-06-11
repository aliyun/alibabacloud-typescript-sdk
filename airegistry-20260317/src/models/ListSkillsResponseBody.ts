// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillsResponseBodyDataPageItems extends $dara.Model {
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
      writeable: 'boolean',
    };
  }

  validate() {
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillsResponseBodyData extends $dara.Model {
  pageItems?: ListSkillsResponseBodyDataPageItems[];
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
      pageItems: { 'type': 'array', 'itemType': ListSkillsResponseBodyDataPageItems },
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

export class ListSkillsResponseBody extends $dara.Model {
  data?: ListSkillsResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListSkillsResponseBodyData,
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

