// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteExternalAgentResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The external agent ID.
   * 
   * @example
   * agent-1
   */
  agentId?: string;
  /**
   * @remarks
   * The creation mode.
   * 
   * @example
   * CUSTOM
   */
  createMode?: string;
  /**
   * @remarks
   * The creation time in RFC 3339 format.
   * 
   * @example
   * 2026-01-01T00:00:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The deployment type.
   * 
   * @example
   * SELF_HOSTED
   */
  deployType?: string;
  /**
   * @remarks
   * The description of the external agent.
   * 
   * @example
   * A code review agent running in the user environment
   */
  description?: string;
  /**
   * @remarks
   * The latest specification version number.
   * 
   * @example
   * 1
   */
  latestSpecVersion?: number;
  /**
   * @remarks
   * The name of the external agent.
   * 
   * @example
   * my-external-agent
   */
  name?: string;
  /**
   * @remarks
   * The runtime type reported by the external agent.
   * 
   * @example
   * qwenpaw
   */
  runtime?: string;
  /**
   * @remarks
   * The status of the external agent. Valid values:
   * - Creating: The agent is being created.
   * - Running: The agent is running.
   * - Failed: The agent has failed.
   * - Updating: The agent is being updated.
   * - Deleting: The agent is being deleted.
   * - Deleted: The agent has been deleted.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The update time in RFC 3339 format.
   * 
   * @example
   * 2026-01-01T00:00:00Z
   */
  updatedAt?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * ws-1
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      createMode: 'createMode',
      createdAt: 'createdAt',
      deployType: 'deployType',
      description: 'description',
      latestSpecVersion: 'latestSpecVersion',
      name: 'name',
      runtime: 'runtime',
      status: 'status',
      updatedAt: 'updatedAt',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      createMode: 'string',
      createdAt: 'string',
      deployType: 'string',
      description: 'string',
      latestSpecVersion: 'number',
      name: 'string',
      runtime: 'string',
      status: 'string',
      updatedAt: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExternalAgentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. The value SUCCESS is returned if the request is successful.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The summary information of the deleted external agent.
   */
  data?: DeleteExternalAgentResponseBodyData;
  /**
   * @remarks
   * The HTTP status code. The value 200 is returned if the request is successful.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message returned for the request processing result.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1a2b3c4d-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DeleteExternalAgentResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
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

