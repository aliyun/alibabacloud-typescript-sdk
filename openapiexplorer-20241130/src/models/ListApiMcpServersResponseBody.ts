// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApiMcpServersResponseBodyApiMcpServersAdditionalApiDescriptionsConstParameters extends $dara.Model {
  /**
   * @example
   * InstanceId
   */
  key?: string;
  /**
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
   * @example
   * DescribeRegions
   */
  apiName?: string;
  apiOverrideJson?: string;
  /**
   * @example
   * 2014-05-26
   */
  apiVersion?: string;
  constParameters?: ListApiMcpServersResponseBodyApiMcpServersAdditionalApiDescriptionsConstParameters[];
  /**
   * @example
   * true
   */
  enableOutputSchema?: boolean;
  /**
   * @example
   * true
   */
  executeCliCommand?: boolean;
  /**
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
   * @example
   * 2014-05-26
   */
  apiVersion?: string;
  /**
   * @example
   * Ecs
   */
  product?: string;
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
   * @example
   * argument description
   */
  description?: string;
  /**
   * @example
   * test
   */
  name?: string;
  /**
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
  arguments?: ListApiMcpServersResponseBodyApiMcpServersPromptsArguments[];
  content?: string;
  /**
   * @example
   * prompt description
   */
  description?: string;
  /**
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
   * @example
   * mcp-system
   */
  name?: string;
  /**
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
   * @example
   * true
   */
  async?: boolean;
  /**
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
   * @example
   * Terraform Tool description
   */
  description?: string;
  /**
   * @example
   * ON_FAILURE
   */
  destroyPolicy?: string;
  /**
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
   * @example
   * https://mcpserverinner-pre.cn-zhangjiakou.aliyuncs.com/accounts/xxxx/custom/xxx/id/xxxx/mcp
   */
  mcp?: string;
  /**
   * @example
   * https://mcpserverinner-pre.cn-zhangjiakou.aliyuncs.com/accounts/xxxx/custom/xxx/id/xxxx/sse
   */
  sse?: string;
  vpcMcp?: string;
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
  additionalApiDescriptions?: ListApiMcpServersResponseBodyApiMcpServersAdditionalApiDescriptions[];
  apis?: ListApiMcpServersResponseBodyApiMcpServersApis[];
  /**
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
   * @example
   * test
   */
  assumeRoleName?: string;
  /**
   * @example
   * 2024-12-10T03:20:21Z
   */
  createTime?: string;
  description?: string;
  /**
   * @example
   * true
   */
  enableAssumeRole?: boolean;
  enableCustomVpcWhitelist?: boolean;
  /**
   * @example
   * v6ZZ7ftCzEILW***
   */
  id?: string;
  /**
   * @example
   * test
   */
  instructions?: string;
  /**
   * @example
   * ZH_CN
   */
  language?: string;
  /**
   * @example
   * mcp-demo
   */
  name?: string;
  /**
   * @example
   * 403*************370
   */
  oauthClientId?: string;
  prompts?: ListApiMcpServersResponseBodyApiMcpServersPrompts[];
  publicAccess?: string;
  /**
   * @example
   * system
   */
  sourceType?: string;
  systemMcpServerInfo?: ListApiMcpServersResponseBodyApiMcpServersSystemMcpServerInfo;
  systemTools?: string[];
  terraformTools?: ListApiMcpServersResponseBodyApiMcpServersTerraformTools[];
  /**
   * @example
   * 2025-01-10T02:11:43Z
   */
  updateTime?: string;
  urls?: ListApiMcpServersResponseBodyApiMcpServersUrls;
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
  apiMcpServers?: ListApiMcpServersResponseBodyApiMcpServers[];
  /**
   * @example
   * 30
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAZjtYxxxxxxxx
   */
  nextToken?: string;
  /**
   * @example
   * 9BFC4AC1-6BE4-5405-BDEC-CA288D404812
   */
  requestId?: string;
  /**
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

