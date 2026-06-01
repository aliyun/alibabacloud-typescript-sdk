// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Tag } from "./Tag";


export class CreateDigitalEmployeeRequestKnowledgesBailian extends $dara.Model {
  /**
   * @example
   * test
   */
  attributes?: string;
  /**
   * @example
   * index-xxxx
   */
  indexId?: string;
  /**
   * @example
   * cn-beijing
   */
  region?: string;
  /**
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
  bailian?: CreateDigitalEmployeeRequestKnowledgesBailian[];
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

export class CreateDigitalEmployeeRequestToolPolicyAliyunStatements extends $dara.Model {
  /**
   * @remarks
   * Aliyun OpenAPI Action 列表，格式为 product:ApiName、product:Prefix* 或 product:*。
   * 
   * @example
   * ["log:GetProject","log:CreateDashboard"]
   */
  actions?: string[];
  /**
   * @remarks
   * 本条语句对应的 Aliyun OpenAPI API 版本。
   * 
   * @example
   * 2020-12-30
   */
  apiVersion?: string;
  /**
   * @remarks
   * 命中该 API 后的执行策略。
   * 
   * @example
   * user_ack
   */
  decision?: string;
  /**
   * @remarks
   * 本条语句对应的 Aliyun OpenAPI 产品名。
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
   * 是否启用 Aliyun MCP 工具策略。
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * Aliyun OpenAPI 工具策略语句列表。
   * 
   * @example
   * [{"decision":"user_ack","product":"Sls","apiVersion":"2020-12-30","actions":["log:GetProject","log:CreateDashboard"]}]
   */
  statements?: CreateDigitalEmployeeRequestToolPolicyAliyunStatements[];
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      statements: 'statements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      statements: { 'type': 'array', 'itemType': CreateDigitalEmployeeRequestToolPolicyAliyunStatements },
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

export class CreateDigitalEmployeeRequestToolPolicy extends $dara.Model {
  /**
   * @remarks
   * Aliyun MCP 工具调用安全策略配置。
   * 
   * @example
   * {"enable":true,"statements":[{"decision":"user_ack","product":"Sls","apiVersion":"2020-12-30","actions":["log:GetProject","log:CreateDashboard"]}]}
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
  attributes?: { [key: string]: string };
  /**
   * @example
   * test
   */
  defaultRule?: string;
  /**
   * @example
   * aaa
   */
  description?: string;
  /**
   * @example
   * digial-employee-test
   */
  displayName?: string;
  knowledges?: CreateDigitalEmployeeRequestKnowledges;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * rg-ae******ey
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * acs:ram::12345678912:role/testrole
   */
  roleArn?: string;
  tags?: Tag[];
  /**
   * @remarks
   * 数字员工工具调用安全策略配置。
   * 
   * @example
   * {"aliyun":{"enable":true,"statements":[{"decision":"user_ack","product":"Sls","apiVersion":"2020-12-30","actions":["log:GetProject","log:CreateDashboard"]}]}}
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

