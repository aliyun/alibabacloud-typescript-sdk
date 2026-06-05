// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgentRequestVisibilityScope extends $dara.Model {
  projectIds?: string[];
  userIds?: string[];
  static names(): { [key: string]: string } {
    return {
      projectIds: 'ProjectIds',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectIds: { 'type': 'array', 'itemType': 'string' },
      userIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.projectIds)) {
      $dara.Model.validateArray(this.projectIds);
    }
    if(Array.isArray(this.userIds)) {
      $dara.Model.validateArray(this.userIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAgentRequest extends $dara.Model {
  callableAgents?: string[];
  description?: string;
  displayName?: string;
  metadata?: { [key: string]: any };
  model?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * my-agent
   */
  name?: string;
  skills?: string[];
  systemPrompt?: string;
  tools?: string[];
  /**
   * @example
   * TENANT
   */
  visibility?: string;
  visibilityScope?: CreateAgentRequestVisibilityScope;
  static names(): { [key: string]: string } {
    return {
      callableAgents: 'CallableAgents',
      description: 'Description',
      displayName: 'DisplayName',
      metadata: 'Metadata',
      model: 'Model',
      name: 'Name',
      skills: 'Skills',
      systemPrompt: 'SystemPrompt',
      tools: 'Tools',
      visibility: 'Visibility',
      visibilityScope: 'VisibilityScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callableAgents: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      displayName: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      model: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
      skills: { 'type': 'array', 'itemType': 'string' },
      systemPrompt: 'string',
      tools: { 'type': 'array', 'itemType': 'string' },
      visibility: 'string',
      visibilityScope: CreateAgentRequestVisibilityScope,
    };
  }

  validate() {
    if(Array.isArray(this.callableAgents)) {
      $dara.Model.validateArray(this.callableAgents);
    }
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    if(this.model) {
      $dara.Model.validateMap(this.model);
    }
    if(Array.isArray(this.skills)) {
      $dara.Model.validateArray(this.skills);
    }
    if(Array.isArray(this.tools)) {
      $dara.Model.validateArray(this.tools);
    }
    if(this.visibilityScope && typeof (this.visibilityScope as any).validate === 'function') {
      (this.visibilityScope as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

