// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePolarClawAgentRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the agent to delete. This parameter cannot be set to `main`.
   * 
   * This parameter is required.
   * 
   * @example
   * work
   */
  agentId?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * Specifies whether to delete the working directory and session files. Default value: `true`.
   * 
   * @example
   * true
   */
  deleteFiles?: boolean;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      applicationId: 'ApplicationId',
      deleteFiles: 'DeleteFiles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      applicationId: 'string',
      deleteFiles: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

