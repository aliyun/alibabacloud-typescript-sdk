// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Tag } from "./Tag";


export class GetDigitalEmployeeResponseBodyKnowledgesBailian extends $dara.Model {
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

export class GetDigitalEmployeeResponseBodyKnowledges extends $dara.Model {
  /**
   * @remarks
   * A list of Bailian knowledge bases.
   */
  bailian?: GetDigitalEmployeeResponseBodyKnowledgesBailian[];
  /**
   * @remarks
   * A list of Standard Operating Procedure (SOP) knowledge bases.
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

export class GetDigitalEmployeeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the digital employee was created.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2025-03-11T08:21:58Z
   */
  createTime?: string;
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
   * A list of knowledge bases.
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
   * The ID of the resource group.
   * 
   * @example
   * rg-ae******ey
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the role.
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
  /**
   * @remarks
   * The time when the digital employee was last updated.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2025-02-18T02:25:06Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
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
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
      updateTime: 'string',
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

