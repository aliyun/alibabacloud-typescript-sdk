// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTraceInfoDetailResponseBodyTraceInfoDetailEdgeList extends $dara.Model {
  /**
   * @remarks
   * The number of occurrences.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The end vertex ID of the edge in the trace graph.
   * 
   * @example
   * a1d1fa39e5345dcef3f9712172cxxxxx
   */
  endId?: string;
  /**
   * @remarks
   * The start vertex ID of the edge in the trace graph.
   * 
   * @example
   * 02b4bf933c8e3bb8b9465eee502xxxxx
   */
  startId?: string;
  /**
   * @remarks
   * The point in time.
   * 
   * @example
   * 2022-12-21 10:24:42
   */
  time?: string;
  /**
   * @remarks
   * The type of the edge in the trace graph.
   * 
   * @example
   * trigger_file_alert
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      endId: 'EndId',
      startId: 'StartId',
      time: 'Time',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      endId: 'string',
      startId: 'string',
      time: 'string',
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

export class DescribeTraceInfoDetailResponseBodyTraceInfoDetailEntityTypeList extends $dara.Model {
  /**
   * @remarks
   * Deprecated.
   * 
   * @example
   * Deprecated
   */
  dbId?: number;
  /**
   * @remarks
   * The rendering color of the vertex.
   * 
   * @example
   * #fff
   */
  displayColor?: string;
  /**
   * @remarks
   * The icon style of the vertex.
   * 
   * @example
   * https://img.alicdn.com/tfs/TB176P5OgDqK1RjSZSyXXaxEVXa-49-48.png
   */
  displayIcon?: string;
  /**
   * @remarks
   * Deprecated.
   * 
   * @example
   * [{"name":"${logtime}","value":"$!{time}"}]
   */
  displayTemplate?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2022-10-09T11:47Z
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The last modification time.
   * 
   * @example
   * 2022-10-09T11:47Z
   */
  gmtModified?: number;
  /**
   * @remarks
   * The ID of the vertex type record.
   * 
   * @example
   * Alert
   */
  id?: string;
  /**
   * @remarks
   * Deprecated.
   * 
   * @example
   * Deprecated
   */
  limit?: number;
  /**
   * @remarks
   * The name of the vertex type.
   * 
   * @example
   * Alert
   */
  name?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * *
   */
  namespace?: string;
  /**
   * @remarks
   * Deprecated.
   * 
   * @example
   * Deprecated
   */
  offset?: number;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      displayColor: 'DisplayColor',
      displayIcon: 'DisplayIcon',
      displayTemplate: 'DisplayTemplate',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      limit: 'Limit',
      name: 'Name',
      namespace: 'Namespace',
      offset: 'Offset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      displayColor: 'string',
      displayIcon: 'string',
      displayTemplate: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'string',
      limit: 'number',
      name: 'string',
      namespace: 'string',
      offset: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTraceInfoDetailResponseBodyTraceInfoDetailRelationTypeList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the edge is directed. Valid values:
   * 
   * - **1**: yes
   * - **0**: no.
   * 
   * @example
   * 1
   */
  directed?: number;
  /**
   * @remarks
   * The rendering color of the edge.
   * 
   * @example
   * #fff
   */
  displayColor?: string;
  /**
   * @remarks
   * The name of the edge type.
   * 
   * @example
   * file
   */
  name?: string;
  /**
   * @remarks
   * The ID of the edge type.
   * 
   * @example
   * netflow_to_process
   */
  relationTypeId?: string;
  /**
   * @remarks
   * Deprecated.
   * 
   * @example
   * Deprecated
   */
  showType?: string;
  static names(): { [key: string]: string } {
    return {
      directed: 'Directed',
      displayColor: 'DisplayColor',
      name: 'Name',
      relationTypeId: 'RelationTypeId',
      showType: 'ShowType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directed: 'number',
      displayColor: 'string',
      name: 'string',
      relationTypeId: 'string',
      showType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTraceInfoDetailResponseBodyTraceInfoDetailVertexListNeighborList extends $dara.Model {
  /**
   * @remarks
   * The number of neighbor nodes.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * Indicates whether there is a next page.
   * 
   * @example
   * False
   */
  hasMore?: boolean;
  /**
   * @remarks
   * The type of the neighbor node. The value is fixed as **alert**.
   * 
   * @example
   * alert
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      hasMore: 'HasMore',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      hasMore: 'boolean',
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

export class DescribeTraceInfoDetailResponseBodyTraceInfoDetailVertexList extends $dara.Model {
  /**
   * @remarks
   * The number of occurrences.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The vertex ID.
   * 
   * @example
   * a1d1fa39e5345dcef3f9712172xxxxxx
   */
  id?: string;
  /**
   * @remarks
   * The name of the entity represented by the vertex.
   * 
   * @example
   * /usr/local/tomcat
   */
  name?: string;
  /**
   * @remarks
   * The information about neighbor nodes.
   */
  neighborList?: DescribeTraceInfoDetailResponseBodyTraceInfoDetailVertexListNeighborList[];
  /**
   * @remarks
   * The point in time.
   * 
   * @example
   * 2022-12-21 10:24:42
   */
  time?: string;
  /**
   * @remarks
   * The type of the entity represented by the vertex.
   * 
   * @example
   * file_path
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      id: 'Id',
      name: 'Name',
      neighborList: 'NeighborList',
      time: 'Time',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      id: 'string',
      name: 'string',
      neighborList: { 'type': 'array', 'itemType': DescribeTraceInfoDetailResponseBodyTraceInfoDetailVertexListNeighborList },
      time: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.neighborList)) {
      $dara.Model.validateArray(this.neighborList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTraceInfoDetailResponseBodyTraceInfoDetail extends $dara.Model {
  /**
   * @remarks
   * The edge information in the trace graph.
   */
  edgeList?: DescribeTraceInfoDetailResponseBodyTraceInfoDetailEdgeList[];
  /**
   * @remarks
   * The metadata configuration of vertex types.
   */
  entityTypeList?: DescribeTraceInfoDetailResponseBodyTraceInfoDetailEntityTypeList[];
  /**
   * @remarks
   * The metadata configuration of edge types.
   */
  relationTypeList?: DescribeTraceInfoDetailResponseBodyTraceInfoDetailRelationTypeList[];
  /**
   * @remarks
   * The information about all vertices in the trace graph.
   */
  vertexList?: DescribeTraceInfoDetailResponseBodyTraceInfoDetailVertexList[];
  static names(): { [key: string]: string } {
    return {
      edgeList: 'EdgeList',
      entityTypeList: 'EntityTypeList',
      relationTypeList: 'RelationTypeList',
      vertexList: 'VertexList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edgeList: { 'type': 'array', 'itemType': DescribeTraceInfoDetailResponseBodyTraceInfoDetailEdgeList },
      entityTypeList: { 'type': 'array', 'itemType': DescribeTraceInfoDetailResponseBodyTraceInfoDetailEntityTypeList },
      relationTypeList: { 'type': 'array', 'itemType': DescribeTraceInfoDetailResponseBodyTraceInfoDetailRelationTypeList },
      vertexList: { 'type': 'array', 'itemType': DescribeTraceInfoDetailResponseBodyTraceInfoDetailVertexList },
    };
  }

  validate() {
    if(Array.isArray(this.edgeList)) {
      $dara.Model.validateArray(this.edgeList);
    }
    if(Array.isArray(this.entityTypeList)) {
      $dara.Model.validateArray(this.entityTypeList);
    }
    if(Array.isArray(this.relationTypeList)) {
      $dara.Model.validateArray(this.relationTypeList);
    }
    if(Array.isArray(this.vertexList)) {
      $dara.Model.validateArray(this.vertexList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTraceInfoDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 24A20733-10A0-4AF6-BE6B-XXXXXXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - **true**: The call was successful.
   * - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The details of the trace graph.
   */
  traceInfoDetail?: DescribeTraceInfoDetailResponseBodyTraceInfoDetail;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      traceInfoDetail: 'TraceInfoDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      traceInfoDetail: DescribeTraceInfoDetailResponseBodyTraceInfoDetail,
    };
  }

  validate() {
    if(this.traceInfoDetail && typeof (this.traceInfoDetail as any).validate === 'function') {
      (this.traceInfoDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

