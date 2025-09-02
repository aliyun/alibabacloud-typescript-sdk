// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFileTypeResponseBodyNodeTypeInfoListNodeTypeInfo extends $dara.Model {
  /**
   * @remarks
   * The code of the node type. The codes and names of node types have the following mappings: 6 (Shell), 10 (ODPS SQL), 11 (ODPS MR), 23 (Data Integration), 24 (ODPS Script), 99 (zero load), 221 (PyODPS 2), 225 (ODPS Spark), 227 (EMR Hive), 228 (EMR Spark), 229 (EMR Spark SQL), 230 (EMR MR), 239 (OSS object inspection), 257 (EMR Shell), 258 (EMR Spark Shell), 259 (EMR Presto), 260 (EMR Impala), 900 (real-time synchronization), 1089 (cross-tenant collaboration), 1091 (Hologres development), 1093 (Hologres SQL), 1100 (assignment), and 1221 (PyODPS 3)
   * 
   * @example
   * 10
   */
  nodeType?: number;
  /**
   * @remarks
   * The name of the node type. The codes and names of node types have the following mappings: 6 (Shell), 10 (ODPS SQL), 11 (ODPS MR), 23 (Data Integration), 24 (ODPS Script), 99 (zero load), 221 (PyODPS 2), 225 (ODPS Spark), 227 (EMR Hive), 228 (EMR Spark), 229 (EMR Spark SQL), 230 (EMR MR), 239 (OSS object inspection), 257 (EMR Shell), 258 (EMR Spark Shell), 259 (EMR Presto), 260 (EMR Impala), 900 (real-time synchronization), 1089 (cross-tenant collaboration), 1091 (Hologres development), 1093 (Hologres SQL), 1100 (assignment), and 1221 (PyODPS 3)
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

export class ListFileTypeResponseBodyNodeTypeInfoList extends $dara.Model {
  /**
   * @remarks
   * The information about the node type.
   */
  nodeTypeInfo?: ListFileTypeResponseBodyNodeTypeInfoListNodeTypeInfo[];
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
      nodeTypeInfo: { 'type': 'array', 'itemType': ListFileTypeResponseBodyNodeTypeInfoListNodeTypeInfo },
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

export class ListFileTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about node types.
   */
  nodeTypeInfoList?: ListFileTypeResponseBodyNodeTypeInfoList;
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
      nodeTypeInfoList: ListFileTypeResponseBodyNodeTypeInfoList,
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

