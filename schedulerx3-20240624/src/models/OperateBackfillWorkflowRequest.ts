// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateBackfillWorkflowRequest extends $dara.Model {
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
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The end date of the backfill, in YYYY-MM-DD format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2025-11-03
   */
  endDate?: string;
  /**
   * @remarks
   * The start date of the backfill, in YYYY-MM-DD format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2025-11-01
   */
  startDate?: string;
  /**
   * @remarks
   * The workflow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  workflowId?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      endDate: 'EndDate',
      startDate: 'StartDate',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      endDate: 'string',
      startDate: 'string',
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

