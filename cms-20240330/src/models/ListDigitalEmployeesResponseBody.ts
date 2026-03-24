// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Tag } from "./Tag";


export class ListDigitalEmployeesResponseBodyDigitalEmployeesKnowledgesBailian extends $dara.Model {
  /**
   * @remarks
   * Knowledge base attributes.
   * 
   * @example
   * test
   */
  attributes?: string;
  /**
   * @remarks
   * Bailian index ID.
   * 
   * @example
   * index-xxxx
   */
  indexId?: string;
  /**
   * @remarks
   * Region of the Bailian knowledge base.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * Bailian workspace ID.
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
   * Bailian knowledge base list.
   */
  bailian?: ListDigitalEmployeesResponseBodyDigitalEmployeesKnowledgesBailian[];
  /**
   * @remarks
   * SOP knowledge base list.
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
  /**
   * @remarks
   * Creation time.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2025-11-04T08:08:57Z
   */
  createTime?: string;
  /**
   * @remarks
   * Default rule.
   * 
   * @example
   * test
   */
  defaultRule?: string;
  /**
   * @remarks
   * Description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Digital employee display name.
   * 
   * @example
   * test
   */
  displayName?: string;
  /**
   * @remarks
   * Digital employee type.
   * 
   * @example
   * custom
   */
  employeeType?: string;
  /**
   * @remarks
   * List of knowledge bases.
   */
  knowledges?: ListDigitalEmployeesResponseBodyDigitalEmployeesKnowledges;
  /**
   * @remarks
   * Digital employee name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-ae******ey
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Role ARN.
   * 
   * @example
   * acs:ram::12345678912:role/testrole
   */
  roleArn?: string;
  /**
   * @remarks
   * Tags.
   */
  tags?: Tag[];
  /**
   * @remarks
   * Update time.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2025-05-07T02:26:01Z
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
      knowledges: ListDigitalEmployeesResponseBodyDigitalEmployeesKnowledges,
      name: 'string',
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

export class ListDigitalEmployeesResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of digital employees.
   */
  digitalEmployees?: ListDigitalEmployeesResponseBodyDigitalEmployees[];
  /**
   * @remarks
   * Maximum number of results returned.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * Token for the next page of results.
   * 
   * @example
   * xxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 8FDE2569-626B-5176-9844-28877A*****
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of records.
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

