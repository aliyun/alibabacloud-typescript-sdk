// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The application name.
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
   * The description.
   * 
   * @example
   * job01 standalone job
   */
  description?: string;
  /**
   * @remarks
   * The `jobhandler` name.
   * 
   * @example
   * jobDemoHandler
   */
  jobHandler?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 10
   */
  jobId?: number;
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * job01
   */
  jobName?: string;
  /**
   * @remarks
   * The job label filter condition.
   * 
   * @example
   * {key:value}
   */
  label?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * 0
   */
  status?: string;
  /**
   * @remarks
   * The workflow ID.
   * 
   * @example
   * 1
   */
  workflowId?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      description: 'Description',
      jobHandler: 'JobHandler',
      jobId: 'JobId',
      jobName: 'JobName',
      label: 'Label',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      status: 'Status',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      description: 'string',
      jobHandler: 'string',
      jobId: 'number',
      jobName: 'string',
      label: 'string',
      pageNum: 'number',
      pageSize: 'number',
      status: 'string',
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

