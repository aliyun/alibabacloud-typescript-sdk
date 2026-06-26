// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolarClawAgentsResponseBodyAgentsFiles extends $dara.Model {
  /**
   * @example
   * false
   */
  missing?: boolean;
  /**
   * @example
   * SOUL.md
   */
  name?: string;
  /**
   * @example
   * /home/node/.openclaw/workspace-work/SOUL.md
   */
  path?: string;
  /**
   * @example
   * 1024
   */
  size?: number;
  /**
   * @example
   * 1716000000000
   */
  updatedAtMs?: number;
  static names(): { [key: string]: string } {
    return {
      missing: 'Missing',
      name: 'Name',
      path: 'Path',
      size: 'Size',
      updatedAtMs: 'UpdatedAtMs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      missing: 'boolean',
      name: 'string',
      path: 'string',
      size: 'number',
      updatedAtMs: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolarClawAgentsResponseBodyAgentsIdentity extends $dara.Model {
  /**
   * @remarks
   * The avatar path or content.
   * 
   * @example
   * test
   */
  avatar?: string;
  /**
   * @remarks
   * The avatar URL.
   * 
   * @example
   * test
   */
  avatarUrl?: string;
  /**
   * @remarks
   * The emoji identifier in Unicode encoding format such as U+1F99E, or a direct emoji character.
   * 
   * @example
   * U+1F99E
   */
  emoji?: string;
  /**
   * @remarks
   * The identity name.
   * 
   * @example
   * PolarClaw
   */
  name?: string;
  /**
   * @remarks
   * The theme.
   * 
   * @example
   * space lobster
   */
  theme?: string;
  static names(): { [key: string]: string } {
    return {
      avatar: 'Avatar',
      avatarUrl: 'AvatarUrl',
      emoji: 'Emoji',
      name: 'Name',
      theme: 'Theme',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatar: 'string',
      avatarUrl: 'string',
      emoji: 'string',
      name: 'string',
      theme: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolarClawAgentsResponseBodyAgentsModel extends $dara.Model {
  fallbacks?: string[];
  /**
   * @example
   * claude-sonnet-4-5
   */
  primary?: string;
  static names(): { [key: string]: string } {
    return {
      fallbacks: 'Fallbacks',
      primary: 'Primary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fallbacks: { 'type': 'array', 'itemType': 'string' },
      primary: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fallbacks)) {
      $dara.Model.validateArray(this.fallbacks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolarClawAgentsResponseBodyAgents extends $dara.Model {
  /**
   * @example
   * true
   */
  default?: boolean;
  files?: DescribePolarClawAgentsResponseBodyAgentsFiles[];
  /**
   * @remarks
   * Agent ID
   * 
   * @example
   * main
   */
  id?: string;
  /**
   * @remarks
   * The identity information.
   */
  identity?: DescribePolarClawAgentsResponseBodyAgentsIdentity;
  model?: DescribePolarClawAgentsResponseBodyAgentsModel;
  /**
   * @remarks
   * The display name of the agent.
   * 
   * @example
   * main
   */
  name?: string;
  skills?: string[];
  /**
   * @example
   * /home/node/.openclaw/workspace-work
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      default: 'Default',
      files: 'Files',
      id: 'Id',
      identity: 'Identity',
      model: 'Model',
      name: 'Name',
      skills: 'Skills',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      default: 'boolean',
      files: { 'type': 'array', 'itemType': DescribePolarClawAgentsResponseBodyAgentsFiles },
      id: 'string',
      identity: DescribePolarClawAgentsResponseBodyAgentsIdentity,
      model: DescribePolarClawAgentsResponseBodyAgentsModel,
      name: 'string',
      skills: { 'type': 'array', 'itemType': 'string' },
      workspace: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.files)) {
      $dara.Model.validateArray(this.files);
    }
    if(this.identity && typeof (this.identity as any).validate === 'function') {
      (this.identity as any).validate();
    }
    if(this.model && typeof (this.model as any).validate === 'function') {
      (this.model as any).validate();
    }
    if(Array.isArray(this.skills)) {
      $dara.Model.validateArray(this.skills);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolarClawAgentsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The agent list.
   */
  agents?: DescribePolarClawAgentsResponseBodyAgents[];
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The default agent ID.
   * 
   * @example
   * main
   */
  defaultId?: string;
  /**
   * @remarks
   * The primary agent key name.
   * 
   * @example
   * main
   */
  mainKey?: string;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 24A1990B-4F6E-482B-B8CB-75C612******
   */
  requestId?: string;
  /**
   * @remarks
   * The routing scope.
   * 
   * @example
   * per-sender
   */
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      agents: 'Agents',
      applicationId: 'ApplicationId',
      code: 'Code',
      defaultId: 'DefaultId',
      mainKey: 'MainKey',
      message: 'Message',
      requestId: 'RequestId',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agents: { 'type': 'array', 'itemType': DescribePolarClawAgentsResponseBodyAgents },
      applicationId: 'string',
      code: 'number',
      defaultId: 'string',
      mainKey: 'string',
      message: 'string',
      requestId: 'string',
      scope: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.agents)) {
      $dara.Model.validateArray(this.agents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

