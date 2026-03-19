// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class BrowseFilesResponseBodyNodesNode extends $dara.Model {
  name?: string;
  size?: number;
  subtree?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      size: 'Size',
      subtree: 'Subtree',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      size: 'number',
      subtree: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BrowseFilesResponseBodyNodes extends $dara.Model {
  node?: BrowseFilesResponseBodyNodesNode[];
  static names(): { [key: string]: string } {
    return {
      node: 'Node',
    };
  }

  static types(): { [key: string]: any } {
    return {
      node: { 'type': 'array', 'itemType': BrowseFilesResponseBodyNodesNode },
    };
  }

  validate() {
    if(Array.isArray(this.node)) {
      $dara.Model.validateArray(this.node);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BrowseFilesResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * eyJ***Q==
   */
  nextToken?: string;
  nodes?: BrowseFilesResponseBodyNodes;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 843F7A45-8B***35-ECECBE5E5F78
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
   * @example
   * 11
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      nodes: 'Nodes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      nodes: BrowseFilesResponseBodyNodes,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.nodes && typeof (this.nodes as any).validate === 'function') {
      (this.nodes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

