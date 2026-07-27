// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDigitalEmployeeRequestKnowledgesBailian extends $dara.Model {
  /**
   * @remarks
   * The attributes of the knowledge base.
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
   * The list of Bailian knowledge bases.
   */
  bailian?: UpdateDigitalEmployeeRequestKnowledgesBailian[];
  /**
   * @remarks
   * The list of SOP knowledge bases.
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
   * The API version. This parameter is deprecated.
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
   * The cloud service code.
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
   */
  statements?: UpdateDigitalEmployeeRequestToolPolicyAliyunStatements[];
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      statements: 'statements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      statements: { 'type': 'array', 'itemType': UpdateDigitalEmployeeRequestToolPolicyAliyunStatements },
    };
  }

  validate() {
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
   * The security policy configuration for Aliyun CLI tool calling.
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
   * The list of knowledge bases.
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
   * The security policy configuration for tool calling of the digital employee.
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

