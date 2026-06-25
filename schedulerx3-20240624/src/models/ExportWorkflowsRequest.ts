// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportWorkflowsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * The ID of the cluster where the Workflow is located.
   * 
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * An array of Workflow IDs to export.
   */
  workflowId?: number[];
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      workflowId: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.workflowId)) {
      $dara.Model.validateArray(this.workflowId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

