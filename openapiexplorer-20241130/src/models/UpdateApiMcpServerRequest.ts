// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApiMcpServerRequestAdditionalApiDescriptionsConstParameters extends $dara.Model {
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

export class UpdateApiMcpServerRequestAdditionalApiDescriptions extends $dara.Model {
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
  constParameters?: UpdateApiMcpServerRequestAdditionalApiDescriptionsConstParameters[];
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

export class UpdateApiMcpServerRequestPromptsArguments extends $dara.Model {
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

export class UpdateApiMcpServerRequestPrompts extends $dara.Model {
  arguments?: UpdateApiMcpServerRequestPromptsArguments[];
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
   * Terraform Tool  description
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

export class UpdateApiMcpServerRequest extends $dara.Model {
  additionalApiDescriptions?: UpdateApiMcpServerRequestAdditionalApiDescriptions[];
  apis?: UpdateApiMcpServerRequestApis[];
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
  description?: string;
  /**
   * @example
   * true
   */
  enableAssumeRole?: boolean;
  enableCustomVpcWhitelist?: boolean;
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
   * 403*************370
   */
  oauthClientId?: string;
  prompts?: UpdateApiMcpServerRequestPrompts[];
  publicAccess?: string;
  systemTools?: string[];
  terraformTools?: UpdateApiMcpServerRequestTerraformTools[];
  vpcWhitelists?: string[];
  /**
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
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

