// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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
  static names(): { [key: string]: string } {
    return {
      bailian: 'bailian',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bailian: { 'type': 'array', 'itemType': CreateDigitalEmployeeRequestKnowledgesBailian },
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

export class CreateDigitalEmployeeRequest extends $dara.Model {
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * acs:ram::12345678912:role/testrole
   */
  roleArn?: string;
  static names(): { [key: string]: string } {
    return {
      defaultRule: 'defaultRule',
      description: 'description',
      displayName: 'displayName',
      knowledges: 'knowledges',
      name: 'name',
      roleArn: 'roleArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultRule: 'string',
      description: 'string',
      displayName: 'string',
      knowledges: CreateDigitalEmployeeRequestKnowledges,
      name: 'string',
      roleArn: 'string',
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

