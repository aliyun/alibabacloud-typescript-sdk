// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGraph4InvestigationOnlineResponseBodyDataEdgeList extends $dara.Model {
  /**
   * @remarks
   * ID of the end point of the edge.
   * 
   * @example
   * f944c2362c7e111dee16f0e70ad2xxxx
   */
  endId?: string;
  /**
   * @remarks
   * The type of the end point of the current edge. Possible values include but are not limited to:
   * - **process**: Process
   * - **file**: File
   * - **alert**: Alert
   * - **ip**: IP address
   * - **domain**: Domain
   * 
   * @example
   * process
   */
  endType?: string;
  /**
   * @remarks
   * Edge name.
   * 
   * @example
   * bash->apt-get
   */
  name?: string;
  /**
   * @remarks
   * Start vertex id of edge.
   * 
   * @example
   * f944c2362c7e111dee16f0e70ad2xxxx
   */
  startId?: string;
  /**
   * @remarks
   * The type of the starting point of the edge. Possible values include, but are not limited to:
   * - **process**： Process
   * - **file**： File
   * - **alert**： Alert
   * - **ip**： IP address
   * - **domain**： Domain
   * 
   * @example
   * file
   */
  startType?: string;
  /**
   * @remarks
   * The time when the edge was established.
   * 
   * @example
   * 2024-07-01 15:25:46
   */
  time?: string;
  /**
   * @remarks
   * The type of the edge.
   * 
   * @example
   * process_spawn_process
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endId: 'EndId',
      endType: 'EndType',
      name: 'Name',
      startId: 'StartId',
      startType: 'StartType',
      time: 'Time',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endId: 'string',
      endType: 'string',
      name: 'string',
      startId: 'string',
      startType: 'string',
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

export class DescribeGraph4InvestigationOnlineResponseBodyDataEntityTypeList extends $dara.Model {
  /**
   * @remarks
   * Vertex rendering color.
   * 
   * @example
   * #fff
   */
  displayColor?: string;
  /**
   * @remarks
   * Vertex icon.
   * 
   * @example
   * https://img.alicdn.com/tfs/TB176P5OgDqK1RjSZSyXXaxEVXa-49-48.png
   */
  displayIcon?: string;
  /**
   * @remarks
   * Display order
   * 
   * @example
   * 1
   */
  displayOrder?: number;
  /**
   * @remarks
   * Node type ID.
   * 
   * @example
   * 1
   */
  id?: string;
  /**
   * @remarks
   * Vertex name.
   * 
   * @example
   * alert
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      displayColor: 'DisplayColor',
      displayIcon: 'DisplayIcon',
      displayOrder: 'DisplayOrder',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayColor: 'string',
      displayIcon: 'string',
      displayOrder: 'number',
      id: 'string',
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

export class DescribeGraph4InvestigationOnlineResponseBodyDataRelationTypeList extends $dara.Model {
  /**
   * @remarks
   * Direction of the edge. Possible values:
   * - **1** ： Forward
   * - **0**： Reverse
   * 
   * @example
   * 1
   */
  directed?: number;
  /**
   * @remarks
   * Render color of the edge.
   * 
   * @example
   * #fff
   */
  displayColor?: string;
  /**
   * @remarks
   * Icon style of the edge
   * 
   * @example
   * https://img.alicdn.com/imgextra/i4/O1CN01ft6rvQ22uUX2JsTmv_!!6000000007180-55-tps-12-12.svg
   */
  displayIcon?: string;
  /**
   * @remarks
   * Name of the edge.
   * 
   * @example
   * spawn process
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      directed: 'Directed',
      displayColor: 'DisplayColor',
      displayIcon: 'DisplayIcon',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directed: 'number',
      displayColor: 'string',
      displayIcon: 'string',
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

export class DescribeGraph4InvestigationOnlineResponseBodyDataVertexListNeighborList extends $dara.Model {
  /**
   * @remarks
   * Number of neighboring nodes.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * Indicates whether there are more neighboring vertices.
   * 
   * @example
   * False
   */
  hasMore?: boolean;
  /**
   * @remarks
   * Neighbor node type.
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

export class DescribeGraph4InvestigationOnlineResponseBodyDataVertexList extends $dara.Model {
  /**
   * @remarks
   * Vertex name.
   * 
   * @example
   * 1a79b3a10ad5e6cad090dd697a7axxxxx
   */
  name?: string;
  /**
   * @remarks
   * List of neighboring vertices of the current vertex.
   */
  neighborList?: DescribeGraph4InvestigationOnlineResponseBodyDataVertexListNeighborList[];
  /**
   * @remarks
   * Properties.
   * 
   * @example
   * {\\"DomainName\\": {\\"SupportScratchDetection\\": False, \\"Description\\": \\"The name of the domain.\\", \\"Required\\": True, \\"UpdateAllowed\\": False, \\"Type\\": \\"string\\", \\"Immutable\\": False}}
   */
  properties?: string;
  /**
   * @remarks
   * Time.
   * 
   * @example
   * 2024-07-02 16:14:01
   */
  time?: string;
  /**
   * @remarks
   * Vertex type.
   * 
   * @example
   * alert
   */
  type?: string;
  /**
   * @remarks
   * Asset UUID.
   * 
   * @example
   * 5c081b02-f66a-47a4-bd2f-79ee3eafxxxx
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      neighborList: 'NeighborList',
      properties: 'Properties',
      time: 'Time',
      type: 'Type',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      neighborList: { 'type': 'array', 'itemType': DescribeGraph4InvestigationOnlineResponseBodyDataVertexListNeighborList },
      properties: 'string',
      time: 'string',
      type: 'string',
      uuid: 'string',
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

export class DescribeGraph4InvestigationOnlineResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * List of edges.
   */
  edgeList?: DescribeGraph4InvestigationOnlineResponseBodyDataEdgeList[];
  /**
   * @remarks
   * List of vertex types.
   */
  entityTypeList?: DescribeGraph4InvestigationOnlineResponseBodyDataEntityTypeList[];
  /**
   * @remarks
   * List of edge types.
   */
  relationTypeList?: DescribeGraph4InvestigationOnlineResponseBodyDataRelationTypeList[];
  /**
   * @remarks
   * List of vertices.
   */
  vertexList?: DescribeGraph4InvestigationOnlineResponseBodyDataVertexList[];
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
      edgeList: { 'type': 'array', 'itemType': DescribeGraph4InvestigationOnlineResponseBodyDataEdgeList },
      entityTypeList: { 'type': 'array', 'itemType': DescribeGraph4InvestigationOnlineResponseBodyDataEntityTypeList },
      relationTypeList: { 'type': 'array', 'itemType': DescribeGraph4InvestigationOnlineResponseBodyDataRelationTypeList },
      vertexList: { 'type': 'array', 'itemType': DescribeGraph4InvestigationOnlineResponseBodyDataVertexList },
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

export class DescribeGraph4InvestigationOnlineResponseBody extends $dara.Model {
  /**
   * @remarks
   * Result code, where **200** indicates success. Any other value indicates failure, and the caller can use this field to determine the reason for the failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Data
   */
  data?: DescribeGraph4InvestigationOnlineResponseBodyData;
  /**
   * @remarks
   * The response message from the request.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * A unique identifier generated by Alibaba Cloud for this request.
   * 
   * @example
   * C699E4E4-F2F4-58FC-A949-457FFE59****
   */
  requestId?: string;
  /**
   * @remarks
   * The result status of the API call. Values:
   * - **true**: The API call was successful.
   * - **false**: The API call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeGraph4InvestigationOnlineResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

