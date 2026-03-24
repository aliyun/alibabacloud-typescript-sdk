// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Tag } from "./Tag";


export class CreateDigitalEmployeeRequestKnowledgesBailian extends $dara.Model {
  /**
   * @remarks
   * The properties of the knowledge base.
   * 
   * @example
   * test
   */
  attributes?: string;
  /**
   * @remarks
   * The ID of the Bailian index.
   * 
   * @example
   * index-xxxx
   */
  indexId?: string;
  /**
   * @remarks
   * The region of the Bailian knowledge base.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The ID of the Bailian workspace.
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
   * The list of Bailian knowledge bases.
   */
  bailian?: CreateDigitalEmployeeRequestKnowledgesBailian[];
  /**
   * @remarks
   * The list of Standard Operating Procedure (SOP) knowledge bases.
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

export class CreateDigitalEmployeeRequest extends $dara.Model {
  /**
   * @remarks
   * The default rule.
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
   * The list of knowledge bases.
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
   * The ID of the resource group.
   * 
   * @example
   * rg-ae******ey
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the RAM role.
   * 
   * This parameter is required.
   * 
   * @example
   * acs:ram::12345678912:role/testrole
   */
  roleArn?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: Tag[];
  static names(): { [key: string]: string } {
    return {
      defaultRule: 'defaultRule',
      description: 'description',
      displayName: 'displayName',
      knowledges: 'knowledges',
      name: 'name',
      resourceGroupId: 'resourceGroupId',
      roleArn: 'roleArn',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultRule: 'string',
      description: 'string',
      displayName: 'string',
      knowledges: CreateDigitalEmployeeRequestKnowledges,
      name: 'string',
      resourceGroupId: 'string',
      roleArn: 'string',
      tags: { 'type': 'array', 'itemType': Tag },
    };
  }

  validate() {
    if(this.knowledges && typeof (this.knowledges as any).validate === 'function') {
      (this.knowledges as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

