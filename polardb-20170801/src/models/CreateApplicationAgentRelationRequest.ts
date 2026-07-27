// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApplicationAgentRelationRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the Agent to attach.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-xxx
   */
  agentId?: string;
  /**
   * @remarks
   * The ID of the Squad application.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-xxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The authentication token.
   * 
   * This parameter is required.
   * 
   * @example
   * pas_xxx
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      applicationId: 'ApplicationId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      applicationId: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

