// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentVersionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the managed or custom agent to which the version belongs.
   * 
   * @example
   * agent-0123456789abcdef0123456789abcdef
   */
  agentId?: string;
  /**
   * @remarks
   * The system-generated version number that increments for the agent, such as v1 and v2. This is used when querying or deleting versions, and when server endpoints reference the version.
   * 
   * @example
   * v1
   */
  agentVersion?: string;
  /**
   * @remarks
   * Indicates only whether the version template and artifact archive are complete, and does not represent the deployment or running status. Valid values: READY indicates that the archive is complete. INVALID indicates that the archive is missing or inconsistent.
   * 
   * @example
   * READY
   */
  artifactStatus?: string;
  /**
   * @remarks
   * For managed agents, the structure is consistent with the data structure of GetManagedAgent. For custom agents, the structure is consistent with the data structure of GetCustomAgent. The data masking rules are the same.
   * 
   * @example
   * {"agentId":"agent-0123456789abcdef0123456789abcdef","workspaceId":"ws-0123456789abcdef01234","name":"customer-service","description":"Customer service agent","status":"Running","latestSpecVersion":2,"instruction":"You are a customer service assistant."}
   */
  configuration?: { [key: string]: any };
  /**
   * @remarks
   * The time when the version was saved, in ISO 8601 UTC format.
   * 
   * @example
   * 2026-08-12T01:02:03Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The UID of the Alibaba Cloud account of the caller who saved the version. If the API is called by a RAM user, this is the UID of the Alibaba Cloud account to which the RAM user belongs.
   * 
   * @example
   * 1234567890123456
   */
  createdBy?: string;
  /**
   * @remarks
   * The version description provided when the version was saved. It can be up to 1,024 characters in length. If no description was provided when the version was saved, this field is empty.
   * 
   * @example
   * Stable version for the production environment
   */
  description?: string;
  /**
   * @remarks
   * The effective release sequence number of the agent when the version was saved, which is the effectiveSpecVersion at that time. This value does not change after the version is saved.
   * 
   * @example
   * 2
   */
  targetSpecVersion?: number;
  /**
   * @remarks
   * The display name specified by the user when the version was saved. For earlier saved versions where no name was recorded, the agentVersion is returned.
   * 
   * @example
   * Production stable version V1.0
   */
  versionName?: string;
  /**
   * @remarks
   * The ID of the AgentCore workspace where the agent that owns this version resides.
   * 
   * @example
   * ws-0123456789abcdef01234
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      agentVersion: 'agentVersion',
      artifactStatus: 'artifactStatus',
      configuration: 'configuration',
      createdAt: 'createdAt',
      createdBy: 'createdBy',
      description: 'description',
      targetSpecVersion: 'targetSpecVersion',
      versionName: 'versionName',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentVersion: 'string',
      artifactStatus: 'string',
      configuration: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      createdAt: 'string',
      createdBy: 'string',
      description: 'string',
      targetSpecVersion: 'number',
      versionName: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.configuration) {
      $dara.Model.validateMap(this.configuration);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. The value is SUCCESS if the request is successful, or an error code if the request fails.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The details of the fixed agent version. The configuration field contains the agent configuration at the time the version was saved.
   */
  data?: GetAgentVersionResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message. The value is success if the request is successful, or an error message if the request fails.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot the request.
   * 
   * @example
   * 5E8F3C2A-1B4D-4F6E-9A7C-0D2B8E6F4A1C
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
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
      data: GetAgentVersionResponseBodyData,
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

