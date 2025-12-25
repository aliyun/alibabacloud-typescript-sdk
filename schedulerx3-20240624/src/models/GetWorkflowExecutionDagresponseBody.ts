// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkflowExecutionDAGResponseBodyDataEdges extends $dara.Model {
  /**
   * @example
   * 1000
   */
  source?: string;
  /**
   * @example
   * 1001
   */
  target?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'string',
      target: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowExecutionDAGResponseBodyDataNodesCoordinate extends $dara.Model {
  /**
   * @example
   * 20
   */
  height?: number;
  /**
   * @example
   * 100
   */
  width?: number;
  /**
   * @example
   * 50
   */
  x?: number;
  /**
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

export class GetWorkflowExecutionDAGResponseBodyDataNodes extends $dara.Model {
  /**
   * @example
   * cua-xxl-job-executor
   */
  appName?: string;
  coordinate?: GetWorkflowExecutionDAGResponseBodyDataNodesCoordinate;
  /**
   * @remarks
   * ID。
   * 
   * @example
   * 7491777526619542799
   */
  id?: string;
  /**
   * @example
   * 9
   */
  jobId?: number;
  /**
   * @example
   * script_shell
   */
  jobType?: string;
  /**
   * @example
   * job1
   */
  name?: string;
  /**
   * @example
   * 4
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      coordinate: 'Coordinate',
      id: 'Id',
      jobId: 'JobId',
      jobType: 'JobType',
      name: 'Name',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      coordinate: GetWorkflowExecutionDAGResponseBodyDataNodesCoordinate,
      id: 'string',
      jobId: 'number',
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

export class GetWorkflowExecutionDAGResponseBodyData extends $dara.Model {
  edges?: GetWorkflowExecutionDAGResponseBodyDataEdges[];
  nodes?: GetWorkflowExecutionDAGResponseBodyDataNodes[];
  static names(): { [key: string]: string } {
    return {
      edges: 'Edges',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edges: { 'type': 'array', 'itemType': GetWorkflowExecutionDAGResponseBodyDataEdges },
      nodes: { 'type': 'array', 'itemType': GetWorkflowExecutionDAGResponseBodyDataNodes },
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

export class GetWorkflowExecutionDAGResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: GetWorkflowExecutionDAGResponseBodyData;
  /**
   * @example
   * Parameter format error
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 3835AA29-2298-5434-BC53-9CC377CDFD2C
   */
  requestId?: string;
  /**
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
      data: GetWorkflowExecutionDAGResponseBodyData,
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

