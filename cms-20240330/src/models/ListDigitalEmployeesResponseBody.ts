// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDigitalEmployeesResponseBodyDigitalEmployeesKnowledgesBailian extends $dara.Model {
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
  bailian?: ListDigitalEmployeesResponseBodyDigitalEmployeesKnowledgesBailian[];
  static names(): { [key: string]: string } {
    return {
      bailian: 'bailian',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bailian: { 'type': 'array', 'itemType': ListDigitalEmployeesResponseBodyDigitalEmployeesKnowledgesBailian },
    };
  }

  validate() {
    if(Array.isArray(this.bailian)) {
      $dara.Model.validateArray(this.bailian);
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
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2025-11-04T08:08:57Z
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
  employeeType?: string;
  knowledges?: ListDigitalEmployeesResponseBodyDigitalEmployeesKnowledges;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * acs:ram::12345678912:role/testrole
   */
  roleArn?: string;
  /**
   * @remarks
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
      roleArn: 'roleArn',
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
      roleArn: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(this.knowledges && typeof (this.knowledges as any).validate === 'function') {
      (this.knowledges as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDigitalEmployeesResponseBody extends $dara.Model {
  digitalEmployees?: ListDigitalEmployeesResponseBodyDigitalEmployees[];
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * xxxxx
   */
  nextToken?: string;
  /**
   * @example
   * 8FDE2569-626B-5176-9844-28877A*****
   */
  requestId?: string;
  /**
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

