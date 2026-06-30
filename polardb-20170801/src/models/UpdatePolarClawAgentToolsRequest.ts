// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePolarClawAgentToolsRequest extends $dara.Model {
  /**
   * @remarks
   * Agent ID
   * 
   * This parameter is required.
   * 
   * @example
   * work
   */
  agentId?: string;
  /**
   * @remarks
   * The list of explicitly allowed tools.
   * 
   * @example
   * ["read","write","exec"]
   */
  allow?: string[];
  /**
   * @remarks
   * The list of additionally allowed tools.
   * 
   * @example
   * ["send_message"]
   */
  alsoAllow?: string[];
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-xxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The list of denied tools.
   * 
   * @example
   * ["exec"]
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
      agentId: 'AgentId',
      allow: 'Allow',
      alsoAllow: 'AlsoAllow',
      applicationId: 'ApplicationId',
      deny: 'Deny',
      profile: 'Profile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      allow: { 'type': 'array', 'itemType': 'string' },
      alsoAllow: { 'type': 'array', 'itemType': 'string' },
      applicationId: 'string',
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

