// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDigitalEmployeeRequestKnowledgesBailian extends $dara.Model {
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
   * llm-xxxx
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

export class UpdateDigitalEmployeeRequestKnowledges extends $dara.Model {
  /**
   * @remarks
   * The Bailian knowledge base list.
   */
  bailian?: UpdateDigitalEmployeeRequestKnowledgesBailian[];
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
      bailian: { 'type': 'array', 'itemType': UpdateDigitalEmployeeRequestKnowledgesBailian },
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

export class UpdateDigitalEmployeeRequestSandboxNetworkPolicy extends $dara.Model {
  /**
   * @remarks
   * The list of CIDRs or IP addresses that are allowed to be accessed.
   */
  allowCidrs?: string[];
  /**
   * @remarks
   * The list of FQDNs that are allowed to be accessed.
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

export class UpdateDigitalEmployeeRequestToolPolicyAliyunStatements extends $dara.Model {
  /**
   * @remarks
   * RAM action
   * 
   * @example
   * ["log:GetProject","log:CreateDashboard"]
   */
  actions?: string[];
  /**
   * @remarks
   * **[Deprecated]** The API version.
   * 
   * @example
   * 2024-03-30
   * 
   * @deprecated
   */
  apiVersion?: string;
  /**
   * @remarks
   * The execution policy.
   * 
   * @example
   * user_ack
   */
  decision?: string;
  /**
   * @remarks
   * The cloud product code.
   * 
   * @example
   * Cms
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

export class UpdateDigitalEmployeeRequestToolPolicyAliyun extends $dara.Model {
  /**
   * @remarks
   * The automatic pass-through policy. Each entry is a RAM Action string in the format of product:ApiName, product:Prefix*, or product:*. Matched actions are automatically allowed without human confirmation. If this parameter is empty or not configured, built-in read-only actions (Get*, List*, Describe*) are automatically allowed. Unmatched actions require human-in-the-loop (HIL) confirmation.
   * 
   * @example
   * ["log:Get*","log:List*"]
   */
  autoPassPolicy?: string[];
  /**
   * @remarks
   * The explicit deny policy with the highest priority. Each entry is a RAM Action string in the format of product:ApiName, product:Prefix*, or product:*. If this parameter is empty or not configured, no operations are actively denied. STAROps directly denies matched actions. Pop performs secondary enforcement.
   * 
   * @example
   * ["ecs:RunCommand","ecs:Delete*"]
   */
  denyPolicy?: string[];
  /**
   * @remarks
   * Specifies whether to enable the policy.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The list of Aliyun CLI tool policy statements.
   * 
   * @example
   * [{"decision":"user_ack","product":"Sls","apiVersion":"2020-12-30","actions":["log:GetProject","log:CreateDashboard"]}]
   * 
   * @deprecated
   */
  statements?: UpdateDigitalEmployeeRequestToolPolicyAliyunStatements[];
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
      statements: { 'type': 'array', 'itemType': UpdateDigitalEmployeeRequestToolPolicyAliyunStatements },
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

export class UpdateDigitalEmployeeRequestToolPolicy extends $dara.Model {
  /**
   * @remarks
   * The Aliyun CLI tool calling security policy configuration.
   * 
   * @example
   * {"enable":true,"statements":[{"decision":"user_ack","product":"Sls","apiVersion":"2020-12-30","actions":["log:GetProject","log:CreateDashboard"]}]}
   */
  aliyun?: UpdateDigitalEmployeeRequestToolPolicyAliyun;
  static names(): { [key: string]: string } {
    return {
      aliyun: 'aliyun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyun: UpdateDigitalEmployeeRequestToolPolicyAliyun,
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

export class UpdateDigitalEmployeeRequest extends $dara.Model {
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
   * test
   */
  description?: string;
  /**
   * @remarks
   * The display name of the digital employee.
   * 
   * @example
   * test
   */
  displayName?: string;
  /**
   * @remarks
   * The knowledge base list.
   */
  knowledges?: UpdateDigitalEmployeeRequestKnowledges;
  /**
   * @remarks
   * The ARN of the RAM role.
   * 
   * @example
   * acs:ram::12345678912:role/testrole
   */
  roleArn?: string;
  /**
   * @remarks
   * The list of CIDRs or IP addresses that are allowed to be accessed.
   * 
   * @example
   * {"allowFqdns":["api.example.com"],"allowCidrs":["1.2.3.0/24","8.8.8.8"],"enableAcl":false}
   */
  sandboxNetworkPolicy?: UpdateDigitalEmployeeRequestSandboxNetworkPolicy;
  /**
   * @remarks
   * The tool calling security policy configuration of the digital employee.
   * 
   * @example
   * {"aliyun":{"enable":true,"statements":[{"decision":"user_ack","product":"Sls","apiVersion":"2020-12-30","actions":["log:GetProject","log:CreateDashboard"]}]}}
   */
  toolPolicy?: UpdateDigitalEmployeeRequestToolPolicy;
  static names(): { [key: string]: string } {
    return {
      attributes: 'attributes',
      defaultRule: 'defaultRule',
      description: 'description',
      displayName: 'displayName',
      knowledges: 'knowledges',
      roleArn: 'roleArn',
      sandboxNetworkPolicy: 'sandboxNetworkPolicy',
      toolPolicy: 'toolPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      defaultRule: 'string',
      description: 'string',
      displayName: 'string',
      knowledges: UpdateDigitalEmployeeRequestKnowledges,
      roleArn: 'string',
      sandboxNetworkPolicy: UpdateDigitalEmployeeRequestSandboxNetworkPolicy,
      toolPolicy: UpdateDigitalEmployeeRequestToolPolicy,
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
    if(this.toolPolicy && typeof (this.toolPolicy as any).validate === 'function') {
      (this.toolPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

