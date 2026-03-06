// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApiMcpServerRequestAdditionalApiDescriptionsConstParameters extends $dara.Model {
  /**
   * @remarks
   * The parameter name. Only first-level parameter names are supported. For ROA-style APIs, you can set parameters such as body.xx. You cannot set values for parameters beyond the top level.
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

export class UpdateApiMcpServerRequestAdditionalApiDescriptions extends $dara.Model {
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
   * The API metadata in JSON format. For more information about the format, see https\\://api.aliyun.com/meta/v1/products/Ecs/versions/2014-05-26/apis/DescribeInstances/api.json. You can overwrite the summary and parameters fields.
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
  constParameters?: UpdateApiMcpServerRequestAdditionalApiDescriptionsConstParameters[];
  /**
   * @remarks
   * Specifies whether to return the schema of the response parameters. Returning the response parameter schema increases the overall size of the API MCP server. The default value is null, which means the response parameter schema is not returned.
   * 
   * @example
   * true
   */
  enableOutputSchema?: boolean;
  /**
   * @remarks
   * Specifies whether to return the command-line interface (CLI) command for execution. In this mode, the API call is not actually executed. Instead, the corresponding CLI command is returned. This is suitable for long-running tasks that need to be executed using Alibaba Cloud CLI.
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
   * - Find the product code from the URL of the product in OpenAPI Explorer. For example, the URL for Short Message Service is https\\://api.alibabacloud.com/product/Dysmsapi. The product code is \\`Dysmsapi\\`.
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
      constParameters: { 'type': 'array', 'itemType': UpdateApiMcpServerRequestAdditionalApiDescriptionsConstParameters },
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

export class UpdateApiMcpServerRequestApis extends $dara.Model {
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
   * - Find the product code from the URL of the product in OpenAPI Explorer. For example, the URL for Short Message Service is https\\://api.alibabacloud.com/product/Dysmsapi. The product code is \\`Dysmsapi\\`.
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

export class UpdateApiMcpServerRequestPromptsArguments extends $dara.Model {
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

export class UpdateApiMcpServerRequestPrompts extends $dara.Model {
  /**
   * @remarks
   * A list of parameters that the prompt supports.
   */
  arguments?: UpdateApiMcpServerRequestPromptsArguments[];
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
      arguments: { 'type': 'array', 'itemType': UpdateApiMcpServerRequestPromptsArguments },
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

export class UpdateApiMcpServerRequestTerraformTools extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to execute the task asynchronously. If this is enabled, the system immediately proceeds to the next task after it initiates a task execution, without waiting for each resource operation to complete.
   * 
   * @example
   * true
   */
  async?: boolean;
  /**
   * @remarks
   * The Terraform tool code. For more information, see [HCL language overview](https://www.alibabacloud.com/help/en/terraform/latest/hcl-language-overview).
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
   * Terraform Tool  description
   */
  description?: string;
  /**
   * @remarks
   * The deletion policy. After a task is executed, the system applies one of the following cleanup policies to the temporary resources based on the task execution status.
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

export class UpdateApiMcpServerRequest extends $dara.Model {
  /**
   * @remarks
   * A list of supplementary API descriptions.
   */
  additionalApiDescriptions?: UpdateApiMcpServerRequestAdditionalApiDescriptions[];
  /**
   * @remarks
   * The list of APIs to modify.
   */
  apis?: UpdateApiMcpServerRequestApis[];
  /**
   * @remarks
   * An additional policy for role assumption when multi-account access is enabled. If this policy exists, the permissions for the role assumption are based on this policy, which overwrites the permissions defined for the role itself.
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
   * Specifies whether to enable a custom VPC whitelist. If this is disabled, the account-level configuration is used.
   * 
   * @example
   * true
   */
  enableCustomVpcWhitelist?: boolean;
  /**
   * @remarks
   * The MCP instruction. It prompts the large language model on how to use this MCP. The client must support the Instructions field of the standard MCP protocol.
   * 
   * @example
   * test
   */
  instructions?: string;
  /**
   * @remarks
   * The language of the API documentation for the API MCP service. You can select Chinese or English. Different language prompts may affect the AI\\"s response.
   * 
   * @example
   * ZH_CN
   */
  language?: string;
  /**
   * @remarks
   * The custom OAuth client ID to use when you select a custom OAuth configuration.
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
  prompts?: UpdateApiMcpServerRequestPrompts[];
  /**
   * @remarks
   * Specifies whether to enable public network access.
   * 
   * @example
   * on
   */
  publicAccess?: string;
  /**
   * @remarks
   * A list of system tools.
   */
  systemTools?: string[];
  /**
   * @remarks
   * A list of Terraform tools.
   */
  terraformTools?: UpdateApiMcpServerRequestTerraformTools[];
  /**
   * @remarks
   * The VPC whitelist that specifies the allowed source VPCs after public network access is disabled. If you do not set this parameter or leave it empty, access from all sources is allowed.
   */
  vpcWhitelists?: string[];
  /**
   * @remarks
   * A client token that you can use to ensure the idempotence of the request. Generate a unique value from your client. The token can contain only ASCII characters and must be no more than 64 characters long. We recommend that you use a UUID. The token is valid for three days.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the API MCP service.
   * 
   * This parameter is required.
   * 
   * @example
   * v6ZZ7ftCzEILW***
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      additionalApiDescriptions: 'additionalApiDescriptions',
      apis: 'apis',
      assumeRoleExtraPolicy: 'assumeRoleExtraPolicy',
      assumeRoleName: 'assumeRoleName',
      description: 'description',
      enableAssumeRole: 'enableAssumeRole',
      enableCustomVpcWhitelist: 'enableCustomVpcWhitelist',
      instructions: 'instructions',
      language: 'language',
      oauthClientId: 'oauthClientId',
      prompts: 'prompts',
      publicAccess: 'publicAccess',
      systemTools: 'systemTools',
      terraformTools: 'terraformTools',
      vpcWhitelists: 'vpcWhitelists',
      clientToken: 'clientToken',
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalApiDescriptions: { 'type': 'array', 'itemType': UpdateApiMcpServerRequestAdditionalApiDescriptions },
      apis: { 'type': 'array', 'itemType': UpdateApiMcpServerRequestApis },
      assumeRoleExtraPolicy: 'string',
      assumeRoleName: 'string',
      description: 'string',
      enableAssumeRole: 'boolean',
      enableCustomVpcWhitelist: 'boolean',
      instructions: 'string',
      language: 'string',
      oauthClientId: 'string',
      prompts: { 'type': 'array', 'itemType': UpdateApiMcpServerRequestPrompts },
      publicAccess: 'string',
      systemTools: { 'type': 'array', 'itemType': 'string' },
      terraformTools: { 'type': 'array', 'itemType': UpdateApiMcpServerRequestTerraformTools },
      vpcWhitelists: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      id: 'string',
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
    if(Array.isArray(this.systemTools)) {
      $dara.Model.validateArray(this.systemTools);
    }
    if(Array.isArray(this.terraformTools)) {
      $dara.Model.validateArray(this.terraformTools);
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

