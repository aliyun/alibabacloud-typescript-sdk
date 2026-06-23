// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPipelineRunResponseBodyPipelineStages extends $dara.Model {
  /**
   * @remarks
   * The code that identifies the stage.
   * 
   * @example
   * DEV_CHECK
   */
  code?: string;
  /**
   * @remarks
   * The description of the stage.
   * 
   * @example
   * Phase description
   */
  description?: string;
  /**
   * @remarks
   * Detailed information about the stage.
   */
  detail?: { [key: string]: any };
  /**
   * @remarks
   * The exception message returned if the stage fails.
   * 
   * @example
   * Exception information XXX
   */
  message?: string;
  /**
   * @remarks
   * The name of the stage.
   * 
   * @example
   * Publish package build
   */
  name?: string;
  /**
   * @remarks
   * The status of the stage.
   * 
   * Valid values:
   * 
   * - `Init`: The stage is being initialized.
   * 
   * - `Running`: The stage is in progress.
   * 
   * - `Success`: The stage succeeded.
   * 
   * - `Fail`: The stage failed.
   * 
   * - `Terminated`: The stage was terminated.
   * 
   * - `Canceled`: The stage was canceled.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The sequence number of the stage within the pipeline.
   * 
   * @example
   * 1
   */
  step?: number;
  /**
   * @remarks
   * The type of the stage.
   * 
   * Valid values:
   * 
   * - `Deploy`: A deployment operation.
   * 
   * - `Check`: A check operation.
   * 
   * - `Offline`: An offline operation.
   * 
   * - `Build`: A build operation.
   * 
   * - `Delete`: A delete operation.
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

export class GetPipelineRunResponseBodyPipeline extends $dara.Model {
  /**
   * @remarks
   * The time when the pipeline run was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1724984066000
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the user who created the pipeline run.
   * 
   * @example
   * 137946317766XXXX
   */
  creator?: string;
  /**
   * @remarks
   * The description of the pipeline run.
   * 
   * @example
   * 发布流程描述信息
   */
  description?: string;
  /**
   * @remarks
   * The ID of the pipeline run.
   * 
   * @example
   * a7ef0634-20ec-4a7c-a214-54020f91XXXX
   */
  id?: string;
  /**
   * @remarks
   * The error message returned if the pipeline run fails.
   * 
   * @example
   * Error message
   */
  message?: string;
  /**
   * @remarks
   * The time when the pipeline run was last modified. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1724984066000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The ID of the DataWorks workspace.
   * 
   * @example
   * 56160
   */
  projectId?: number;
  /**
   * @remarks
   * The stages in the pipeline run.
   */
  stages?: GetPipelineRunResponseBodyPipelineStages[];
  /**
   * @remarks
   * The status of the pipeline run.
   * 
   * Valid values:
   * 
   * - `Init`: The pipeline run is being initialized.
   * 
   * - `Running`: The pipeline run is in progress.
   * 
   * - `Success`: The pipeline run succeeded.
   * 
   * - `Fail`: The pipeline run failed.
   * 
   * - `Terminated`: The pipeline run was terminated.
   * 
   * - `Canceled`: The pipeline run was canceled.
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
      stages: { 'type': 'array', 'itemType': GetPipelineRunResponseBodyPipelineStages },
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

export class GetPipelineRunResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the pipeline run.
   */
  pipeline?: GetPipelineRunResponseBodyPipeline;
  /**
   * @remarks
   * The ID of the request. You can use this ID to locate logs and troubleshoot issues.
   * 
   * @example
   * 08468352-032C-5262-AEDC-68C9FA05XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pipeline: 'Pipeline',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipeline: GetPipelineRunResponseBodyPipeline,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pipeline && typeof (this.pipeline as any).validate === 'function') {
      (this.pipeline as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

