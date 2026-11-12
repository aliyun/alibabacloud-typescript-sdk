// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomAgentsResponseBodyItemsArtifactCode extends $dara.Model {
  /**
   * @remarks
   * The startup command for the code package. This parameter is required in code package mode. The working directory is the extracted code root directory /code, such as python main.py. Quotes and escapes are supported. Environment variables, pipes, and logical operations are not automatically expanded. For complex commands, use a script within the package.
   * 
   * This parameter is required.
   * 
   * @example
   * python main.py
   */
  entrypoint?: string;
  /**
   * @remarks
   * The identifier of the code runtime environment for the current saved configuration. The runtime image uses a saved snapshot. Adding a new version to the catalog does not automatically change the existing configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * python3.12
   */
  languageRuntime?: string;
  /**
   * @remarks
   * The fixed oss:// address of the platform code package referenced by the current saved configuration. This address does not include the signature parameters of the source HTTPS link. You can use this address to reuse an existing code package. To download the content, call GetAgentCodePackageDownloadUrl.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://agentcore-platform-example/code-packages/workspaces/ws-a1b2c3d4e5f6/550e8400-e29b-41d4-a716-446655440000/package.zip
   */
  sourceUri?: string;
  static names(): { [key: string]: string } {
    return {
      entrypoint: 'entrypoint',
      languageRuntime: 'languageRuntime',
      sourceUri: 'sourceUri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entrypoint: 'string',
      languageRuntime: 'string',
      sourceUri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomAgentsResponseBodyItemsArtifactContainer extends $dara.Model {
  /**
   * @remarks
   * The custom container startup command and parameters. If not specified, the default startup method of the image is used.
   * 
   * @example
   * python main.py
   */
  entrypoint?: string;
  /**
   * @remarks
   * The ID of the ACR Enterprise instance.
   * 
   * @example
   * cri-example
   */
  instanceId?: string;
  /**
   * @remarks
   * The ACR namespace.
   * 
   * @example
   * team
   */
  namespace?: string;
  /**
   * @remarks
   * The name of the ACR image repository.
   * 
   * @example
   * app
   */
  repo?: string;
  /**
   * @remarks
   * The image tag.
   * 
   * @example
   * v1
   */
  tag?: string;
  /**
   * @remarks
   * The image source type. Valid values:
   * - acr: An ACR image.
   * - custom: A custom image source.
   * For the corresponding source configurations, refer to the descriptions of artifact.container and customImage.
   * 
   * This parameter is required.
   * 
   * @example
   * acr
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      entrypoint: 'entrypoint',
      instanceId: 'instanceId',
      namespace: 'namespace',
      repo: 'repo',
      tag: 'tag',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entrypoint: 'string',
      instanceId: 'string',
      namespace: 'string',
      repo: 'string',
      tag: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomAgentsResponseBodyItemsArtifact extends $dara.Model {
  /**
   * @remarks
   * The code package deployment configuration. This parameter is mutually exclusive with container. The code package uses the ZIP or TAR.GZ format. Dependencies are packaged by the user. The platform does not install dependencies or perform online builds.
   */
  code?: ListCustomAgentsResponseBodyItemsArtifactCode;
  /**
   * @remarks
   * The container image deployment configuration.
   */
  container?: ListCustomAgentsResponseBodyItemsArtifactContainer;
  /**
   * @remarks
   * The listening port of the agent service.
   * 
   * This parameter is required.
   * 
   * @example
   * 8080
   */
  port?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      container: 'container',
      port: 'port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: ListCustomAgentsResponseBodyItemsArtifactCode,
      container: ListCustomAgentsResponseBodyItemsArtifactContainer,
      port: 'number',
    };
  }

  validate() {
    if(this.code && typeof (this.code as any).validate === 'function') {
      (this.code as any).validate();
    }
    if(this.container && typeof (this.container as any).validate === 'function') {
      (this.container as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomAgentsResponseBodyItemsCodePackageInfo extends $dara.Model {
  /**
   * @remarks
   * The CRC64 value of the code package object.
   * 
   * @example
   * 456
   */
  crc64?: string;
  /**
   * @remarks
   * The ETag of the code package object.
   * 
   * @example
   * fixed-etag
   */
  etag?: string;
  /**
   * @remarks
   * The original code package file name.
   * 
   * @example
   * main.zip
   */
  fileName?: string;
  /**
   * @remarks
   * The compressed size of the code package.
   * 
   * @example
   * 123
   */
  fileSize?: number;
  /**
   * @remarks
   * The format of the code package.
   * 
   * @example
   * zip
   */
  format?: string;
  static names(): { [key: string]: string } {
    return {
      crc64: 'crc64',
      etag: 'etag',
      fileName: 'fileName',
      fileSize: 'fileSize',
      format: 'format',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crc64: 'string',
      etag: 'string',
      fileName: 'string',
      fileSize: 'number',
      format: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomAgentsResponseBodyItemsProtocolPaths extends $dara.Model {
  /**
   * @remarks
   * The purpose description of the current API path.
   * 
   * @example
   * AG-UI conversation API
   */
  description?: string;
  /**
   * @remarks
   * The API path corresponding to the current protocol.
   * 
   * This parameter is required.
   * 
   * @example
   * /agui
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomAgentsResponseBodyItemsProtocol extends $dara.Model {
  /**
   * @remarks
   * The request header configuration for the current protocol. The key is the header name and the value is a string.
   */
  headers?: { [key: string]: string };
  /**
   * @remarks
   * The list of API paths corresponding to the current protocol.
   */
  paths?: ListCustomAgentsResponseBodyItemsProtocolPaths[];
  /**
   * @remarks
   * The invocation protocol type. Valid values:
   * - agui: The AG-UI protocol.
   * - openai-chat-completion: The OpenAI Chat Completions compatible protocol.
   * - custom: A custom protocol.
   * 
   * This parameter is required.
   * 
   * @example
   * agui
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      paths: 'paths',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      paths: { 'type': 'array', 'itemType': ListCustomAgentsResponseBodyItemsProtocolPaths },
      type: 'string',
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(Array.isArray(this.paths)) {
      $dara.Model.validateArray(this.paths);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomAgentsResponseBodyItems extends $dara.Model {
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
   * The unique identifier of the custom code or image agent. You can obtain this ID from the response of CreateCustomAgent or ListCustomAgents.
   * 
   * @example
   * agent-550e8400e29b41d4a716446655440000
   */
  agentId?: string;
  /**
   * @remarks
   * The agent artifact.
   */
  artifact?: ListCustomAgentsResponseBodyItemsArtifact;
  /**
   * @remarks
   * The current saved code package information.
   */
  codePackageInfo?: ListCustomAgentsResponseBodyItemsCodePackageInfo;
  /**
   * @remarks
   * The creation method of the agent. CUSTOM is returned for custom code or image agents.
   * 
   * @example
   * CUSTOM
   */
  createMode?: string;
  /**
   * @remarks
   * The time when the agent was created. The time follows the ISO 8601 standard. The trailing Z indicates the UTC time zone, and fractional seconds may be included.
   * 
   * @example
   * 2026-10-10T06:00:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The deployment method of the agent. MANAGED is returned for custom code or image agents that are deployed and managed by the platform.
   * 
   * @example
   * MANAGED
   */
  deployType?: string;
  /**
   * @remarks
   * The description of the agent purpose.
   * 
   * @example
   * Custom agent that provides conversation services
   */
  description?: string;
  /**
   * @remarks
   * The latest configuration version number. Updates with the same configuration may retain the original version number. This field does not indicate that the configuration has taken effect.
   * 
   * @example
   * 1
   */
  latestSpecVersion?: number;
  /**
   * @remarks
   * The name of the custom code or image agent.
   * 
   * @example
   * my-custom-agent
   */
  name?: string;
  /**
   * @remarks
   * The list of invocation protocol configurations for the agent.
   */
  protocol?: ListCustomAgentsResponseBodyItemsProtocol[];
  /**
   * @remarks
   * The compute specification of the agent. Valid values: INTERACTIVE, STANDARD, and HEAVY.
   * 
   * @example
   * STANDARD
   */
  runtime?: string;
  /**
   * @remarks
   * The overall status of the agent. Valid values:
   * - Creating: The agent is being created.
   * - Running: The agent is running.
   * - Failed: The agent failed.
   * - Updating: The agent is being updated.
   * - Deleting: The agent is being deleted.
   * - Deleted: The agent is deleted.
   * To query the execution progress of the latest configuration, call GetCustomAgent.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The time when the agent was last updated. The time follows the ISO 8601 standard. The trailing Z indicates the UTC time zone, and fractional seconds may be included.
   * 
   * @example
   * 2026-10-10T06:05:00Z
   */
  updatedAt?: string;
  /**
   * @remarks
   * The ID of the workspace to which the custom code or image agent belongs.
   * 
   * @example
   * ws-a1b2c3d4e5f6
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessMode: 'accessMode',
      accessScope: 'accessScope',
      agentId: 'agentId',
      artifact: 'artifact',
      codePackageInfo: 'codePackageInfo',
      createMode: 'createMode',
      createdAt: 'createdAt',
      deployType: 'deployType',
      description: 'description',
      latestSpecVersion: 'latestSpecVersion',
      name: 'name',
      protocol: 'protocol',
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
      artifact: ListCustomAgentsResponseBodyItemsArtifact,
      codePackageInfo: ListCustomAgentsResponseBodyItemsCodePackageInfo,
      createMode: 'string',
      createdAt: 'string',
      deployType: 'string',
      description: 'string',
      latestSpecVersion: 'number',
      name: 'string',
      protocol: { 'type': 'array', 'itemType': ListCustomAgentsResponseBodyItemsProtocol },
      runtime: 'string',
      status: 'string',
      updatedAt: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.artifact && typeof (this.artifact as any).validate === 'function') {
      (this.artifact as any).validate();
    }
    if(this.codePackageInfo && typeof (this.codePackageInfo as any).validate === 'function') {
      (this.codePackageInfo as any).validate();
    }
    if(Array.isArray(this.protocol)) {
      $dara.Model.validateArray(this.protocol);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomAgentsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code of the request. The value is SUCCESS when the request succeeds.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code of the request. The value is 200 when the request succeeds.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The list of summaries for custom code or image agents on the current page. To query the complete configuration and the latest version execution results, call GetCustomAgent.
   */
  items?: ListCustomAgentsResponseBodyItems[];
  /**
   * @remarks
   * The maximum number of entries returned per page for this query.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The description of the processing result for the request. The value is success when the request succeeds.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The opaque token used to query the next page. An empty value indicates that no more pages exist. Pass this value as-is in subsequent requests.
   * 
   * @example
   * djE6YWdlbnRjb3JlLmFnZW50Lmxpc3QuY3VzdG9tOjIw
   */
  nextToken?: string;
  /**
   * @remarks
   * The unique identifier of the request, used to locate and troubleshoot issues.
   * 
   * @example
   * 550E8400-E29B-41D4-A716-446655440000
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was processed successfully. A value of true indicates success. A successful creation, update, or deletion does not mean that the background operation is complete.
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of custom code or image agents that match the query conditions in the specified workspace.
   * 
   * @example
   * 40
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
      items: { 'type': 'array', 'itemType': ListCustomAgentsResponseBodyItems },
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

