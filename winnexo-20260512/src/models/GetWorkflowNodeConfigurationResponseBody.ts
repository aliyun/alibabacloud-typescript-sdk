// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkflowNodeConfigurationResponseBodyDefaultExecutor extends $dara.Model {
  /**
   * @remarks
   * The ID of the executor. If the type is USER, this is a positive integer string representing the platform user ID. If the type is AGENT, this is the technical name of the digital employee in the workspace.
   * 
   * @example
   * agent_1001
   */
  id?: string;
  /**
   * @remarks
   * The type of the executor. Valid values: USER for a real person, AGENT for a digital employee, and SYSTEM for a legacy system executor. The SYSTEM value is used only in responses.
   * 
   * @example
   * AGENT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowNodeConfigurationResponseBodyEffectiveExecutor extends $dara.Model {
  /**
   * @remarks
   * The ID of the executor. If the type is USER, this is a positive integer string representing the platform user ID. If the type is AGENT, this is the technical name of the digital employee in the workspace.
   * 
   * @example
   * agent_1001
   */
  id?: string;
  /**
   * @remarks
   * The type of the executor. Valid values: USER for a real person, AGENT for a digital employee, and SYSTEM for a legacy system executor. The SYSTEM value is used only in responses.
   * 
   * @example
   * AGENT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowNodeConfigurationResponseBodyOverridesExecutor extends $dara.Model {
  /**
   * @remarks
   * The ID of the executor. If the type is USER, this is a positive integer string representing the platform user ID. If the type is AGENT, this is the technical name of the digital employee in the workspace.
   * 
   * @example
   * agent_1001
   */
  id?: string;
  /**
   * @remarks
   * The type of the executor. Valid values: USER for a real person, AGENT for a digital employee, and SYSTEM for a legacy system executor. The SYSTEM value is used only in responses.
   * 
   * @example
   * AGENT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowNodeConfigurationResponseBodyOverrides extends $dara.Model {
  /**
   * @remarks
   * The override executor. A null value indicates that the default is used.
   * 
   * @example
   * {"type":"AGENT","id":"agent_1001"}
   */
  executor?: GetWorkflowNodeConfigurationResponseBodyOverridesExecutor;
  /**
   * @remarks
   * The override model runtime profile. A null value indicates that the default is used.
   * 
   * @example
   * qwen-max
   */
  model?: string;
  /**
   * @remarks
   * The list of override responsible user IDs. A null value indicates that the default is used.
   * 
   * @example
   * [10001]
   */
  responsibleUserIds?: number[];
  static names(): { [key: string]: string } {
    return {
      executor: 'executor',
      model: 'model',
      responsibleUserIds: 'responsibleUserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executor: GetWorkflowNodeConfigurationResponseBodyOverridesExecutor,
      model: 'string',
      responsibleUserIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(this.executor && typeof (this.executor as any).validate === 'function') {
      (this.executor as any).validate();
    }
    if(Array.isArray(this.responsibleUserIds)) {
      $dara.Model.validateArray(this.responsibleUserIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowNodeConfigurationResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the current user can edit this node.
   * 
   * @example
   * true
   */
  canEdit?: boolean;
  /**
   * @remarks
   * The common business status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The configuration version. It is used as the expectedVersion when updating or restoring the configuration.
   * 
   * @example
   * 3
   */
  configVersion?: number;
  /**
   * @remarks
   * The default executor of the template.
   * 
   * @example
   * {"type":"AGENT","id":"agent_1001"}
   */
  defaultExecutor?: GetWorkflowNodeConfigurationResponseBodyDefaultExecutor;
  /**
   * @remarks
   * The default model runtime profile of the template.
   * 
   * @example
   * qwen-max
   */
  defaultModel?: string;
  /**
   * @remarks
   * The list of user IDs for the default responsible users of the template.
   * 
   * @example
   * [10001]
   */
  defaultResponsibleUserIds?: string[];
  /**
   * @remarks
   * The currently effective executor.
   * 
   * @example
   * {"type":"AGENT","id":"agent_1001"}
   */
  effectiveExecutor?: GetWorkflowNodeConfigurationResponseBodyEffectiveExecutor;
  /**
   * @remarks
   * The currently effective model runtime profile.
   * 
   * @example
   * qwen-max-plus
   */
  effectiveModel?: string;
  /**
   * @remarks
   * The list of user IDs for the currently effective responsible users.
   * 
   * @example
   * [10001]
   */
  effectiveResponsibleUserIds?: string[];
  /**
   * @remarks
   * The ID of the current physical plan.
   * 
   * @example
   * inst_2081
   */
  instanceId?: string;
  /**
   * @remarks
   * The common error description.
   * 
   * @example
   * The requested resource does not exist
   */
  message?: string;
  /**
   * @remarks
   * The key of the business node.
   * 
   * @example
   * node_7f3a2c
   */
  nodeId?: string;
  /**
   * @remarks
   * The override values for the instance. If a field is null, the default value of the template is used.
   * 
   * @example
   * {"model":"qwen-max-plus"}
   */
  overrides?: GetWorkflowNodeConfigurationResponseBodyOverrides;
  /**
   * @remarks
   * The request tracking ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The state refresh cursor. This cannot be used as a configuration version.
   * 
   * @example
   * 8
   */
  stateVersion?: number;
  /**
   * @remarks
   * The time when the configuration was last updated, in ISO 8601 format. This field is empty if the configuration has never been updated.
   * 
   * @example
   * 2026-11-05T08:00:00Z
   */
  updatedAt?: string;
  /**
   * @remarks
   * The platform user ID of the user who last updated the configuration. This field is empty if the configuration has never been updated.
   * 
   * @example
   * 10001
   */
  updatedBy?: number;
  static names(): { [key: string]: string } {
    return {
      canEdit: 'canEdit',
      code: 'code',
      configVersion: 'configVersion',
      defaultExecutor: 'defaultExecutor',
      defaultModel: 'defaultModel',
      defaultResponsibleUserIds: 'defaultResponsibleUserIds',
      effectiveExecutor: 'effectiveExecutor',
      effectiveModel: 'effectiveModel',
      effectiveResponsibleUserIds: 'effectiveResponsibleUserIds',
      instanceId: 'instanceId',
      message: 'message',
      nodeId: 'nodeId',
      overrides: 'overrides',
      requestId: 'requestId',
      stateVersion: 'stateVersion',
      updatedAt: 'updatedAt',
      updatedBy: 'updatedBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canEdit: 'boolean',
      code: 'string',
      configVersion: 'number',
      defaultExecutor: GetWorkflowNodeConfigurationResponseBodyDefaultExecutor,
      defaultModel: 'string',
      defaultResponsibleUserIds: { 'type': 'array', 'itemType': 'string' },
      effectiveExecutor: GetWorkflowNodeConfigurationResponseBodyEffectiveExecutor,
      effectiveModel: 'string',
      effectiveResponsibleUserIds: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      message: 'string',
      nodeId: 'string',
      overrides: GetWorkflowNodeConfigurationResponseBodyOverrides,
      requestId: 'string',
      stateVersion: 'number',
      updatedAt: 'string',
      updatedBy: 'number',
    };
  }

  validate() {
    if(this.defaultExecutor && typeof (this.defaultExecutor as any).validate === 'function') {
      (this.defaultExecutor as any).validate();
    }
    if(Array.isArray(this.defaultResponsibleUserIds)) {
      $dara.Model.validateArray(this.defaultResponsibleUserIds);
    }
    if(this.effectiveExecutor && typeof (this.effectiveExecutor as any).validate === 'function') {
      (this.effectiveExecutor as any).validate();
    }
    if(Array.isArray(this.effectiveResponsibleUserIds)) {
      $dara.Model.validateArray(this.effectiveResponsibleUserIds);
    }
    if(this.overrides && typeof (this.overrides as any).validate === 'function') {
      (this.overrides as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

