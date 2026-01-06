// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPipelineRunResponseBodyPipelineStages extends $dara.Model {
  /**
   * @remarks
   * The code of the stage.
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
   * The details of the stage.
   */
  detail?: { [key: string]: any };
  /**
   * @remarks
   * The error message returned for the stage.
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
   * *   Init
   * *   Running
   * *   Success
   * *   Fail
   * *   Termination
   * *   Cancel
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The step number of the stage.
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
   * *   Deploy
   * *   Check
   * *   Offline
   * *   Build
   * *   Delete
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
   * The time when the process was created. This value is a UNIX timestamp.
   * 
   * @example
   * 1724984066000
   */
  createTime?: number;
  /**
   * @remarks
   * The creator of the process.
   * 
   * @example
   * 137946317766XXXX
   */
  creator?: string;
  /**
   * @example
   * 发布流程描述信息
   */
  description?: string;
  /**
   * @remarks
   * The process ID.
   * 
   * @example
   * a7ef0634-20ec-4a7c-a214-54020f91XXXX
   */
  id?: string;
  /**
   * @remarks
   * The error message returned when the process fails.
   * 
   * @example
   * Error message
   */
  message?: string;
  /**
   * @remarks
   * The time when the process was modified. This value is a UNIX timestamp.
   * 
   * @example
   * 1724984066000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The DataWorks workspace ID.
   * 
   * @example
   * 56160
   */
  projectId?: number;
  /**
   * @remarks
   * The information about stages in the process.
   */
  stages?: GetPipelineRunResponseBodyPipelineStages[];
  /**
   * @remarks
   * The status of the process.
   * 
   * Valid values:
   * 
   * *   Init
   * *   Running
   * *   Success
   * *   Fail
   * *   Termination
   * *   Cancel
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
   * The information about the process.
   */
  pipeline?: GetPipelineRunResponseBodyPipeline;
  /**
   * @remarks
   * The request ID.
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

