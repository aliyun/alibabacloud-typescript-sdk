// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Tag } from "./Tag";


export class GetDigitalEmployeeResponseBodyKnowledgesBailian extends $dara.Model {
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
   * The ID of the Model Studio index.
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
   * The ID of the Model Studio workspace.
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

export class GetDigitalEmployeeResponseBodyKnowledges extends $dara.Model {
  /**
   * @remarks
   * The list of Model Studio knowledge bases.
   */
  bailian?: GetDigitalEmployeeResponseBodyKnowledgesBailian[];
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
      bailian: { 'type': 'array', 'itemType': GetDigitalEmployeeResponseBodyKnowledgesBailian },
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

export class GetDigitalEmployeeResponseBodySandboxNetworkPolicy extends $dara.Model {
  /**
   * @remarks
   * The list of allowed CIDR blocks or IP addresses.
   */
  allowCidrs?: string[];
  /**
   * @remarks
   * The list of allowed FQDNs.
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

export class GetDigitalEmployeeResponseBodyToolPolicyAliyunStatements extends $dara.Model {
  /**
   * @remarks
   * The list of RAM actions.
   * 
   * @example
   * ["log:GetProject","log:CreateDashboard"]
   */
  actions?: string[];
  /**
   * @remarks
   * The API version.
   * 
   * @example
   * 2020-12-30
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
   * The code of the cloud service.
   * 
   * This parameter is required.
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

export class GetDigitalEmployeeResponseBodyToolPolicyAliyun extends $dara.Model {
  /**
   * @remarks
   * The automatic allow policy. Each entry is a RAM action string in the format of product:ApiName, product:Prefix*, or product:*. If an action matches an entry, the action is automatically allowed without manual confirmation. If this parameter is empty or not configured, built-in read-only actions (Get*, List*, and Describe*) are automatically allowed. Unmatched actions require human-in-the-loop (HIL) confirmation.
   * 
   * @example
   * ["log:Get*","log:List*"]
   */
  autoPassPolicy?: string[];
  /**
   * @remarks
   * The explicit deny policy, which has the highest priority. Each entry is a RAM action string in the format of product:ApiName, product:Prefix*, or product:*. If this parameter is empty or not configured, no operations are actively denied. If an action matches a STAROps entry, the action is directly denied. The POP layer provides a secondary fallback check.
   * 
   * @example
   * ["ecs:RunCommand","ecs:Delete*"]
   */
  denyPolicy?: string[];
  /**
   * @remarks
   * Specifies whether the policy is enabled.
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
  statements?: GetDigitalEmployeeResponseBodyToolPolicyAliyunStatements[];
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
      statements: { 'type': 'array', 'itemType': GetDigitalEmployeeResponseBodyToolPolicyAliyunStatements },
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

export class GetDigitalEmployeeResponseBodyToolPolicy extends $dara.Model {
  /**
   * @remarks
   * The security policy configuration to invoke Aliyun CLI tools.
   * 
   * @example
   * {"enable":true,"statements":[{"decision":"user_ack","product":"Sls","apiVersion":"2020-12-30","actions":["log:GetProject","log:CreateDashboard"]}]}
   */
  aliyun?: GetDigitalEmployeeResponseBodyToolPolicyAliyun;
  static names(): { [key: string]: string } {
    return {
      aliyun: 'aliyun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyun: GetDigitalEmployeeResponseBodyToolPolicyAliyun,
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

export class GetDigitalEmployeeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The attributes.
   */
  attributes?: { [key: string]: string };
  /**
   * @remarks
   * The channel type.
   * 
   * @example
   * default
   */
  channel?: string;
  /**
   * @remarks
   * The creation time in UTC, which follows the RFC 3339 format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2025-03-11T08:21:58Z
   */
  createTime?: string;
  /**
   * @remarks
   * The default rules of the digital employee.
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
   * The type of the digital employee.
   * 
   * @example
   * custom
   */
  employeeType?: string;
  /**
   * @remarks
   * The list of knowledge bases.
   */
  knowledges?: GetDigitalEmployeeResponseBodyKnowledges;
  /**
   * @remarks
   * The name of the digital employee.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0B9377D9-C56B-5C2E-A8A4-************
   */
  requestId?: string;
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
  sandboxNetworkPolicy?: GetDigitalEmployeeResponseBodySandboxNetworkPolicy;
  /**
   * @remarks
   * The status of the digital employee. Valid values: 0 (normal) and 1 (disabled).
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The tags.
   */
  tags?: Tag[];
  /**
   * @remarks
   * The tool policy.
   * 
   * @example
   * {"aliyun":{"enable":true,"statements":[{"decision":"user_ack","product":"Sls","apiVersion":"2020-12-30","actions":["log:GetProject","log:CreateDashboard"]}]}}
   */
  toolPolicy?: GetDigitalEmployeeResponseBodyToolPolicy;
  /**
   * @remarks
   * The update time in UTC, which follows the RFC 3339 format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2025-02-18T02:25:06Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'attributes',
      channel: 'channel',
      createTime: 'createTime',
      defaultRule: 'defaultRule',
      description: 'description',
      displayName: 'displayName',
      employeeType: 'employeeType',
      knowledges: 'knowledges',
      name: 'name',
      regionId: 'regionId',
      requestId: 'requestId',
      resourceGroupId: 'resourceGroupId',
      roleArn: 'roleArn',
      sandboxNetworkPolicy: 'sandboxNetworkPolicy',
      status: 'status',
      tags: 'tags',
      toolPolicy: 'toolPolicy',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      channel: 'string',
      createTime: 'string',
      defaultRule: 'string',
      description: 'string',
      displayName: 'string',
      employeeType: 'string',
      knowledges: GetDigitalEmployeeResponseBodyKnowledges,
      name: 'string',
      regionId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      roleArn: 'string',
      sandboxNetworkPolicy: GetDigitalEmployeeResponseBodySandboxNetworkPolicy,
      status: 'number',
      tags: { 'type': 'array', 'itemType': Tag },
      toolPolicy: GetDigitalEmployeeResponseBodyToolPolicy,
      updateTime: 'string',
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

