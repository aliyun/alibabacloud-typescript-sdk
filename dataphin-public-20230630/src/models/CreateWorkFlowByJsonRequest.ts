// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkFlowByJsonRequestContext extends $dara.Model {
  /**
   * @remarks
   * The current operating environment. Valid values:
   * 
   * - DEV: the development environment.
   * - PROD: the production environment.
   * 
   * The current version supports only BASIC mode, so set this parameter to PROD.
   * 
   * This parameter is required.
   * 
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * The ID of the project to which the workflow node belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 789
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkFlowByJsonRequestCreateCommand extends $dara.Model {
  /**
   * @remarks
   * The node description.
   * 
   * @example
   * cooment
   */
  description?: string;
  /**
   * @remarks
   * The folder to which the node belongs. If this parameter is left empty, the root folder is used.
   * 
   * @example
   * /
   */
  directory?: string;
  /**
   * @remarks
   * The schedule configuration (required for periodic nodes). The value is a JSON string. Refer to the utility class: com.alibaba.dataphin.pipeline.common.facade.openapi.model.OAScheduleConfig#toJsonString method.
   * 
   * @example
   * {"cronExpression":"0 0 0 * * ?"}
   */
  scheduleConfig?: string;
  /**
   * @remarks
   * Specifies whether to submit the node. Default value: true.
   */
  submit?: boolean;
  /**
   * @remarks
   * The node name.
   * 
   * This parameter is required.
   * 
   * @example
   * workflow_name
   */
  taskName?: string;
  /**
   * @remarks
   * The node scheduling type. Valid values:
   * 
   * - 1: periodic scheduling.
   * - 3: manual scheduling.
   * - 5: real-time node.
   * 
   * This parameter is required.
   * 
   * @example
   * 5372881
   */
  taskType?: number;
  /**
   * @remarks
   * The workflow JSON.
   * 
   * This parameter is required.
   * 
   * @example
   * {"pipelineDTO":{"hops":[],"steps":[{"name":"xxx","x":305,"y":144,"id":"c404a7c6-8a75-4ed8-b348-0785423ad859","webConfig":{},"type":"text","key":"special_character_removal","pluginConfig":{"neuronParameters":{},"neuronInput":{},"neuronOutput":{},"setting":{}}}]}}
   */
  workFlowJson?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      directory: 'Directory',
      scheduleConfig: 'ScheduleConfig',
      submit: 'Submit',
      taskName: 'TaskName',
      taskType: 'TaskType',
      workFlowJson: 'WorkFlowJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      directory: 'string',
      scheduleConfig: 'string',
      submit: 'boolean',
      taskName: 'string',
      taskType: 'number',
      workFlowJson: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkFlowByJsonRequest extends $dara.Model {
  /**
   * @remarks
   * The request context information.
   * 
   * This parameter is required.
   */
  context?: CreateWorkFlowByJsonRequestContext;
  /**
   * @remarks
   * The JSON script command for creating a workflow.
   * 
   * This parameter is required.
   */
  createCommand?: CreateWorkFlowByJsonRequestCreateCommand;
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The ID of the operator user.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  static names(): { [key: string]: string } {
    return {
      context: 'Context',
      createCommand: 'CreateCommand',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: CreateWorkFlowByJsonRequestContext,
      createCommand: CreateWorkFlowByJsonRequestCreateCommand,
      opTenantId: 'number',
      opUserId: 'string',
    };
  }

  validate() {
    if(this.context && typeof (this.context as any).validate === 'function') {
      (this.context as any).validate();
    }
    if(this.createCommand && typeof (this.createCommand as any).validate === 'function') {
      (this.createCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

