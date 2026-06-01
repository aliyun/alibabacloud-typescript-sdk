// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Tag } from "./Tag";


export class GetDigitalEmployeeResponseBodyKnowledgesBailian extends $dara.Model {
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

export class GetDigitalEmployeeResponseBodyKnowledges extends $dara.Model {
  bailian?: GetDigitalEmployeeResponseBodyKnowledgesBailian[];
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

export class GetDigitalEmployeeResponseBodyToolPolicyAliyunStatements extends $dara.Model {
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
   * This parameter is required.
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
  statements?: GetDigitalEmployeeResponseBodyToolPolicyAliyunStatements[];
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      statements: 'statements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      statements: { 'type': 'array', 'itemType': GetDigitalEmployeeResponseBodyToolPolicyAliyunStatements },
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

export class GetDigitalEmployeeResponseBodyToolPolicy extends $dara.Model {
  /**
   * @remarks
   * Aliyun MCP 工具调用安全策略配置。
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
  attributes?: { [key: string]: string };
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2025-03-11T08:21:58Z
   */
  createTime?: string;
  /**
   * @example
   * test
   */
  defaultRule?: string;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * test
   */
  displayName?: string;
  /**
   * @example
   * custom
   */
  employeeType?: string;
  knowledges?: GetDigitalEmployeeResponseBodyKnowledges;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * 0B9377D9-C56B-5C2E-A8A4-************
   */
  requestId?: string;
  /**
   * @example
   * rg-ae******ey
   */
  resourceGroupId?: string;
  /**
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
  toolPolicy?: GetDigitalEmployeeResponseBodyToolPolicy;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2025-02-18T02:25:06Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'attributes',
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
      tags: 'tags',
      toolPolicy: 'toolPolicy',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

