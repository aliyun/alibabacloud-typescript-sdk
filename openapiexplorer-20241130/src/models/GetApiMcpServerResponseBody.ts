// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApiMcpServerResponseBodyAdditionalApiDescriptionsConstParameters extends $dara.Model {
  /**
   * @remarks
   * The parameter name. Only first-level parameter names are supported. For ROA-style APIs, you can set parameters such as body.xx. You cannot set values that exceed the top-level parameters.
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

export class GetApiMcpServerResponseBodyAdditionalApiDescriptions extends $dara.Model {
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
   * The API metadata in JSON format. For an example of the format, see https\\://api.aliyun.com/meta/v1/products/Ecs/versions/2014-05-26/apis/DescribeInstances/api.json. You can overwrite the summary and parameters fields.
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
  constParameters?: GetApiMcpServerResponseBodyAdditionalApiDescriptionsConstParameters[];
  /**
   * @remarks
   * Indicates whether to return the schema of the response parameters. Returning the schema increases the size of the entire API MCP server. The default value is null, which means the schema is not returned.
   * 
   * @example
   * true
   */
  enableOutputSchema?: boolean;
  /**
   * @remarks
   * Indicates whether to return the command-line interface (CLI) command. In this mode, the API is not called. Instead, the corresponding CLI command is returned. This is suitable for long-running tasks that need to be executed using Alibaba Cloud CLI.
   * 
   * @example
   * true
   */
  executeCliCommand?: boolean;
  /**
   * @remarks
   * The product code.
   * 
   * - Call the GetRequestLog operation to obtain the product code from the response.
   * 
   * <props="intl">
   * 
   * - Find the corresponding product code from the URL of the OpenAPI Portal. For example, the URL of the OpenAPI Portal for Short Message Service is https\\://api.alibabacloud.com/product/Dysmsapi. The product code for Short Message Service is Dysmsapi.
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
      constParameters: { 'type': 'array', 'itemType': GetApiMcpServerResponseBodyAdditionalApiDescriptionsConstParameters },
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

export class GetApiMcpServerResponseBodyApiInfos extends $dara.Model {
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
   * - Call the GetRequestLog operation to obtain the product code from the response.
   * 
   * <props="intl">
   * 
   * - Find the corresponding product code from the URL of the OpenAPI Portal. For example, the URL of the OpenAPI Portal for Short Message Service is https\\://api.alibabacloud.com/product/Dysmsapi. The product code for Short Message Service is Dysmsapi.
   * 
   * @example
   * Ecs
   */
  product?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'apiName',
      apiVersion: 'apiVersion',
      product: 'product',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      apiVersion: 'string',
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

export class GetApiMcpServerResponseBodyApis extends $dara.Model {
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
   * - Call the GetRequestLog operation to obtain the product code from the response.
   * 
   * <props="intl">
   * 
   * - Find the corresponding product code from the URL of the OpenAPI Portal. For example, the URL of the OpenAPI Portal for Short Message Service is https\\://api.alibabacloud.com/product/Dysmsapi. The product code for Short Message Service is Dysmsapi.
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

export class GetApiMcpServerResponseBodyPromptsArguments extends $dara.Model {
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
   * Indicates whether this parameter is required.
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

export class GetApiMcpServerResponseBodyPrompts extends $dara.Model {
  /**
   * @remarks
   * A list of parameters that the prompt supports.
   */
  arguments?: GetApiMcpServerResponseBodyPromptsArguments[];
  /**
   * @remarks
   * The content of the prompt. Variables are specified in the {{xxx}} format. The xxx variable must be defined in the arguments parameter.
   * 
   * @example
   * prompt正文，{{name}}
   */
  content?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * prompt description
   */
  description?: string;
  /**
   * @remarks
   * The prompt name.
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
      arguments: { 'type': 'array', 'itemType': GetApiMcpServerResponseBodyPromptsArguments },
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

export class GetApiMcpServerResponseBodySystemMcpServerInfo extends $dara.Model {
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
   * - Call the GetRequestLog operation to obtain the product code from the response.
   * 
   * <props="intl">
   * 
   * - Find the corresponding product code from the URL of the OpenAPI Portal. For example, the URL of the OpenAPI Portal for Short Message Service is https\\://api.alibabacloud.com/product/Dysmsapi. The product code for Short Message Service is Dysmsapi.
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

export class GetApiMcpServerResponseBodyTerraformTools extends $dara.Model {
  /**
   * @remarks
   * Indicates whether to execute tasks asynchronously. If set to true, the system immediately starts the next task after the current task is initiated, without waiting for each resource operation to complete.
   * 
   * @example
   * true
   */
  async?: boolean;
  /**
   * @remarks
   * The code for the Terraform tool. For more information, see [HCL language overview](https://help.aliyun.com/zh/terraform/terraform-configuration-and-hcl-language-overview).
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
   * The destroy policy. After a task is complete, the system applies the following cleanup policy to temporary resources based on the task execution status.
   * 
   * - NEVER: All created resources are retained, regardless of whether the task succeeds or fails.
   * 
   * - ALWAYS: All related resources are immediately destroyed after the task is complete, regardless of whether the task succeeds or fails.
   * 
   * - ON_FAILURE: Related resources are deleted only if the task fails. If the task succeeds, the resources are retained.
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

export class GetApiMcpServerResponseBodyUrls extends $dara.Model {
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
   * The endpoint of the streamable HTTP protocol in a VPC.
   * 
   * @example
   * https://openapi-mcp-cn.vpc-proxy.aliyuncs.com/accounts/xxxx/custom/xxx/id/xxxx/mcp
   */
  vpcMcp?: string;
  /**
   * @remarks
   * The endpoint of the SSE protocol in a VPC.
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

export class GetApiMcpServerResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of supplementary API descriptions.
   */
  additionalApiDescriptions?: GetApiMcpServerResponseBodyAdditionalApiDescriptions[];
  /**
   * @remarks
   * A list of API information for the API MCP service.
   */
  apiInfos?: GetApiMcpServerResponseBodyApiInfos[];
  /**
   * @remarks
   * A list of API information.
   */
  apis?: GetApiMcpServerResponseBodyApis[];
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
   * The name of the RAM role of the destination account that is assumed when you perform cross-account operations with multi-account access enabled.
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
   * 2025-02-07T02:17:46Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the API MCP server.
   * 
   * @example
   * 这是一个API MCP 服务器
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether to enable multi-account access.
   * 
   * @example
   * true
   */
  enableAssumeRole?: boolean;
  /**
   * @remarks
   * Indicates whether to enable a custom VPC whitelist. If this parameter is not enabled, the account-level configuration is used.
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
   * The MCP instruction. It prompts the large model on how to use the MCP. The client must support the Instructions field of the standard MCP protocol.
   * 
   * @example
   * test
   */
  instructions?: string;
  /**
   * @remarks
   * The language of the API documentation for the API MCP service. You can select Chinese or English API documentation. The language of the prompt may affect the AI\\"s response.
   * 
   * @example
   * ZH_CN
   */
  language?: string;
  /**
   * @remarks
   * The name of the MCP server. The name must be 3 to 64 characters in length and can contain lowercase letters and digits. It must not start with a digit. The name must be unique within the same Alibaba Cloud account.
   * 
   * @example
   * mcp-demo
   */
  name?: string;
  /**
   * @remarks
   * The custom OAuth client ID when you select a custom OAuth configuration.
   * 
   * `Only web and native applications are supported. The OAuth scope must include /acs/mcp-server.`
   * 
   * @example
   * 403*************370
   */
  oauthClientId?: string;
  /**
   * @remarks
   * A list of prompt configurations.
   */
  prompts?: GetApiMcpServerResponseBodyPrompts[];
  /**
   * @remarks
   * Indicates whether to enable public access.
   * 
   * @example
   * on
   */
  publicAccess?: string;
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
   * The RAM access policy that is required by the API MCP service.
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
  requiredRAMPolicy?: string;
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
  systemMcpServerInfo?: GetApiMcpServerResponseBodySystemMcpServerInfo;
  /**
   * @remarks
   * A list of system tools.
   */
  systemTools?: string[];
  /**
   * @remarks
   * A list of Terraform tools.
   */
  terraformTools?: GetApiMcpServerResponseBodyTerraformTools[];
  /**
   * @remarks
   * The time when the API MCP server was last modified.
   * 
   * @example
   * 2025-02-05T02:26:04Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The connection information for the MCP server.
   */
  urls?: GetApiMcpServerResponseBodyUrls;
  /**
   * @remarks
   * The VPC whitelist that specifies the allowed source VPCs after public access is disabled. If you do not set this parameter or leave it empty, access from all sources is allowed.
   */
  vpcWhitelists?: string[];
  static names(): { [key: string]: string } {
    return {
      additionalApiDescriptions: 'additionalApiDescriptions',
      apiInfos: 'apiInfos',
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
      requestId: 'requestId',
      requiredRAMPolicy: 'requiredRAMPolicy',
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
      additionalApiDescriptions: { 'type': 'array', 'itemType': GetApiMcpServerResponseBodyAdditionalApiDescriptions },
      apiInfos: { 'type': 'array', 'itemType': GetApiMcpServerResponseBodyApiInfos },
      apis: { 'type': 'array', 'itemType': GetApiMcpServerResponseBodyApis },
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
      prompts: { 'type': 'array', 'itemType': GetApiMcpServerResponseBodyPrompts },
      publicAccess: 'string',
      requestId: 'string',
      requiredRAMPolicy: 'string',
      sourceType: 'string',
      systemMcpServerInfo: GetApiMcpServerResponseBodySystemMcpServerInfo,
      systemTools: { 'type': 'array', 'itemType': 'string' },
      terraformTools: { 'type': 'array', 'itemType': GetApiMcpServerResponseBodyTerraformTools },
      updateTime: 'string',
      urls: GetApiMcpServerResponseBodyUrls,
      vpcWhitelists: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.additionalApiDescriptions)) {
      $dara.Model.validateArray(this.additionalApiDescriptions);
    }
    if(Array.isArray(this.apiInfos)) {
      $dara.Model.validateArray(this.apiInfos);
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

