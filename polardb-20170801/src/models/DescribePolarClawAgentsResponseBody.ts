// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolarClawAgentsResponseBodyAgentsIdentity extends $dara.Model {
  /**
   * @example
   * test
   */
  avatar?: string;
  /**
   * @example
   * test
   */
  avatarUrl?: string;
  /**
   * @example
   * U+1F99E
   */
  emoji?: string;
  /**
   * @example
   * PolarClaw
   */
  name?: string;
  /**
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
   * Agent ID
   * 
   * @example
   * main
   */
  id?: string;
  identity?: DescribePolarClawAgentsResponseBodyAgentsIdentity;
  /**
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
  agents?: DescribePolarClawAgentsResponseBodyAgents[];
  /**
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * main
   */
  defaultId?: string;
  /**
   * @example
   * main
   */
  mainKey?: string;
  /**
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

