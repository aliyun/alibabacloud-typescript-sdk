// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillsResponseBodyDataPageItems extends $dara.Model {
  /**
   * @remarks
   * The business label JSON array string.
   * 
   * @example
   * test
   */
  bizTags?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * secret for bbtadmin
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
   * 
   * - VERSIONED: numbered mode. Each draft corresponds to a specific version number.
   * - HEAD: workspace mode. A permanent draft workspace that overwrites in place and publishes version snapshots.
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
   * The label mapping.
   */
  labels?: { [key: string]: string };
  /**
   * @remarks
   * The name.
   * 
   * @example
   * OCR Brand
   */
  name?: string;
  /**
   * @remarks
   * The ID of the group or workspace to which the repository belongs.
   * 
   * @example
   * cn-hangzhou:creatulize-test
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
   * The account ID of the owner.
   * 
   * @example
   * manual
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
   * rd-yORclL
   */
  scope?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2025-03-05T19:24:43.798
   */
  updateTime?: number;
  /**
   * @remarks
   * Indicates whether the skill can be edited.
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
  /**
   * @remarks
   * The MCP server information.
   */
  pageItems?: ListSkillsResponseBodyDataPageItems[];
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
   * pagesAvailable.
   * 
   * @example
   * 10
   */
  pagesAvailable?: number;
  /**
   * @remarks
   * The total number of tasks.
   * 
   * @example
   * 0
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
  /**
   * @remarks
   * The list of rule information returned when the call succeeds. For more information, see **RuleInfo**.
   * 
   * > The returned rule information is sorted by rule creation time in descending order.
   */
  data?: ListSkillsResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 195BF118-9AEF-5F3F-9A58-D88A77EB07DE
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

