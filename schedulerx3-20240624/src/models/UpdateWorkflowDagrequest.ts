// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkflowDAGRequestDagEdges extends $dara.Model {
  /**
   * @remarks
   * The job ID of the source node.
   * 
   * @example
   * 3
   */
  source?: number;
  /**
   * @remarks
   * The job ID of the target node.
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

export class UpdateWorkflowDAGRequestDagNodesCoordinate extends $dara.Model {
  /**
   * @remarks
   * Optional. The height of the node.
   * 
   * @example
   * 20
   */
  height?: number;
  /**
   * @remarks
   * Optional. The width of the node.
   * 
   * @example
   * 100
   */
  width?: number;
  /**
   * @remarks
   * The x-coordinate.
   * 
   * @example
   * 50
   */
  x?: number;
  /**
   * @remarks
   * The y-coordinate.
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

export class UpdateWorkflowDAGRequestDagNodes extends $dara.Model {
  /**
   * @remarks
   * The logical expression of the node.
   * 
   * @example
   * {
   *     "logicType": "status_branch",
   *     "conditionResult": {
   *         "successList": [
   *             {
   *                 "jobName": "status-job4",
   *                 "jobId": "269"
   *             }
   *         ],
   *         "failedList": [
   *             {
   *                 "jobName": "status-job5",
   *                 "jobId": "270"
   *             }
   *         ]
   *     },
   *     "dependence": {
   *         "relation": "AND",
   *         "dependList": [
   *             {
   *                 "relation": "AND",
   *                 "dependItemList": [
   *                     {
   *                         "jobName": "status-job1",
   *                         "jobId": 265,
   *                         "status": [
   *                             4
   *                         ]
   *                     },
   *                     {
   *                         "jobName": "status-job2",
   *                         "jobId": 266,
   *                         "status": [
   *                             5
   *                         ]
   *                     }
   *                 ]
   *             },
   *             {
   *                 "relation": "AND",
   *                 "dependItemList": [
   *                     {
   *                         "jobName": "status-job3",
   *                         "jobId": 267,
   *                         "status": [
   *                             4
   *                         ]
   *                     }
   *                 ]
   *             }
   *         ]
   *     }
   * }
   */
  content?: string;
  /**
   * @remarks
   * The coordinates of the node.
   */
  coordinate?: UpdateWorkflowDAGRequestDagNodesCoordinate;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 1
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      coordinate: 'Coordinate',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      coordinate: UpdateWorkflowDAGRequestDagNodesCoordinate,
      id: 'number',
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

export class UpdateWorkflowDAGRequestDag extends $dara.Model {
  /**
   * @remarks
   * A list of edges in the workflow.
   */
  edges?: UpdateWorkflowDAGRequestDagEdges[];
  /**
   * @remarks
   * A list of nodes in the workflow.
   */
  nodes?: UpdateWorkflowDAGRequestDagNodes[];
  static names(): { [key: string]: string } {
    return {
      edges: 'Edges',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edges: { 'type': 'array', 'itemType': UpdateWorkflowDAGRequestDagEdges },
      nodes: { 'type': 'array', 'itemType': UpdateWorkflowDAGRequestDagNodes },
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

export class UpdateWorkflowDAGRequest extends $dara.Model {
  /**
   * @remarks
   * The application name.
   * 
   * This parameter is required.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * xxljob-a1804a3226d
   */
  clusterId?: string;
  /**
   * @remarks
   * The directed acyclic graph (DAG) of the workflow.
   * 
   * This parameter is required.
   */
  dag?: UpdateWorkflowDAGRequestDag;
  /**
   * @remarks
   * The version of the DAG. To obtain this value, call the [ListDAGVersions](https://help.aliyun.com/document_detail/465989.html) operation.
   * 
   * @example
   * 1137005
   */
  dagVersion?: string;
  /**
   * @remarks
   * The workflow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  workflowId?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      dag: 'Dag',
      dagVersion: 'DagVersion',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      dag: UpdateWorkflowDAGRequestDag,
      dagVersion: 'string',
      workflowId: 'number',
    };
  }

  validate() {
    if(this.dag && typeof (this.dag as any).validate === 'function') {
      (this.dag as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

