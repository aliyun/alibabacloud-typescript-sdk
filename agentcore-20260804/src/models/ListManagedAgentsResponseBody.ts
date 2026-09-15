// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListManagedAgentsResponseBodyItemsHarnessConfiguration extends $dara.Model {
  /**
   * @remarks
   * Binds a Service Account Key of the QoderCLI Connector by Key ID. This parameter can be omitted when only one key exists, but is required when multiple keys exist.
   * 
   * @example
   * key-xxxx
   */
  connectorServiceAccountKey?: string;
  /**
   * @remarks
   * The Connector Key name populated during queries. This parameter is not used as a binding reference during writes.
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
   * The Connector binding configuration for the qodercli framework.
   */
  configuration?: ListManagedAgentsResponseBodyItemsHarnessConfiguration;
  /**
   * @remarks
   * The runtime framework type. Valid values: qwenpaw and qodercli. The qodercli type binds by configuration.connectorServiceAccountKey, and the name is also populated during queries.
   * 
   * @example
   * qodercli
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: ListManagedAgentsResponseBodyItemsHarnessConfiguration,
      type: 'string',
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
   * The managed agent ID.
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
   * The description of the managed agent.
   * 
   * @example
   * An agent for code review
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
   * The name of the managed agent.
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
   * The status of the managed agent. Valid values:
   * - Creating: Being created.
   * - Failed: Failed.
   * - Running: Running.
   * - Updating: Being updated.
   * - Deleted: Deleted.
   * - Deleting: Being deleted.
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
   * The list of managed agents.
   * 
   * @example
   * [{"agentId":"agent-xxxxxx","workspaceId":"ws-xxxxxx","agentName":"demo-agent","status":"Running","template":{"templateId":"tpl-xxxxxx","templateVersion":"v1.0.0"},"spec":{"replicas":1,"cpu":"2","memory":"4Gi"},"createTime":"2026-01-01T00:00:00Z","updateTime":"2026-01-01T00:00:00Z"}]
   */
  items?: ListManagedAgentsResponseBodyItems[];
  /**
   * @remarks
   * The maximum number of results returned for this request.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The result message of the request.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The token for the next page. An empty value indicates that the last page has been reached.
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
   * Indicates whether the request was successful.
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

