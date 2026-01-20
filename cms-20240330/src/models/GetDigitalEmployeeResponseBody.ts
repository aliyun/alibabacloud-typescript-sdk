// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

export class GetDigitalEmployeeResponseBody extends $dara.Model {
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
   * acs:ram::12345678912:role/testrole
   */
  roleArn?: string;
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
      createTime: 'createTime',
      defaultRule: 'defaultRule',
      description: 'description',
      displayName: 'displayName',
      employeeType: 'employeeType',
      knowledges: 'knowledges',
      name: 'name',
      regionId: 'regionId',
      requestId: 'requestId',
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
      knowledges: GetDigitalEmployeeResponseBodyKnowledges,
      name: 'string',
      regionId: 'string',
      requestId: 'string',
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

