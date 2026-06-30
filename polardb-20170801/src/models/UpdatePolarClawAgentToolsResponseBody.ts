// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePolarClawAgentToolsResponseBodyTools extends $dara.Model {
  /**
   * @remarks
   * The list of explicitly allowed tools.
   */
  allow?: string[];
  /**
   * @remarks
   * The list of additionally allowed tools.
   */
  alsoAllow?: string[];
  /**
   * @remarks
   * The list of denied tools.
   */
  deny?: string[];
  /**
   * @remarks
   * The tool profile.
   * 
   * @example
   * coding
   */
  profile?: string;
  static names(): { [key: string]: string } {
    return {
      allow: 'Allow',
      alsoAllow: 'AlsoAllow',
      deny: 'Deny',
      profile: 'Profile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allow: { 'type': 'array', 'itemType': 'string' },
      alsoAllow: { 'type': 'array', 'itemType': 'string' },
      deny: { 'type': 'array', 'itemType': 'string' },
      profile: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.allow)) {
      $dara.Model.validateArray(this.allow);
    }
    if(Array.isArray(this.alsoAllow)) {
      $dara.Model.validateArray(this.alsoAllow);
    }
    if(Array.isArray(this.deny)) {
      $dara.Model.validateArray(this.deny);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePolarClawAgentToolsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Agent ID
   * 
   * @example
   * work
   */
  agentId?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * pa-xxx
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
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful.
   * 
   * @example
   * true
   */
  ok?: boolean;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F45FFACC-xxx
   */
  requestId?: string;
  /**
   * @remarks
   * The updated tool configuration.
   */
  tools?: UpdatePolarClawAgentToolsResponseBodyTools;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      applicationId: 'ApplicationId',
      code: 'Code',
      message: 'Message',
      ok: 'Ok',
      requestId: 'RequestId',
      tools: 'Tools',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      applicationId: 'string',
      code: 'number',
      message: 'string',
      ok: 'boolean',
      requestId: 'string',
      tools: UpdatePolarClawAgentToolsResponseBodyTools,
    };
  }

  validate() {
    if(this.tools && typeof (this.tools as any).validate === 'function') {
      (this.tools as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

