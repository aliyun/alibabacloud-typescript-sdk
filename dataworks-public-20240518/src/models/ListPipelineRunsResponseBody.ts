// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPipelineRunsResponseBodyPagingInfoPipelineRunsStages extends $dara.Model {
  /**
   * @remarks
   * The code of the deployment stage.
   * 
   * @example
   * DEV_CHECK
   */
  code?: string;
  /**
   * @remarks
   * The stage description.
   * 
   * @example
   * Check before going online to development
   */
  description?: string;
  /**
   * @remarks
   * Additional information about the deployment stage.
   */
  detail?: { [key: string]: any };
  /**
   * @remarks
   * The error message returned if the deployment stage fails.
   * 
   * @example
   * Error message
   */
  message?: string;
  /**
   * @remarks
   * The stage name.
   * 
   * @example
   * Check before going online to development
   */
  name?: string;
  /**
   * @remarks
   * The status of the deployment stage.
   * 
   * Valid values:
   * 
   * - `Init`: Initializing
   * 
   * - `Running`: Running
   * 
   * - `Success`: Succeeded
   * 
   * - `Fail`: Failed
   * 
   * - `Termination`: Terminated
   * 
   * - `Cancel`: Canceled
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The step number of the deployment stage.
   * 
   * @example
   * 1
   */
  step?: number;
  /**
   * @remarks
   * The type of the deployment stage.
   * 
   * Valid values:
   * 
   * - `Deploy`: A deploy operation
   * 
   * - `Check`: A check operation
   * 
   * - `Offline`: An offline operation
   * 
   * - `Build`: A build operation
   * 
   * - `Delete`: A delete operation
   * 
   * @example
   * Check
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      description: 'Description',
      detail: 'Detail',
      message: 'Message',
      name: 'Name',
      status: 'Status',
      step: 'Step',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      description: 'string',
      detail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      name: 'string',
      status: 'string',
      step: 'number',
      type: 'string',
    };
  }

  validate() {
    if(this.detail) {
      $dara.Model.validateMap(this.detail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineRunsResponseBodyPagingInfoPipelineRuns extends $dara.Model {
  /**
   * @remarks
   * The creation timestamp of the deployment pipeline run.
   * 
   * @example
   * 1702736654000
   */
  createTime?: number;
  /**
   * @remarks
   * The creator of the deployment pipeline run.
   * 
   * @example
   * 110755000425XXXX
   */
  creator?: string;
  /**
   * @remarks
   * The description of the deployment pipeline run.
   * 
   * @example
   * Release process description
   */
  description?: string;
  /**
   * @remarks
   * The ID of the deployment pipeline run.
   * 
   * @example
   * 097c73fe-ed6e-4fb1-b109-a5d59e46cd58
   */
  id?: string;
  /**
   * @remarks
   * The error message returned if the deployment pipeline run fails.
   * 
   * @example
   * Error message
   */
  message?: string;
  /**
   * @remarks
   * The last modification timestamp of the deployment pipeline run.
   * 
   * @example
   * 1702736654000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 70199
   */
  projectId?: number;
  /**
   * @remarks
   * A list of deployment stages.
   */
  stages?: ListPipelineRunsResponseBodyPagingInfoPipelineRunsStages[];
  /**
   * @remarks
   * The status of the deployment pipeline run.
   * 
   * Valid values:
   * 
   * - `Init`: Initializing
   * 
   * - `Running`: Running
   * 
   * - `Success`: Succeeded
   * 
   * - `Fail`: Failed
   * 
   * - `Termination`: Terminated
   * 
   * - `Cancel`: Canceled
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      creator: 'Creator',
      description: 'Description',
      id: 'Id',
      message: 'Message',
      modifyTime: 'ModifyTime',
      projectId: 'ProjectId',
      stages: 'Stages',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      creator: 'string',
      description: 'string',
      id: 'string',
      message: 'string',
      modifyTime: 'number',
      projectId: 'number',
      stages: { 'type': 'array', 'itemType': ListPipelineRunsResponseBodyPagingInfoPipelineRunsStages },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.stages)) {
      $dara.Model.validateArray(this.stages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineRunsResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The returned page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * A list of deployment pipeline runs.
   */
  pipelineRuns?: ListPipelineRunsResponseBodyPagingInfoPipelineRuns[];
  /**
   * @remarks
   * The total number of entries that meet the filter criteria.
   * 
   * @example
   * 2524
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pipelineRuns: 'PipelineRuns',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      pipelineRuns: { 'type': 'array', 'itemType': ListPipelineRunsResponseBodyPagingInfoPipelineRuns },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.pipelineRuns)) {
      $dara.Model.validateArray(this.pipelineRuns);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineRunsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pagingInfo?: ListPipelineRunsResponseBodyPagingInfo;
  /**
   * @remarks
   * The request ID. Use this ID to locate logs and troubleshoot issues.
   * 
   * @example
   * 7C352CB7-CD88-50CF-9D0D-E81BDF02XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListPipelineRunsResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pagingInfo && typeof (this.pagingInfo as any).validate === 'function') {
      (this.pagingInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

