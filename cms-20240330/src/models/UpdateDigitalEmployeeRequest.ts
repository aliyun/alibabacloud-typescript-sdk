// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDigitalEmployeeRequestKnowledgesBailian extends $dara.Model {
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

export class UpdateDigitalEmployeeRequestKnowledges extends $dara.Model {
  bailian?: UpdateDigitalEmployeeRequestKnowledgesBailian[];
  static names(): { [key: string]: string } {
    return {
      bailian: 'bailian',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bailian: { 'type': 'array', 'itemType': UpdateDigitalEmployeeRequestKnowledgesBailian },
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

export class UpdateDigitalEmployeeRequest extends $dara.Model {
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
  knowledges?: UpdateDigitalEmployeeRequestKnowledges;
  /**
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
      roleArn: 'roleArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultRule: 'string',
      description: 'string',
      displayName: 'string',
      knowledges: UpdateDigitalEmployeeRequestKnowledges,
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

