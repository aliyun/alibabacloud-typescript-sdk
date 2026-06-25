// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkflowDAGPreviewRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * The unique identifier for the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The version of the workflow DAG.
   * 
   * This parameter is required.
   * 
   * @example
   * v1
   */
  dagVersion?: string;
  /**
   * @remarks
   * The unique identifier for the workflow.
   * 
   * @example
   * 20
   */
  workflowId?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      dagVersion: 'DagVersion',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      dagVersion: 'string',
      workflowId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

