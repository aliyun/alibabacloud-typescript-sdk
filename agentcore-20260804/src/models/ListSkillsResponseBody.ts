// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillsResponseBodyDataPageItems extends $dara.Model {
  /**
   * @remarks
   * The JSON array string of business tags.
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
   * Sample description used to illustrate the purpose of the resource
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
   * The draft mode. Valid values: HEAD (the skill has a persistent draft) and VERSIONED (a versioned draft is created for each edit). This value is determined by the server and used by the caller to render the status column.
   * 
   * @example
   * HEAD
   */
  draftMode?: string;
  /**
   * @remarks
   * Specifies whether the page item is editable.
   */
  editable?: boolean;
  /**
   * @remarks
   * The version being edited. The value is HEAD in HEAD draft mode.
   * 
   * @example
   * 1.0.0
   */
  editingVersion?: string;
  /**
   * @remarks
   * Specifies whether the skill is enabled.
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
   * The version under review. The value is HEAD in HEAD draft mode.
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
   * The update time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1787671022000
   */
  updateTime?: number;
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
   * Specifies whether the current user has write permissions.
   */
  writeable?: boolean;
  static names(): { [key: string]: string } {
    return {
      bizTags: 'bizTags',
      description: 'description',
      downloadCount: 'downloadCount',
      draftMode: 'draftMode',
      editable: 'editable',
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
      workspaceId: 'workspaceId',
      writeable: 'writeable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizTags: 'string',
      description: 'string',
      downloadCount: 'number',
      draftMode: 'string',
      editable: 'boolean',
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
      workspaceId: 'string',
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
   * The data on the current page.
   */
  pageItems?: ListSkillsResponseBodyDataPageItems[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 5
   */
  pagesAvailable?: number;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageItems: 'pageItems',
      pageNumber: 'pageNumber',
      pagesAvailable: 'pagesAvailable',
      totalCount: 'totalCount',
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
   * The returned data.
   */
  data?: ListSkillsResponseBodyData;
  /**
   * @remarks
   * The maximum number of items to return per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page.
   * 
   * @example
   * next-page-token
   */
  nextToken?: string;
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
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListSkillsResponseBodyData,
      maxResults: 'number',
      nextToken: 'string',
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

