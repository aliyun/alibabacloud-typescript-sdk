// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentSpecsResponseBodyDataPageItemsMcpServers extends $dara.Model {
  /**
   * @remarks
   * The name.
   * 
   * @example
   * agentspec-example
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSpecsResponseBodyDataPageItemsSkills extends $dara.Model {
  /**
   * @remarks
   * The name.
   * 
   * @example
   * agentspec-example
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSpecsResponseBodyDataPageItems extends $dara.Model {
  /**
   * @remarks
   * The business tags.
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
   * The download count.
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
   * Indicates whether the AgentSpec is enabled.
   */
  enable?: boolean;
  /**
   * @remarks
   * The source.
   * 
   * @example
   * UPLOAD
   */
  from?: string;
  /**
   * @remarks
   * The version labels.
   */
  labels?: { [key: string]: string };
  /**
   * @remarks
   * The list of MCP server references.
   */
  mcpServers?: ListAgentSpecsResponseBodyDataPageItemsMcpServers[];
  /**
   * @remarks
   * The name.
   * 
   * @example
   * agentspec-example
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
   * The list of Skill references.
   */
  skills?: ListAgentSpecsResponseBodyDataPageItemsSkills[];
  /**
   * @remarks
   * The update time. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1787671022000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      bizTags: 'bizTags',
      description: 'description',
      downloadCount: 'downloadCount',
      editingVersion: 'editingVersion',
      enable: 'enable',
      from: 'from',
      labels: 'labels',
      mcpServers: 'mcpServers',
      name: 'name',
      onlineCnt: 'onlineCnt',
      reviewingVersion: 'reviewingVersion',
      scope: 'scope',
      skills: 'skills',
      updateTime: 'updateTime',
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
      mcpServers: { 'type': 'array', 'itemType': ListAgentSpecsResponseBodyDataPageItemsMcpServers },
      name: 'string',
      onlineCnt: 'number',
      reviewingVersion: 'string',
      scope: 'string',
      skills: { 'type': 'array', 'itemType': ListAgentSpecsResponseBodyDataPageItemsSkills },
      updateTime: 'number',
    };
  }

  validate() {
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    if(Array.isArray(this.mcpServers)) {
      $dara.Model.validateArray(this.mcpServers);
    }
    if(Array.isArray(this.skills)) {
      $dara.Model.validateArray(this.skills);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSpecsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The data on the current page.
   */
  pageItems?: ListAgentSpecsResponseBodyDataPageItems[];
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
      pageItems: { 'type': 'array', 'itemType': ListAgentSpecsResponseBodyDataPageItems },
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

export class ListAgentSpecsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListAgentSpecsResponseBodyData;
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
      data: ListAgentSpecsResponseBodyData,
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

