// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateWorkflowInstanceRequest extends $dara.Model {
  /**
   * @example
   * PAUSE
   */
  execType?: string;
  /**
   * @example
   * wi-l9o479p8rrx****
   */
  workflowInstanceId?: string;
  /**
   * @example
   * w-lxyy60mpgpg****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      execType: 'execType',
      workflowInstanceId: 'workflowInstanceId',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      execType: 'string',
      workflowInstanceId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

