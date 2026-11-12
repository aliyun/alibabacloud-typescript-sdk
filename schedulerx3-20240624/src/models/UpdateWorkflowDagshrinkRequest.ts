// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkflowDAGShrinkRequest extends $dara.Model {
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
   * The workflow DAG information.
   * 
   * This parameter is required.
   */
  dagShrink?: string;
  /**
   * @remarks
   * The workflow version number. You can call the [ListDAGVersions](https://help.aliyun.com/document_detail/465989.html) operation to obtain the value of this parameter.
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
      dagShrink: 'Dag',
      dagVersion: 'DagVersion',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      dagShrink: 'string',
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

