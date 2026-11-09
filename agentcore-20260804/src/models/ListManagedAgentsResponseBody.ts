// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListManagedAgentsResponseBodyItemsHarnessConfiguration extends $dara.Model {
  /**
   * @remarks
   * The ID of the connector account key record bound to qodercli, which is not the original service account key.
   * 
   * @example
   * key-xxxx
   */
  connectorServiceAccountKey?: string;
  /**
   * @remarks
   * The name of the connector account bound to qodercli.
   * 
   * @example
   * my-connector-key
   */
  connectorServiceAccountName?: string;
  static names(): { [key: string]: string } {
    return {
      connectorServiceAccountKey: 'connectorServiceAccountKey',
      connectorServiceAccountName: 'connectorServiceAccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectorServiceAccountKey: 'string',
      connectorServiceAccountName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListManagedAgentsResponseBodyItemsHarness extends $dara.Model {
  /**
   * @remarks
   * The runtime framework configuration.
   */
  configuration?: ListManagedAgentsResponseBodyItemsHarnessConfiguration;
  /**
   * @remarks
   * Returned only in queries. The server calculates this value based on the complete instance distribution, which is not affected by the pagination and filtering of the instance list. If the image tag is missing, pagination is incomplete, or the value cannot be confirmed, this parameter is empty, which is not equivalent to 0.
   * 
   * @example
   * 2
   */
  outdatedInstanceCount?: number;
  /**
   * @remarks
   * The runtime framework type.
   * 
   * @example
   * qodercli
   */
  type?: string;
  /**
   * @remarks
   * Returned only in queries. Currently returns the tag of the pool target image. If the tag cannot be parsed, this parameter is empty and cannot be replaced by the agent configuration version.
   * 
   * @example
   * 202611031754
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      outdatedInstanceCount: 'outdatedInstanceCount',
      type: 'type',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: ListManagedAgentsResponseBodyItemsHarnessConfiguration,
      outdatedInstanceCount: 'number',
      type: 'string',
      version: 'string',
    };
  }

  validate() {
    if(this.configuration && typeof (this.configuration as any).validate === 'function') {
      (this.configuration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListManagedAgentsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The inbound access method.
   * 
   * @example
   * API_KEY
   */
  accessMode?: string;
  /**
   * @remarks
   * The user access scope.
   * 
   * @example
   * ALL
   */
  accessScope?: string;
  /**
   * @remarks
   * The ID of the managed Harness agent.
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
   * Managed
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
   * Managed
   */
  deployType?: string;
  /**
   * @remarks
   * The description of the managed Harness agent.
   * 
   * @example
   * Agent for code review
   */
  description?: string;
  /**
   * @remarks
   * The agent runtime framework.
   */
  harness?: ListManagedAgentsResponseBodyItemsHarness;
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
   * The name of the managed Harness agent.
   * 
   * @example
   * my-agent
   */
  name?: string;
  /**
   * @remarks
   * The runtime type.
   * 
   * @example
   * Managed
   */
  runtime?: string;
  /**
   * @remarks
   * The status of the managed Harness agent.
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
      accessMode: 'accessMode',
      accessScope: 'accessScope',
      agentId: 'agentId',
      createMode: 'createMode',
      createdAt: 'createdAt',
      deployType: 'deployType',
      description: 'description',
      harness: 'harness',
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
      accessMode: 'string',
      accessScope: 'string',
      agentId: 'string',
      createMode: 'string',
      createdAt: 'string',
      deployType: 'string',
      description: 'string',
      harness: ListManagedAgentsResponseBodyItemsHarness,
      latestSpecVersion: 'number',
      name: 'string',
      runtime: 'string',
      status: 'string',
      updatedAt: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.harness && typeof (this.harness as any).validate === 'function') {
      (this.harness as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListManagedAgentsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. A value of SUCCESS indicates success.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The list of managed Harness agents.
   * 
   * @example
   * [{"agentId":"agent-xxxxxx","workspaceId":"ws-xxxxxx","agentName":"demo-agent","status":"Running","template":{"templateId":"tpl-xxxxxx","templateVersion":"v1.0.0"},"spec":{"replicas":1,"cpu":"2","memory":"4Gi"},"createTime":"2026-01-01T00:00:00Z","updateTime":"2026-01-01T00:00:00Z"}]
   */
  items?: ListManagedAgentsResponseBodyItems[];
  /**
   * @remarks
   * The maximum number of results returned for the current request.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The message about the request processing result.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The token for the next page. An empty value indicates that the end of the list is reached.
   * 
   * @example
   * next-token-1
   */
  nextToken?: string;
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
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      httpStatusCode: 'httpStatusCode',
      items: 'items',
      maxResults: 'maxResults',
      message: 'message',
      nextToken: 'nextToken',
      requestId: 'requestId',
      success: 'success',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      items: { 'type': 'array', 'itemType': ListManagedAgentsResponseBodyItems },
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

