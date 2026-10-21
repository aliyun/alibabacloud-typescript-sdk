// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgenticAgentByInstallTokenResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The prefix list of visible access tokens that are neither revoked nor expired under the agent. This parameter is empty if no access tokens are returned or no access tokens meet the conditional criteria. The prefix is used only to identify the credential and does not contain the complete secret.
   */
  activeApiKeyPrefixes?: string[];
  /**
   * @remarks
   * The unique identifier of the agent.
   * 
   * @example
   * agent-7f3c9a2b
   */
  agentId?: string;
  /**
   * @remarks
   * The name of the agent.
   * 
   * @example
   * my-data-agent
   */
  agentName?: string;
  /**
   * @remarks
   * The permission type of the agent. Valid values: HUMAN_BOUND (inherits user permissions), PERMISSION_NARROW (narrowed down from user permissions), and STANDALONE (independent permissions). The agent generated through the install token redemption process is of the HUMAN_BOUND type.
   * 
   * @example
   * HUMAN_BOUND
   */
  agentType?: string;
  /**
   * @remarks
   * The creation time of the agent, in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2026-07-13 10:30:00
   */
  createdAt?: string;
  /**
   * @remarks
   * The creation method of the agent. A value of auto indicates automatic creation by the system, and a value of manual indicates manual creation by a user. The agent generated through the install token redemption process is auto.
   * 
   * @example
   * auto
   */
  creationType?: string;
  /**
   * @remarks
   * The description of the agent. This parameter is empty if it is not set.
   * 
   * @example
   * Agent for data analytics
   */
  description?: string;
  /**
   * @remarks
   * The ID of the user to whom the agent belongs.
   * 
   * @example
   * 27400000000000001
   */
  ownerId?: string;
  /**
   * @remarks
   * The status of the agent. A value of active indicates that the agent is enabled, and a value of disabled indicates that the agent is disabled.
   * 
   * @example
   * active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      activeApiKeyPrefixes: 'ActiveApiKeyPrefixes',
      agentId: 'AgentId',
      agentName: 'AgentName',
      agentType: 'AgentType',
      createdAt: 'CreatedAt',
      creationType: 'CreationType',
      description: 'Description',
      ownerId: 'OwnerId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeApiKeyPrefixes: { 'type': 'array', 'itemType': 'string' },
      agentId: 'string',
      agentName: 'string',
      agentType: 'string',
      createdAt: 'string',
      creationType: 'string',
      description: 'string',
      ownerId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.activeApiKeyPrefixes)) {
      $dara.Model.validateArray(this.activeApiKeyPrefixes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgenticAgentByInstallTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The agent information associated with the install token after redemption. This parameter is empty if the token has not been redeemed, or if the associated credential or agent does not exist.
   */
  data?: GetAgenticAgentByInstallTokenResponseBodyData;
  /**
   * @remarks
   * The error code returned when the request fails. Programs use this code to determine the failure type. This parameter is empty when the request succeeds.
   * 
   * @example
   * INSTALL_TOKEN_INVALID
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned when the request fails. This message helps with manual troubleshooting. This parameter is empty when the request succeeds.
   * 
   * @example
   * install_token not found
   */
  errorMessage?: string;
  /**
   * @remarks
   * The unique identifier of the request, used for troubleshooting and log correlation.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6C-2C4DD51BD5E7
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. A value of true indicates that the query succeeded. A value of false indicates that the query failed. In this case, you can use ErrorCode and ErrorMessage to identify the cause.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetAgenticAgentByInstallTokenResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

