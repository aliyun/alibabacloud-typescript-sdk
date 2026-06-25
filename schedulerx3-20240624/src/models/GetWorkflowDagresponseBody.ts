// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkflowDAGResponseBodyDataEdges extends $dara.Model {
  /**
   * @remarks
   * The Job ID of the source Node.
   * 
   * @example
   * 3
   */
  source?: number;
  /**
   * @remarks
   * The Job ID of the target Node.
   * 
   * @example
   * 4
   */
  target?: number;
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'number',
      target: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowDAGResponseBodyDataNodesCoordinate extends $dara.Model {
  /**
   * @remarks
   * Optional. The height of the Node.
   * 
   * @example
   * 20
   */
  height?: number;
  /**
   * @remarks
   * Optional. The width of the Node.
   * 
   * @example
   * 100
   */
  width?: number;
  /**
   * @remarks
   * The x-coordinate of the Node.
   * 
   * @example
   * 50
   */
  x?: number;
  /**
   * @remarks
   * The y-coordinate of the Node.
   * 
   * @example
   * 50
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowDAGResponseBodyDataNodes extends $dara.Model {
  /**
   * @remarks
   * The Application Name.
   * 
   * @example
   * oak-payment-async-job
   */
  appName?: string;
  /**
   * @remarks
   * The coordinates of the Node.
   */
  coordinate?: GetWorkflowDAGResponseBodyDataNodesCoordinate;
  /**
   * @remarks
   * The Dependency Strategy.
   * 
   * @example
   * all_success
   */
  dependentStrategy?: number;
  /**
   * @remarks
   * The Job ID.
   * 
   * @example
   * 5
   */
  id?: number;
  /**
   * @remarks
   * The Job type.
   * 
   * @example
   * script_shell
   */
  jobType?: string;
  /**
   * @remarks
   * The Job name.
   * 
   * @example
   * job1
   */
  name?: string;
  /**
   * @remarks
   * The Job Status.
   * 
   * - 0: Disabled
   * 
   * - 1: Enabled
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      coordinate: 'Coordinate',
      dependentStrategy: 'DependentStrategy',
      id: 'Id',
      jobType: 'JobType',
      name: 'Name',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      coordinate: GetWorkflowDAGResponseBodyDataNodesCoordinate,
      dependentStrategy: 'number',
      id: 'number',
      jobType: 'string',
      name: 'string',
      status: 'number',
    };
  }

  validate() {
    if(this.coordinate && typeof (this.coordinate as any).validate === 'function') {
      (this.coordinate as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowDAGResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * A list of Edges in the Workflow DAG.
   */
  edges?: GetWorkflowDAGResponseBodyDataEdges[];
  /**
   * @remarks
   * A list of Nodes in the Workflow DAG.
   */
  nodes?: GetWorkflowDAGResponseBodyDataNodes[];
  static names(): { [key: string]: string } {
    return {
      edges: 'Edges',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edges: { 'type': 'array', 'itemType': GetWorkflowDAGResponseBodyDataEdges },
      nodes: { 'type': 'array', 'itemType': GetWorkflowDAGResponseBodyDataNodes },
    };
  }

  validate() {
    if(Array.isArray(this.edges)) {
      $dara.Model.validateArray(this.edges);
    }
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowDAGResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Response Code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetWorkflowDAGResponseBodyData;
  /**
   * @remarks
   * The Error Message.
   * 
   * @example
   * Parameter error: content is null.
   */
  message?: string;
  /**
   * @remarks
   * The Request ID.
   * 
   * @example
   * 5EF879D0-3B43-5AD1-9BF7-52418F9C5E73
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded.
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
      code: 'number',
      data: GetWorkflowDAGResponseBodyData,
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

