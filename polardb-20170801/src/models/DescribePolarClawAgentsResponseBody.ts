// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolarClawAgentsResponseBodyAgentsIdentity extends $dara.Model {
  /**
   * @remarks
   * The path or content of the avatar.
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
   * The emoji for the identity. This can be a Unicode code point (e.g., `U+1F99E`) or an emoji character.
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
   * The identity theme.
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

export class DescribePolarClawAgentsResponseBodyAgents extends $dara.Model {
  /**
   * @remarks
   * The agent ID.
   * 
   * @example
   * main
   */
  id?: string;
  /**
   * @remarks
   * The agent\\"s identity.
   */
  identity?: DescribePolarClawAgentsResponseBodyAgentsIdentity;
  /**
   * @remarks
   * The agent display name.
   * 
   * @example
   * main
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      identity: 'Identity',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      identity: DescribePolarClawAgentsResponseBodyAgentsIdentity,
      name: 'string',
    };
  }

  validate() {
    if(this.identity && typeof (this.identity as any).validate === 'function') {
      (this.identity as any).validate();
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
   * The list of agents.
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
   * The status code.
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
   * The main agent key name.
   * 
   * @example
   * main
   */
  mainKey?: string;
  /**
   * @remarks
   * The message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
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

