// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePolarClawAgentToolsShrinkRequest extends $dara.Model {
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
  allowShrink?: string;
  /**
   * @remarks
   * The list of additionally allowed tools.
   * 
   * @example
   * ["send_message"]
   */
  alsoAllowShrink?: string;
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
  denyShrink?: string;
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
      allowShrink: 'Allow',
      alsoAllowShrink: 'AlsoAllow',
      applicationId: 'ApplicationId',
      denyShrink: 'Deny',
      profile: 'Profile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      allowShrink: 'string',
      alsoAllowShrink: 'string',
      applicationId: 'string',
      denyShrink: 'string',
      profile: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

