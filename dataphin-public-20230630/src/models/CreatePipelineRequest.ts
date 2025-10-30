// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePipelineRequestContext extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DEV
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
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

export class CreatePipelineRequestCreateCommandNodeInfo extends $dara.Model {
  /**
   * @example
   * /
   */
  directory?: string;
  /**
   * @example
   * 123
   */
  fileId?: number;
  /**
   * @example
   * n_123
   */
  nodeId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  nodeName?: string;
  /**
   * @example
   * 123
   */
  pipelineId?: number;
  static names(): { [key: string]: string } {
    return {
      directory: 'Directory',
      fileId: 'FileId',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      pipelineId: 'PipelineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directory: 'string',
      fileId: 'number',
      nodeId: 'string',
      nodeName: 'string',
      pipelineId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineRequestCreateCommandPipelineConfigHops extends $dara.Model {
  sendTo?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mysql_reader
   */
  source?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * odps_writer
   */
  target?: string;
  static names(): { [key: string]: string } {
    return {
      sendTo: 'SendTo',
      source: 'Source',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sendTo: 'boolean',
      source: 'string',
      target: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineRequestCreateCommandPipelineConfigSteps extends $dara.Model {
  isDistribute?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mysqlinput
   */
  key?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {}
   */
  pluginConfig?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mysql_reader
   */
  stepName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * input
   */
  stepType?: string;
  static names(): { [key: string]: string } {
    return {
      isDistribute: 'IsDistribute',
      key: 'Key',
      pluginConfig: 'PluginConfig',
      stepName: 'StepName',
      stepType: 'StepType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDistribute: 'boolean',
      key: 'string',
      pluginConfig: 'string',
      stepName: 'string',
      stepType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineRequestCreateCommandPipelineConfig extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  hops?: CreatePipelineRequestCreateCommandPipelineConfigHops[];
  /**
   * @remarks
   * This parameter is required.
   */
  steps?: CreatePipelineRequestCreateCommandPipelineConfigSteps[];
  static names(): { [key: string]: string } {
    return {
      hops: 'Hops',
      steps: 'Steps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hops: { 'type': 'array', 'itemType': CreatePipelineRequestCreateCommandPipelineConfigHops },
      steps: { 'type': 'array', 'itemType': CreatePipelineRequestCreateCommandPipelineConfigSteps },
    };
  }

  validate() {
    if(Array.isArray(this.hops)) {
      $dara.Model.validateArray(this.hops);
    }
    if(Array.isArray(this.steps)) {
      $dara.Model.validateArray(this.steps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineRequestCreateCommand extends $dara.Model {
  /**
   * @example
   * comment
   */
  comment?: string;
  /**
   * @example
   * PIPELINE
   */
  mode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  nodeInfo?: CreatePipelineRequestCreateCommandNodeInfo;
  /**
   * @remarks
   * This parameter is required.
   */
  pipelineConfig?: CreatePipelineRequestCreateCommandPipelineConfig;
  /**
   * @example
   * {}
   */
  pipelineJson?: string;
  /**
   * @example
   * 0
   */
  pipelineType?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"cronExpression":"0 0 0 * * ?"}
   */
  scheduleConfig?: string;
  /**
   * @example
   * {}
   */
  settings?: string;
  submit?: boolean;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      mode: 'Mode',
      nodeInfo: 'NodeInfo',
      pipelineConfig: 'PipelineConfig',
      pipelineJson: 'PipelineJson',
      pipelineType: 'PipelineType',
      scheduleConfig: 'ScheduleConfig',
      settings: 'Settings',
      submit: 'Submit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      mode: 'string',
      nodeInfo: CreatePipelineRequestCreateCommandNodeInfo,
      pipelineConfig: CreatePipelineRequestCreateCommandPipelineConfig,
      pipelineJson: 'string',
      pipelineType: 'number',
      scheduleConfig: 'string',
      settings: 'string',
      submit: 'boolean',
    };
  }

  validate() {
    if(this.nodeInfo && typeof (this.nodeInfo as any).validate === 'function') {
      (this.nodeInfo as any).validate();
    }
    if(this.pipelineConfig && typeof (this.pipelineConfig as any).validate === 'function') {
      (this.pipelineConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  context?: CreatePipelineRequestContext;
  /**
   * @remarks
   * This parameter is required.
   */
  createCommand?: CreatePipelineRequestCreateCommand;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      context: 'Context',
      createCommand: 'CreateCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: CreatePipelineRequestContext,
      createCommand: CreatePipelineRequestCreateCommand,
      opTenantId: 'number',
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

