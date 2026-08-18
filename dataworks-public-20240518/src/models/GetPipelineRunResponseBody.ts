// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPipelineRunResponseBodyPipelineStages extends $dara.Model {
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
   * The description of the stage.
   * 
   * @example
   * Phase description
   */
  description?: string;
  /**
   * @remarks
   * The detailed information about the stage.
   */
  detail?: { [key: string]: any };
  /**
   * @remarks
   * The exception message of the deployment stage.
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
   * The status of the deployment stage.
   * 
   * Valid values:
   * 
   * - Init: Initialization.
   * - Running: Running.
   * - Success: Succeeded.
   * - Fail: Failed.
   * - Termination: Terminated.
   * - Cancel: Canceled.
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
   * - Deploy: deploy operation
   * - Check: check operation
   * - Offline: offline operation
   * - Build: build operation
   * - Delete: delete operation
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
   * The timestamp when the deployment package was created.
   * 
   * @example
   * 1724984066000
   */
  createTime?: number;
  /**
   * @remarks
   * The creator of the deployment process.
   * 
   * @example
   * 137946317766XXXX
   */
  creator?: string;
  /**
   * @remarks
   * The description of the deployment process.
   * 
   * @example
   * Deployment process description
   */
  description?: string;
  /**
   * @remarks
   * The ID of the deployment process.
   * 
   * @example
   * a7ef0634-20ec-4a7c-a214-54020f91XXXX
   */
  id?: string;
  /**
   * @remarks
   * The error message returned when the deployment fails.
   * 
   * @example
   * Error message
   */
  message?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * The value is a 13-digit number, such as `1724984066000`.
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
   * The stage details.
   */
  stages?: GetPipelineRunResponseBodyPipelineStages[];
  /**
   * @remarks
   * The status of the deployment process.
   * 
   * Valid values:
   * 
   * - Init: Initialization.
   * - Running: Running.
   * - Success: Succeeded.
   * - Fail: Failed.
   * - Termination: Terminated.
   * - Cancel: Canceled.
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
   * The information about the deployment process.
   */
  pipeline?: GetPipelineRunResponseBodyPipeline;
  /**
   * @remarks
   * The request ID. Used to locate logs and troubleshoot issues.
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

