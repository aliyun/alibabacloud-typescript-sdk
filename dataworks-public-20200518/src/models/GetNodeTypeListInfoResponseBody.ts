// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNodeTypeListInfoResponseBodyNodeTypeInfoListNodeTypeInfo extends $dara.Model {
  /**
   * @remarks
   * The type of the node, which is specified by a number.
   * 
   * @example
   * 10
   */
  nodeType?: number;
  /**
   * @remarks
   * The name of the node type.
   * 
   * @example
   * ODPS SQL
   */
  nodeTypeName?: string;
  static names(): { [key: string]: string } {
    return {
      nodeType: 'NodeType',
      nodeTypeName: 'NodeTypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeType: 'number',
      nodeTypeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeTypeListInfoResponseBodyNodeTypeInfoList extends $dara.Model {
  /**
   * @remarks
   * The information about a node type.
   */
  nodeTypeInfo?: GetNodeTypeListInfoResponseBodyNodeTypeInfoListNodeTypeInfo[];
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
   * The number of entries per page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 127
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nodeTypeInfo: 'NodeTypeInfo',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeTypeInfo: { 'type': 'array', 'itemType': GetNodeTypeListInfoResponseBodyNodeTypeInfoListNodeTypeInfo },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.nodeTypeInfo)) {
      $dara.Model.validateArray(this.nodeTypeInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeTypeListInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of node types.
   */
  nodeTypeInfoList?: GetNodeTypeListInfoResponseBodyNodeTypeInfoList;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0000-ABCD-EFG****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeTypeInfoList: 'NodeTypeInfoList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeTypeInfoList: GetNodeTypeListInfoResponseBodyNodeTypeInfoList,
      requestId: 'string',
    };
  }

  validate() {
    if(this.nodeTypeInfoList && typeof (this.nodeTypeInfoList as any).validate === 'function') {
      (this.nodeTypeInfoList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

