import * as $dara from '@darabonba/typescript';
export declare class ListCustomAgentsResponseBodyItemsArtifactCode extends $dara.Model {
    /**
     * @remarks
     * The startup command for the code package. This parameter is required in code package mode. The working directory is the root directory of the extracted code, which is /code. Example: python main.py. Quotes and escapes are supported. Environment variables, pipes, and logical operations are not automatically expanded. For complex commands, use a script within the package.
     *
     * This parameter is required.
     *
     * @example
     * python main.py
     */
    entrypoint?: string;
    /**
     * @remarks
     * The identifier of the code runtime environment in the currently saved configuration. The runtime image uses the saved snapshot. Adding a new version to the catalog does not automatically change the existing configuration.
     *
     * This parameter is required.
     *
     * @example
     * python3.12
     */
    languageRuntime?: string;
    /**
     * @remarks
     * The fixed oss:// address of the platform code package referenced by the currently saved configuration. This address does not include the signature parameters of the source HTTPS link. You can use this address to reuse an existing code package. To download the content, call the GetAgentCodePackageDownloadUrl operation.
     *
     * This parameter is required.
     *
     * @example
     * oss://agentcore-platform-example/code-packages/workspaces/ws-a1b2c3d4e5f6/550e8400-e29b-41d4-a716-446655440000/package.zip
     */
    sourceUri?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListCustomAgentsResponseBodyItemsArtifactContainer extends $dara.Model {
    /**
     * @remarks
     * The custom container startup command and parameters. If this parameter is not configured, the default startup method of the image is used.
     *
     * @example
     * python main.py
     */
    entrypoint?: string;
    /**
     * @remarks
     * The ID of the ACR Enterprise Edition instance.
     *
     * @example
     * cri-example
     */
    instanceId?: string;
    /**
     * @remarks
     * The Container Registry namespace.
     *
     * @example
     * team
     */
    namespace?: string;
    /**
     * @remarks
     * The name of the Container Registry image repository.
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
     * The image source type. A value of acr indicates a Container Registry image. A value of custom indicates a custom image source. For the corresponding source configurations, refer to the descriptions of artifact.container and customImage.
     *
     * This parameter is required.
     *
     * @example
     * acr
     */
    type?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListCustomAgentsResponseBodyItemsArtifact extends $dara.Model {
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
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListCustomAgentsResponseBodyItemsCodePackageInfo extends $dara.Model {
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
     * The original file name of the code package.
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
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListCustomAgentsResponseBodyItemsProtocolPaths extends $dara.Model {
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
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListCustomAgentsResponseBodyItemsProtocol extends $dara.Model {
    /**
     * @remarks
     * The request header configuration for the current protocol. The key is the header name and the value is a string.
     */
    headers?: {
        [key: string]: string;
    };
    /**
     * @remarks
     * The list of API paths corresponding to the current protocol.
     */
    paths?: ListCustomAgentsResponseBodyItemsProtocolPaths[];
    /**
     * @remarks
     * The invocation protocol type. agui indicates the AG-UI protocol. openai-chat-completion indicates the OpenAI Chat Completions compatible protocol. custom indicates a custom protocol.
     *
     * This parameter is required.
     *
     * @example
     * agui
     */
    type?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListCustomAgentsResponseBodyItems extends $dara.Model {
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
     * The unique identifier of the custom code or image agent. You can obtain this ID from the response of the CreateCustomAgent or ListCustomAgents operation.
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
     * The currently saved code package information.
     */
    codePackageInfo?: ListCustomAgentsResponseBodyItemsCodePackageInfo;
    /**
     * @remarks
     * The creation method of the agent. The value is CUSTOM for custom code or image agents.
     *
     * @example
     * CUSTOM
     */
    createMode?: string;
    /**
     * @remarks
     * The time when the agent was created. The time is in ISO 8601 format. The trailing Z indicates the UTC time zone. Fractional seconds may be included.
     *
     * @example
     * 2026-10-10T06:00:00Z
     */
    createdAt?: string;
    /**
     * @remarks
     * The deployment method of the agent. Custom code or image agents are deployed and managed by the platform. The value is MANAGED.
     *
     * @example
     * MANAGED
     */
    deployType?: string;
    /**
     * @remarks
     * The description of the agent\\"s purpose.
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
     * The compute specifications of the agent. Valid values: INTERACTIVE, STANDARD, and HEAVY.
     *
     * @example
     * STANDARD
     */
    runtime?: string;
    /**
     * @remarks
     * The overall status of the agent. Valid values: Creating, Running, Failed, Updating, Deleting, and Deleted. To query the latest configuration execution progress, call GetCustomAgent.
     *
     * @example
     * Running
     */
    status?: string;
    /**
     * @remarks
     * The time when the agent was last updated. The time is in the ISO 8601 format, with a trailing Z indicating the UTC time zone. Fractional seconds are supported.
     *
     * @example
     * 2026-10-10T06:05:00Z
     */
    updatedAt?: string;
    /**
     * @remarks
     * The ID of the workspace to which the custom code or image agents belong.
     *
     * @example
     * ws-a1b2c3d4e5f6
     */
    workspaceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListCustomAgentsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request result code. The value is SUCCESS if the request is successful.
     *
     * @example
     * SUCCESS
     */
    code?: string;
    /**
     * @remarks
     * The HTTP status code of the request. The value is 200 if the request is successful.
     *
     * @example
     * 200
     */
    httpStatusCode?: number;
    /**
     * @remarks
     * The list of summaries for custom code or image agents on the current page. To query the complete configuration and the execution results of the latest version, call the GetCustomAgent operation.
     */
    items?: ListCustomAgentsResponseBodyItems[];
    /**
     * @remarks
     * The maximum number of results to return per page for the current query.
     *
     * @example
     * 20
     */
    maxResults?: number;
    /**
     * @remarks
     * The message that describes the processing result of the request. The value is success if the request is successful.
     *
     * @example
     * success
     */
    message?: string;
    /**
     * @remarks
     * The opaque token used to retrieve the next page of results. An empty value indicates that there are no more pages. Pass this token as-is in subsequent requests.
     *
     * @example
     * djE6YWdlbnRjb3JlLmFnZW50Lmxpc3QuY3VzdG9tOjIw
     */
    nextToken?: string;
    /**
     * @remarks
     * The unique identifier of the request, which is used to locate and troubleshoot issues.
     *
     * @example
     * 550E8400-E29B-41D4-A716-446655440000
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the request was processed successfully. true indicates that the request was successful. A successful creation, update, or deletion response does not mean that the background operation is complete.
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
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
