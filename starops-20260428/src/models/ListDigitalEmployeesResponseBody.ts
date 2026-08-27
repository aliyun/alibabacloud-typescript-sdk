// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Tag } from "./Tag";


export class ListDigitalEmployeesResponseBodyDigitalEmployeesKnowledgesBailian extends $dara.Model {
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

export class ListDigitalEmployeesResponseBodyDigitalEmployeesKnowledges extends $dara.Model {
  /**
   * @remarks
   * The list of Bailian knowledge bases.
   */
  bailian?: ListDigitalEmployeesResponseBodyDigitalEmployeesKnowledgesBailian[];
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
      bailian: { 'type': 'array', 'itemType': ListDigitalEmployeesResponseBodyDigitalEmployeesKnowledgesBailian },
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

export class ListDigitalEmployeesResponseBodyDigitalEmployees extends $dara.Model {
  attributes?: { [key: string]: string };
  /**
   * @remarks
   * The creation time.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2025-11-04T08:08:57Z
   */
  createTime?: string;
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
  knowledges?: ListDigitalEmployeesResponseBodyDigitalEmployeesKnowledges;
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
   * The tags.
   */
  tags?: Tag[];
  /**
   * @remarks
   * The modification time.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2025-05-07T02:26:01Z
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
      resourceGroupId: 'resourceGroupId',
      roleArn: 'roleArn',
      tags: 'tags',
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
      knowledges: ListDigitalEmployeesResponseBodyDigitalEmployeesKnowledges,
      name: 'string',
      resourceGroupId: 'string',
      roleArn: 'string',
      tags: { 'type': 'array', 'itemType': Tag },
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDigitalEmployeesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of digital employees.
   */
  digitalEmployees?: ListDigitalEmployeesResponseBodyDigitalEmployees[];
  /**
   * @remarks
   * The maximum number of results returned.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query.
   * 
   * @example
   * xxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8FDE2569-626B-5176-9844-28877A*****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 56
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      digitalEmployees: 'digitalEmployees',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      digitalEmployees: { 'type': 'array', 'itemType': ListDigitalEmployeesResponseBodyDigitalEmployees },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.digitalEmployees)) {
      $dara.Model.validateArray(this.digitalEmployees);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

