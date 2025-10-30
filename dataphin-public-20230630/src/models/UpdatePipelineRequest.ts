// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePipelineRequestContext extends $dara.Model {
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

export class UpdatePipelineRequestUpdateCommandNodeInfo extends $dara.Model {
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

export class UpdatePipelineRequestUpdateCommandPipelineConfigHops extends $dara.Model {
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

export class UpdatePipelineRequestUpdateCommandPipelineConfigSteps extends $dara.Model {
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

export class UpdatePipelineRequestUpdateCommandPipelineConfig extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  hops?: UpdatePipelineRequestUpdateCommandPipelineConfigHops[];
  /**
   * @remarks
   * This parameter is required.
   */
  steps?: UpdatePipelineRequestUpdateCommandPipelineConfigSteps[];
  static names(): { [key: string]: string } {
    return {
      hops: 'Hops',
      steps: 'Steps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hops: { 'type': 'array', 'itemType': UpdatePipelineRequestUpdateCommandPipelineConfigHops },
      steps: { 'type': 'array', 'itemType': UpdatePipelineRequestUpdateCommandPipelineConfigSteps },
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

export class UpdatePipelineRequestUpdateCommand extends $dara.Model {
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
  nodeInfo?: UpdatePipelineRequestUpdateCommandNodeInfo;
  /**
   * @remarks
   * This parameter is required.
   */
  pipelineConfig?: UpdatePipelineRequestUpdateCommandPipelineConfig;
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
      nodeInfo: UpdatePipelineRequestUpdateCommandNodeInfo,
      pipelineConfig: UpdatePipelineRequestUpdateCommandPipelineConfig,
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

export class UpdatePipelineRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  context?: UpdatePipelineRequestContext;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  updateCommand?: UpdatePipelineRequestUpdateCommand;
  static names(): { [key: string]: string } {
    return {
      context: 'Context',
      opTenantId: 'OpTenantId',
      updateCommand: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: UpdatePipelineRequestContext,
      opTenantId: 'number',
      updateCommand: UpdatePipelineRequestUpdateCommand,
    };
  }

  validate() {
    if(this.context && typeof (this.context as any).validate === 'function') {
      (this.context as any).validate();
    }
    if(this.updateCommand && typeof (this.updateCommand as any).validate === 'function') {
      (this.updateCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

