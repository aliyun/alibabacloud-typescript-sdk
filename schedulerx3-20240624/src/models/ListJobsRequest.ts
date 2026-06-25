// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobsRequest extends $dara.Model {
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
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The description of the job.
   * 
   * @example
   * job01单机任务
   */
  description?: string;
  /**
   * @remarks
   * The name of the job handler.
   * 
   * @example
   * jobDemoHandler
   */
  jobHandler?: string;
  /**
   * @remarks
   * The ID of the job.
   * 
   * @example
   * 10
   */
  jobId?: number;
  /**
   * @remarks
   * The name of the job.
   * 
   * @example
   * job01
   */
  jobName?: string;
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
   * The status of the job.
   * 
   * @example
   * 0
   */
  status?: string;
  /**
   * @remarks
   * The ID of the workflow.
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

