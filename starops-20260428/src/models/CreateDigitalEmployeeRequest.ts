// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Tag } from "./Tag";


export class CreateDigitalEmployeeRequestKnowledgesBailian extends $dara.Model {
  /**
   * @remarks
   * The knowledge base attributes.
   * 
   * @example
   * test
   */
  attributes?: string;
  /**
   * @remarks
   * The Bailian index ID.
   * 
   * @example
   * index-xxxx
   */
  indexId?: string;
  /**
   * @remarks
   * The region of the knowledge base.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The Bailian workspace ID.
   * 
   * @example
   * llm-xxxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'attributes',
      indexId: 'indexId',
      region: 'region',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: 'string',
      indexId: 'string',
      region: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDigitalEmployeeRequestKnowledges extends $dara.Model {
  /**
   * @remarks
   * The Bailian knowledge base list.
   */
  bailian?: CreateDigitalEmployeeRequestKnowledgesBailian[];
  /**
   * @remarks
   * The SOP knowledge base list.
   */
  sop?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      bailian: 'bailian',
      sop: 'sop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bailian: { 'type': 'array', 'itemType': CreateDigitalEmployeeRequestKnowledgesBailian },
      sop: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  validate() {
    if(Array.isArray(this.bailian)) {
      $dara.Model.validateArray(this.bailian);
    }
    if(Array.isArray(this.sop)) {
      $dara.Model.validateArray(this.sop);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDigitalEmployeeRequestSandboxNetworkPolicy extends $dara.Model {
  /**
   * @remarks
   * The list of allowed CIDRs or IP addresses. A maximum of 50 entries are supported.
   */
  allowCidrs?: string[];
  /**
   * @remarks
   * The list of allowed FQDNs. A maximum of 50 entries are supported.
   */
  allowFqdns?: string[];
  /**
   * @remarks
   * Specifies whether to enable the sandbox network ACL.
   * 
   * @example
   * false
   */
  enableAcl?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowCidrs: 'allowCidrs',
      allowFqdns: 'allowFqdns',
      enableAcl: 'enableAcl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowCidrs: { 'type': 'array', 'itemType': 'string' },
      allowFqdns: { 'type': 'array', 'itemType': 'string' },
      enableAcl: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.allowCidrs)) {
      $dara.Model.validateArray(this.allowCidrs);
    }
    if(Array.isArray(this.allowFqdns)) {
      $dara.Model.validateArray(this.allowFqdns);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDigitalEmployeeRequestToolPolicyAliyunStatements extends $dara.Model {
  /**
   * @remarks
   * The list of Aliyun OpenAPI actions. Format: product:ApiName, product:Prefix*, or product:*.
   * 
   * @example
   * ["log:GetProject","log:CreateDashboard"]
   */
  actions?: string[];
  /**
   * @remarks
   * The Aliyun OpenAPI version that this statement applies to.
   * 
   * @example
   * 2020-12-30
   * 
   * @deprecated
   */
  apiVersion?: string;
  /**
   * @remarks
   * The execution policy when the API is matched.
   * 
   * @example
   * user_ack
   */
  decision?: string;
  /**
   * @remarks
   * The Aliyun OpenAPI product name that this statement applies to.
   * 
   * @example
   * Sls
   */
  product?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      apiVersion: 'apiVersion',
      decision: 'decision',
      product: 'product',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
      apiVersion: 'string',
      decision: 'string',
      product: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDigitalEmployeeRequestToolPolicyAliyun extends $dara.Model {
  /**
   * @remarks
   * The auto-pass policy. Entries are RAM Action strings in the format of product:ApiName, product:Prefix*, or product:*. Matched requests are automatically passed without human confirmation. If this parameter is empty or not configured, built-in read-only actions (Get*, List*, Describe*) are automatically passed. Unmatched requests require human-in-the-loop (HIL) confirmation.
   * 
   * @example
   * ["log:Get*","log:List*"]
   */
  autoPassPolicy?: string[];
  /**
   * @remarks
   * The explicit deny policy with the highest priority. Entries are RAM Action strings in the format of product:ApiName, product:Prefix*, or product:*. If this parameter is empty or not configured, no operations are actively denied. When matched by STAROps, the request is directly denied. Pop performs a secondary fallback check.
   * 
   * @example
   * ["ecs:RunCommand","ecs:Delete*"]
   */
  denyPolicy?: string[];
  /**
   * @remarks
   * Specifies whether to enable the Aliyun MCP tool policy. The policy is enabled by default and is disabled only when this parameter is explicitly set to false.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * **[Deprecated]** Use denyPolicy and autoPassPolicy instead. This parameter is still returned during the transition period. Original description: The list of Aliyun OpenAPI tool policy statements.
   * 
   * @example
   * [{"decision":"user_ack","product":"Sls","apiVersion":"2020-12-30","actions":["log:GetProject","log:CreateDashboard"]}]
   * 
   * @deprecated
   */
  statements?: CreateDigitalEmployeeRequestToolPolicyAliyunStatements[];
  static names(): { [key: string]: string } {
    return {
      autoPassPolicy: 'autoPassPolicy',
      denyPolicy: 'denyPolicy',
      enable: 'enable',
      statements: 'statements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPassPolicy: { 'type': 'array', 'itemType': 'string' },
      denyPolicy: { 'type': 'array', 'itemType': 'string' },
      enable: 'boolean',
      statements: { 'type': 'array', 'itemType': CreateDigitalEmployeeRequestToolPolicyAliyunStatements },
    };
  }

  validate() {
    if(Array.isArray(this.autoPassPolicy)) {
      $dara.Model.validateArray(this.autoPassPolicy);
    }
    if(Array.isArray(this.denyPolicy)) {
      $dara.Model.validateArray(this.denyPolicy);
    }
    if(Array.isArray(this.statements)) {
      $dara.Model.validateArray(this.statements);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDigitalEmployeeRequestToolPolicy extends $dara.Model {
  /**
   * @remarks
   * The Aliyun MCP tool calling security policy configuration.
   * 
   * @example
   * {"enable":true,"denyPolicy":["ecs:RunCommand","ecs:Delete*"],"autoPassPolicy":["log:Get*","log:List*"],"statements":[{"decision":"user_ack","product":"Sls","apiVersion":"2020-12-30","actions":["log:GetProject","log:CreateDashboard"]}]}
   */
  aliyun?: CreateDigitalEmployeeRequestToolPolicyAliyun;
  static names(): { [key: string]: string } {
    return {
      aliyun: 'aliyun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyun: CreateDigitalEmployeeRequestToolPolicyAliyun,
    };
  }

  validate() {
    if(this.aliyun && typeof (this.aliyun as any).validate === 'function') {
      (this.aliyun as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDigitalEmployeeRequest extends $dara.Model {
  /**
   * @remarks
   * The attributes.
   */
  attributes?: { [key: string]: string };
  /**
   * @remarks
   * The default rule of the digital employee.
   * 
   * @example
   * test
   */
  defaultRule?: string;
  /**
   * @remarks
   * The description of the digital employee.
   * 
   * @example
   * aaa
   */
  description?: string;
  /**
   * @remarks
   * The display name of the digital employee.
   * 
   * @example
   * digial-employee-test
   */
  displayName?: string;
  /**
   * @remarks
   * The knowledge base list.
   */
  knowledges?: CreateDigitalEmployeeRequestKnowledges;
  /**
   * @remarks
   * The name of the digital employee.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-ae******ey
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ARN of the RAM role.
   * 
   * This parameter is required.
   * 
   * @example
   * acs:ram::12345678912:role/testrole
   */
  roleArn?: string;
  /**
   * @remarks
   * The sandbox network ACL policy configuration of the digital employee.
   * 
   * @example
   * {"allowFqdns":["api.example.com"],"allowCidrs":["1.2.3.0/24","8.8.8.8"],"enableAcl":false}
   */
  sandboxNetworkPolicy?: CreateDigitalEmployeeRequestSandboxNetworkPolicy;
  /**
   * @remarks
   * The tags.
   */
  tags?: Tag[];
  /**
   * @remarks
   * The tool calling security policy configuration of the digital employee.
   * 
   * @example
   * {"aliyun":{"enable":true,"denyPolicy":["ecs:RunCommand","ecs:Delete*"],"autoPassPolicy":["log:Get*","log:List*"],"statements":[{"decision":"user_ack","product":"Sls","apiVersion":"2020-12-30","actions":["log:GetProject","log:CreateDashboard"]}]}}
   */
  toolPolicy?: CreateDigitalEmployeeRequestToolPolicy;
  static names(): { [key: string]: string } {
    return {
      attributes: 'attributes',
      defaultRule: 'defaultRule',
      description: 'description',
      displayName: 'displayName',
      knowledges: 'knowledges',
      name: 'name',
      resourceGroupId: 'resourceGroupId',
      roleArn: 'roleArn',
      sandboxNetworkPolicy: 'sandboxNetworkPolicy',
      tags: 'tags',
      toolPolicy: 'toolPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      defaultRule: 'string',
      description: 'string',
      displayName: 'string',
      knowledges: CreateDigitalEmployeeRequestKnowledges,
      name: 'string',
      resourceGroupId: 'string',
      roleArn: 'string',
      sandboxNetworkPolicy: CreateDigitalEmployeeRequestSandboxNetworkPolicy,
      tags: { 'type': 'array', 'itemType': Tag },
      toolPolicy: CreateDigitalEmployeeRequestToolPolicy,
    };
  }

  validate() {
    if(this.attributes) {
      $dara.Model.validateMap(this.attributes);
    }
    if(this.knowledges && typeof (this.knowledges as any).validate === 'function') {
      (this.knowledges as any).validate();
    }
    if(this.sandboxNetworkPolicy && typeof (this.sandboxNetworkPolicy as any).validate === 'function') {
      (this.sandboxNetworkPolicy as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(this.toolPolicy && typeof (this.toolPolicy as any).validate === 'function') {
      (this.toolPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

