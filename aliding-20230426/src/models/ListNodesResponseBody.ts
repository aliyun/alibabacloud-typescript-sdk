// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodesResponseBodyNodesStatisticalInfo extends $dara.Model {
  /**
   * @example
   * 123
   */
  wordCount?: number;
  static names(): { [key: string]: string } {
    return {
      wordCount: 'WordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      wordCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyNodes extends $dara.Model {
  /**
   * @example
   * ALIDOC
   */
  category?: string;
  /**
   * @example
   * 2023-05-15T11:29Z
   */
  createTime?: string;
  /**
   * @example
   * 01472825524039877041
   */
  creatorId?: string;
  /**
   * @example
   * adoc
   */
  extension?: string;
  /**
   * @example
   * true
   */
  hasChildren?: boolean;
  /**
   * @example
   * 2023-05-15T11:29Z
   */
  modifiedTime?: string;
  /**
   * @example
   * 01472825524039877041
   */
  modifierId?: string;
  /**
   * @example
   * node_name
   */
  name?: string;
  /**
   * @example
   * MNDoBb60VLBPraakI1Ywxyyn8lemrZQ3
   */
  nodeId?: string;
  /**
   * @example
   * READER
   */
  permissionRole?: string;
  /**
   * @example
   * 512
   */
  size?: number;
  statisticalInfo?: ListNodesResponseBodyNodesStatisticalInfo;
  /**
   * @example
   * FILE
   */
  type?: string;
  /**
   * @example
   * node_url
   */
  url?: string;
  /**
   * @example
   * MNDoBb60VLBPraakI1Ywxyyn8lemrZQ3
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      createTime: 'CreateTime',
      creatorId: 'CreatorId',
      extension: 'Extension',
      hasChildren: 'HasChildren',
      modifiedTime: 'ModifiedTime',
      modifierId: 'ModifierId',
      name: 'Name',
      nodeId: 'NodeId',
      permissionRole: 'PermissionRole',
      size: 'Size',
      statisticalInfo: 'StatisticalInfo',
      type: 'Type',
      url: 'Url',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      createTime: 'string',
      creatorId: 'string',
      extension: 'string',
      hasChildren: 'boolean',
      modifiedTime: 'string',
      modifierId: 'string',
      name: 'string',
      nodeId: 'string',
      permissionRole: 'string',
      size: 'number',
      statisticalInfo: ListNodesResponseBodyNodesStatisticalInfo,
      type: 'string',
      url: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.statisticalInfo && typeof (this.statisticalInfo as any).validate === 'function') {
      (this.statisticalInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBody extends $dara.Model {
  /**
   * @example
   * next_token
   */
  nextToken?: string;
  nodes?: ListNodesResponseBodyNodes[];
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      nodes: 'nodes',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      nodes: { 'type': 'array', 'itemType': ListNodesResponseBodyNodes },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

