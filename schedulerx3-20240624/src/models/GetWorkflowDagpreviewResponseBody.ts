// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkflowDAGPreviewResponseBodyDataEdges extends $dara.Model {
  /**
   * @example
   * 3
   */
  source?: number;
  /**
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

export class GetWorkflowDAGPreviewResponseBodyDataNodesCoordinate extends $dara.Model {
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

export class GetWorkflowDAGPreviewResponseBodyDataNodes extends $dara.Model {
  /**
   * @example
   * settle-job
   */
  appName?: string;
  coordinate?: GetWorkflowDAGPreviewResponseBodyDataNodesCoordinate;
  /**
   * @example
   * all_success
   */
  dependentStrategy?: number;
  /**
   * @example
   * 3
   */
  id?: number;
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
      coordinate: GetWorkflowDAGPreviewResponseBodyDataNodesCoordinate,
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

export class GetWorkflowDAGPreviewResponseBodyData extends $dara.Model {
  edges?: GetWorkflowDAGPreviewResponseBodyDataEdges[];
  nodes?: GetWorkflowDAGPreviewResponseBodyDataNodes[];
  static names(): { [key: string]: string } {
    return {
      edges: 'Edges',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edges: { 'type': 'array', 'itemType': GetWorkflowDAGPreviewResponseBodyDataEdges },
      nodes: { 'type': 'array', 'itemType': GetWorkflowDAGPreviewResponseBodyDataNodes },
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

export class GetWorkflowDAGPreviewResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: GetWorkflowDAGPreviewResponseBodyData;
  /**
   * @example
   * Parameter error: content is null.
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * B8733786-C045-59F1-8D79-99A52863F62D
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
      data: GetWorkflowDAGPreviewResponseBodyData,
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

