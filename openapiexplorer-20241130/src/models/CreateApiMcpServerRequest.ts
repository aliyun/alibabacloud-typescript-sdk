// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateApiMcpServerRequestAdditionalApiDescriptionsConstParameters extends $dara.Model {
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

export class CreateApiMcpServerRequestAdditionalApiDescriptions extends $dara.Model {
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
  constParameters?: CreateApiMcpServerRequestAdditionalApiDescriptionsConstParameters[];
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
      constParameters: { 'type': 'array', 'itemType': CreateApiMcpServerRequestAdditionalApiDescriptionsConstParameters },
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

export class CreateApiMcpServerRequestApis extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2014-05-26
   */
  apiVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Ecs
   */
  product?: string;
  /**
   * @remarks
   * This parameter is required.
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

export class CreateApiMcpServerRequestPromptsArguments extends $dara.Model {
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

export class CreateApiMcpServerRequestPrompts extends $dara.Model {
  arguments?: CreateApiMcpServerRequestPromptsArguments[];
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
      arguments: { 'type': 'array', 'itemType': CreateApiMcpServerRequestPromptsArguments },
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

export class CreateApiMcpServerRequestTerraformTools extends $dara.Model {
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
   * terraform tool description
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

export class CreateApiMcpServerRequest extends $dara.Model {
  additionalApiDescriptions?: CreateApiMcpServerRequestAdditionalApiDescriptions[];
  /**
   * @remarks
   * This parameter is required.
   */
  apis?: CreateApiMcpServerRequestApis[];
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
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  description?: string;
  /**
   * @example
   * true
   */
  enableAssumeRole?: boolean;
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mcp-demo
   */
  name?: string;
  /**
   * @example
   * 403*************370
   */
  oauthClientId?: string;
  prompts?: CreateApiMcpServerRequestPrompts[];
  systemTools?: string[];
  terraformTools?: CreateApiMcpServerRequestTerraformTools[];
  static names(): { [key: string]: string } {
    return {
      additionalApiDescriptions: 'additionalApiDescriptions',
      apis: 'apis',
      assumeRoleExtraPolicy: 'assumeRoleExtraPolicy',
      assumeRoleName: 'assumeRoleName',
      clientToken: 'clientToken',
      description: 'description',
      enableAssumeRole: 'enableAssumeRole',
      instructions: 'instructions',
      language: 'language',
      name: 'name',
      oauthClientId: 'oauthClientId',
      prompts: 'prompts',
      systemTools: 'systemTools',
      terraformTools: 'terraformTools',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalApiDescriptions: { 'type': 'array', 'itemType': CreateApiMcpServerRequestAdditionalApiDescriptions },
      apis: { 'type': 'array', 'itemType': CreateApiMcpServerRequestApis },
      assumeRoleExtraPolicy: 'string',
      assumeRoleName: 'string',
      clientToken: 'string',
      description: 'string',
      enableAssumeRole: 'boolean',
      instructions: 'string',
      language: 'string',
      name: 'string',
      oauthClientId: 'string',
      prompts: { 'type': 'array', 'itemType': CreateApiMcpServerRequestPrompts },
      systemTools: { 'type': 'array', 'itemType': 'string' },
      terraformTools: { 'type': 'array', 'itemType': CreateApiMcpServerRequestTerraformTools },
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

