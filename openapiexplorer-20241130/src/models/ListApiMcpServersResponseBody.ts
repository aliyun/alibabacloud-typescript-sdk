// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApiMcpServersResponseBodyApiMcpServersAdditionalApiDescriptionsConstParameters extends $dara.Model {
  /**
   * @remarks
   * The parameter name. Only top-level parameter names are supported. For ROA-style APIs, you can specify parameters such as \\`body.xx\\`. You cannot set values for nested parameters.
   * 
   * @example
   * InstanceId
   */
  key?: string;
  /**
   * @remarks
   * The value of the parameter.
   * 
   * @example
   * 1234
   */
  value?: any;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApiMcpServersResponseBodyApiMcpServersAdditionalApiDescriptions extends $dara.Model {
  /**
   * @remarks
   * The API name.
   * 
   * @example
   * DescribeRegions
   */
  apiName?: string;
  /**
   * @remarks
   * The API metadata in JSON format, which can be used to overwrite the \\`summary\\` and \\`parameters\\` fields. For an example of the format, see https\\://api.alibabacloud.com/meta/v1/products/Ecs/versions/2014-05-26/apis/DescribeInstances/api.json.
   * 
   * @example
   * {
   *   "summary": "本接口支持根据不同请求条件查询实例列表，并关联查询实例的详细信息。"
   * }
   */
  apiOverrideJson?: string;
  /**
   * @remarks
   * The POP version of the API that is exposed to the MCP server.
   * 
   * @example
   * 2014-05-26
   */
  apiVersion?: string;
  /**
   * @remarks
   * A list of constant input parameters. These parameters are not included in the output during API parameter parsing.
   */
  constParameters?: ListApiMcpServersResponseBodyApiMcpServersAdditionalApiDescriptionsConstParameters[];
  /**
   * @remarks
   * Specifies whether to return the schema of the response parameters. Returning the schema increases the size of the API MCP server. The default value is null, which means the schema is not returned.
   * 
   * @example
   * true
   */
  enableOutputSchema?: boolean;
  /**
   * @remarks
   * Specifies whether to return the command-line interface (CLI) command for execution. In this mode, the API call is not executed. Instead, the corresponding CLI command is returned. This mode is suitable for long-running tasks executed using the Alibaba Cloud CLI.
   * 
   * @example
   * true
   */
  executeCliCommand?: boolean;
  /**
   * @remarks
   * The product code.
   * 
   * - Call the GetRequestLog operation and obtain the product code from the response.
   * 
   * - Find the product code from the URL of the OpenAPI Portal. For example, the URL for the OpenAPI Portal of Short Message Service is https\\://api.alibabacloud.com/product/Dysmsapi. The product code is Dysmsapi.
   * 
   * @example
   * Ecs
   */
  product?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'apiName',
      apiOverrideJson: 'apiOverrideJson',
      apiVersion: 'apiVersion',
      constParameters: 'constParameters',
      enableOutputSchema: 'enableOutputSchema',
      executeCliCommand: 'executeCliCommand',
      product: 'product',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      apiOverrideJson: 'string',
      apiVersion: 'string',
      constParameters: { 'type': 'array', 'itemType': ListApiMcpServersResponseBodyApiMcpServersAdditionalApiDescriptionsConstParameters },
      enableOutputSchema: 'boolean',
      executeCliCommand: 'boolean',
      product: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.constParameters)) {
      $dara.Model.validateArray(this.constParameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApiMcpServersResponseBodyApiMcpServersApis extends $dara.Model {
  /**
   * @remarks
   * The POP version of the API that is exposed to the MCP server.
   * 
   * @example
   * 2014-05-26
   */
  apiVersion?: string;
  /**
   * @remarks
   * The product code.
   * 
   * - Call the GetRequestLog operation and obtain the product code from the response.
   * 
   * - Find the product code from the URL of the OpenAPI Portal. For example, the URL for the OpenAPI Portal of Short Message Service is https\\://api.alibabacloud.com/product/Dysmsapi. The product code is Dysmsapi.
   * 
   * @example
   * Ecs
   */
  product?: string;
  /**
   * @remarks
   * A list of API name matching rules.
   */
  selectors?: string[];
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'apiVersion',
      product: 'product',
      selectors: 'selectors',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      product: 'string',
      selectors: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.selectors)) {
      $dara.Model.validateArray(this.selectors);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApiMcpServersResponseBodyApiMcpServersPromptsArguments extends $dara.Model {
  /**
   * @remarks
   * The description of the parameter.
   * 
   * @example
   * argument description
   */
  description?: string;
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether the parameter is required.
   * 
   * @example
   * true
   */
  required?: boolean;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
      required: 'required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      required: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApiMcpServersResponseBodyApiMcpServersPrompts extends $dara.Model {
  /**
   * @remarks
   * A list of parameters that the prompt supports.
   */
  arguments?: ListApiMcpServersResponseBodyApiMcpServersPromptsArguments[];
  /**
   * @remarks
   * The content of the prompt. Variables are specified in the \\`{{xxx}}\\` format. \\`xxx\\` is a variable that must be defined in the \\`arguments\\` parameter.
   * 
   * @example
   * prompt正文，{{name}}
   */
  content?: string;
  /**
   * @remarks
   * The description of the prompt.
   * 
   * @example
   * prompt description
   */
  description?: string;
  /**
   * @remarks
   * The name of the prompt.
   * 
   * @example
   * test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      arguments: 'arguments',
      content: 'content',
      description: 'description',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arguments: { 'type': 'array', 'itemType': ListApiMcpServersResponseBodyApiMcpServersPromptsArguments },
      content: 'string',
      description: 'string',
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.arguments)) {
      $dara.Model.validateArray(this.arguments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApiMcpServersResponseBodyApiMcpServersSystemMcpServerInfo extends $dara.Model {
  /**
   * @remarks
   * The name of the system MCP service.
   * 
   * @example
   * mcp-system
   */
  name?: string;
  /**
   * @remarks
   * The product code.
   * 
   * - Call the GetRequestLog operation and obtain the product code from the response.
   * 
   * - Find the product code from the URL of the OpenAPI Portal. For example, the URL for the OpenAPI Portal of Short Message Service is https\\://api.alibabacloud.com/product/Dysmsapi. The product code is Dysmsapi.
   * 
   * @example
   * Ecs
   */
  product?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      product: 'product',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      product: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApiMcpServersResponseBodyApiMcpServersTerraformTools extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to execute tasks asynchronously. If this parameter is set to true, the system immediately proceeds to the next task after a task is initiated, without waiting for each resource operation to complete.
   * 
   * @example
   * true
   */
  async?: boolean;
  /**
   * @remarks
   * The code for the Terraform tool. For more information, see [HCL language overview](https://www.alibabacloud.com/help/en/terraform/terraform-configuration-and-hcl-language-overview).
   * 
   * @example
   * variable "name" {
   *   default = "terraform-example"
   * }
   * 
   * provider "alicloud" {
   *   region = "cn-beijing"
   * }
   * 
   * resource "alicloud_vpc" "default" {
   *   ipv6_isp    = "BGP"
   *   description = "test"
   *   cidr_block  = "10.0.0.0/8"
   *   vpc_name    = var.name
   *   enable_ipv6 = true
   * }
   */
  code?: string;
  /**
   * @remarks
   * The description of the Terraform tool.
   * 
   * @example
   * Terraform Tool description
   */
  description?: string;
  /**
   * @remarks
   * The deletion policy. After a task is executed, the system applies one of the following cleanup policies to temporary resources based on the task execution status.
   * 
   * - NEVER: Does not delete any created resources, regardless of whether the task succeeds or fails.
   * 
   * - ALWAYS: Immediately destroys all related resources after execution, regardless of whether the task succeeds or fails.
   * 
   * - ON_FAILURE: Deletes related resources only if the task fails. If the task succeeds, the resources are retained.
   * 
   * @example
   * ON_FAILURE
   */
  destroyPolicy?: string;
  /**
   * @remarks
   * The name of the Terraform tool.
   * 
   * @example
   * test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      async: 'async',
      code: 'code',
      description: 'description',
      destroyPolicy: 'destroyPolicy',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      async: 'boolean',
      code: 'string',
      description: 'string',
      destroyPolicy: 'string',
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

export class ListApiMcpServersResponseBodyApiMcpServersUrls extends $dara.Model {
  /**
   * @remarks
   * The connection information for the streamable HTTP protocol. This protocol is recommended.
   * 
   * @example
   * https://openapi-mcp.cn-hangzhou.aliyuncs.com/accounts/xxxx/custom/xxx/id/xxxx/mcp
   */
  mcp?: string;
  /**
   * @remarks
   * The connection information for the Server-Sent Events (SSE) protocol.
   * 
   * @example
   * https://openapi-mcp.cn-hangzhou.aliyuncs.com/accounts/xxxx/custom/xxx/id/xxxx/sse
   */
  sse?: string;
  /**
   * @remarks
   * The endpoint for the streamable HTTP protocol in a VPC.
   * 
   * @example
   * https://openapi-mcp-cn.vpc-proxy.aliyuncs.com/accounts/xxxx/custom/xxx/id/xxxx/mcp
   */
  vpcMcp?: string;
  /**
   * @remarks
   * The endpoint for the SSE protocol in a VPC.
   * 
   * @example
   * https://openapi-mcp-cn.vpc-proxy.aliyuncs.com/accounts/xxxx/custom/xxx/id/xxxx/sse
   */
  vpcSse?: string;
  static names(): { [key: string]: string } {
    return {
      mcp: 'mcp',
      sse: 'sse',
      vpcMcp: 'vpcMcp',
      vpcSse: 'vpcSse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mcp: 'string',
      sse: 'string',
      vpcMcp: 'string',
      vpcSse: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApiMcpServersResponseBodyApiMcpServers extends $dara.Model {
  /**
   * @remarks
   * A list of supplementary API descriptions.
   */
  additionalApiDescriptions?: ListApiMcpServersResponseBodyApiMcpServersAdditionalApiDescriptions[];
  /**
   * @remarks
   * A list of API information.
   */
  apis?: ListApiMcpServersResponseBodyApiMcpServersApis[];
  /**
   * @remarks
   * The extra policy for role assumption when multi-account access is enabled. If this policy is specified, the permissions for the role assumption are based on this policy and overwrite the permissions that are defined for the role.
   * 
   * @example
   * {
   *   "Version": "1",
   *   "Statement": [
   *     {
   *       "Effect": "Allow",
   *       "Action": [
   *         "ecs:Describe*",
   *         "vpc:Describe*",
   *         "vpc:List*"
   *       ],
   *       "Resource": "*"
   *     }
   *   ]
   * }
   */
  assumeRoleExtraPolicy?: string;
  /**
   * @remarks
   * The name of the RAM role in the destination account that is assumed for cross-account operations when multi-account access is enabled.
   * 
   * @example
   * test
   */
  assumeRoleName?: string;
  /**
   * @remarks
   * The time when the API MCP server was created.
   * 
   * @example
   * 2024-12-10T03:20:21Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the API MCP server.
   * 
   * @example
   * 这是一个API MCP服务器。
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable multi-account access.
   * 
   * @example
   * true
   */
  enableAssumeRole?: boolean;
  /**
   * @remarks
   * Specifies whether to enable a custom VPC whitelist. If this parameter is disabled, the account-level configuration is used.
   * 
   * @example
   * true
   */
  enableCustomVpcWhitelist?: boolean;
  /**
   * @remarks
   * The ID of the API MCP service.
   * 
   * @example
   * v6ZZ7ftCzEILW***
   */
  id?: string;
  /**
   * @remarks
   * The MCP instruction. It prompts the large language model on how to use the MCP. The client must support the \\`Instructions\\` field of the standard MCP protocol.
   * 
   * @example
   * test
   */
  instructions?: string;
  /**
   * @remarks
   * The language of the API reference for the API MCP service. You can select Chinese or English. The language of the prompt can affect the response from the AI.
   * 
   * @example
   * ZH_CN
   */
  language?: string;
  /**
   * @remarks
   * The name of the MCP server. The name must be 3 to 64 characters in length. It can contain lowercase letters and digits, and cannot start with a digit. The name must be unique within the same Alibaba Cloud account.
   * 
   * @example
   * mcp-demo
   */
  name?: string;
  /**
   * @remarks
   * The custom OAuth client ID that is used for a custom OAuth configuration.
   * 
   * ``Only web and native applications are supported. The OAuth scope must include `/acs/mcp-server`.``
   * 
   * @example
   * 403*************370
   */
  oauthClientId?: string;
  /**
   * @remarks
   * A list of prompt configurations.
   */
  prompts?: ListApiMcpServersResponseBodyApiMcpServersPrompts[];
  /**
   * @remarks
   * Specifies whether to enable access over the Internet.
   * 
   * @example
   * on
   */
  publicAccess?: string;
  /**
   * @remarks
   * The type of the API MCP service.
   * 
   * - custom: a custom service
   * 
   * - system: a system service
   * 
   * @example
   * system
   */
  sourceType?: string;
  /**
   * @remarks
   * A list of system MCP services.
   */
  systemMcpServerInfo?: ListApiMcpServersResponseBodyApiMcpServersSystemMcpServerInfo;
  /**
   * @remarks
   * A list of system tools.
   */
  systemTools?: string[];
  /**
   * @remarks
   * A list of Terraform tools.
   */
  terraformTools?: ListApiMcpServersResponseBodyApiMcpServersTerraformTools[];
  /**
   * @remarks
   * The time when the API MCP server was last updated.
   * 
   * @example
   * 2025-01-10T02:11:43Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The connection information for the API MCP service.
   */
  urls?: ListApiMcpServersResponseBodyApiMcpServersUrls;
  /**
   * @remarks
   * The VPC whitelist that specifies the allowed source VPCs after Internet access is disabled. If this parameter is not set or is left empty, the source is not restricted.
   */
  vpcWhitelists?: string[];
  static names(): { [key: string]: string } {
    return {
      additionalApiDescriptions: 'additionalApiDescriptions',
      apis: 'apis',
      assumeRoleExtraPolicy: 'assumeRoleExtraPolicy',
      assumeRoleName: 'assumeRoleName',
      createTime: 'createTime',
      description: 'description',
      enableAssumeRole: 'enableAssumeRole',
      enableCustomVpcWhitelist: 'enableCustomVpcWhitelist',
      id: 'id',
      instructions: 'instructions',
      language: 'language',
      name: 'name',
      oauthClientId: 'oauthClientId',
      prompts: 'prompts',
      publicAccess: 'publicAccess',
      sourceType: 'sourceType',
      systemMcpServerInfo: 'systemMcpServerInfo',
      systemTools: 'systemTools',
      terraformTools: 'terraformTools',
      updateTime: 'updateTime',
      urls: 'urls',
      vpcWhitelists: 'vpcWhitelists',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalApiDescriptions: { 'type': 'array', 'itemType': ListApiMcpServersResponseBodyApiMcpServersAdditionalApiDescriptions },
      apis: { 'type': 'array', 'itemType': ListApiMcpServersResponseBodyApiMcpServersApis },
      assumeRoleExtraPolicy: 'string',
      assumeRoleName: 'string',
      createTime: 'string',
      description: 'string',
      enableAssumeRole: 'boolean',
      enableCustomVpcWhitelist: 'boolean',
      id: 'string',
      instructions: 'string',
      language: 'string',
      name: 'string',
      oauthClientId: 'string',
      prompts: { 'type': 'array', 'itemType': ListApiMcpServersResponseBodyApiMcpServersPrompts },
      publicAccess: 'string',
      sourceType: 'string',
      systemMcpServerInfo: ListApiMcpServersResponseBodyApiMcpServersSystemMcpServerInfo,
      systemTools: { 'type': 'array', 'itemType': 'string' },
      terraformTools: { 'type': 'array', 'itemType': ListApiMcpServersResponseBodyApiMcpServersTerraformTools },
      updateTime: 'string',
      urls: ListApiMcpServersResponseBodyApiMcpServersUrls,
      vpcWhitelists: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.additionalApiDescriptions)) {
      $dara.Model.validateArray(this.additionalApiDescriptions);
    }
    if(Array.isArray(this.apis)) {
      $dara.Model.validateArray(this.apis);
    }
    if(Array.isArray(this.prompts)) {
      $dara.Model.validateArray(this.prompts);
    }
    if(this.systemMcpServerInfo && typeof (this.systemMcpServerInfo as any).validate === 'function') {
      (this.systemMcpServerInfo as any).validate();
    }
    if(Array.isArray(this.systemTools)) {
      $dara.Model.validateArray(this.systemTools);
    }
    if(Array.isArray(this.terraformTools)) {
      $dara.Model.validateArray(this.terraformTools);
    }
    if(this.urls && typeof (this.urls as any).validate === 'function') {
      (this.urls as any).validate();
    }
    if(Array.isArray(this.vpcWhitelists)) {
      $dara.Model.validateArray(this.vpcWhitelists);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApiMcpServersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of queried API MCP servers.
   */
  apiMcpServers?: ListApiMcpServersResponseBodyApiMcpServers[];
  /**
   * @remarks
   * The maximum number of entries returned per page.
   * 
   * @example
   * 30
   */
  maxResults?: number;
  /**
   * @remarks
   * The paging cursor.
   * 
   * > If this parameter is not empty, more data is available.
   * 
   * @example
   * AAAAAZjtYxxxxxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9BFC4AC1-6BE4-5405-BDEC-CA288D404812
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apiMcpServers: 'apiMcpServers',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiMcpServers: { 'type': 'array', 'itemType': ListApiMcpServersResponseBodyApiMcpServers },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.apiMcpServers)) {
      $dara.Model.validateArray(this.apiMcpServers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

