// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDigitalEmployeeRequestKnowledgesBailian extends $dara.Model {
  /**
   * @remarks
   * Knowledge base attributes
   * 
   * @example
   * test
   */
  attributes?: string;
  /**
   * @remarks
   * Bailian index ID
   * 
   * @example
   * index-xxxx
   */
  indexId?: string;
  /**
   * @remarks
   * Region of the Bailian knowledge base
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * Bailian workspace ID
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

export class UpdateDigitalEmployeeRequestKnowledges extends $dara.Model {
  /**
   * @remarks
   * Bailian knowledge base list
   */
  bailian?: UpdateDigitalEmployeeRequestKnowledgesBailian[];
  /**
   * @remarks
   * SOP knowledge base list
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
      bailian: { 'type': 'array', 'itemType': UpdateDigitalEmployeeRequestKnowledgesBailian },
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

export class UpdateDigitalEmployeeRequest extends $dara.Model {
  /**
   * @remarks
   * Default rule
   * 
   * @example
   * test
   */
  defaultRule?: string;
  /**
   * @remarks
   * Description
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Digital employee display name
   * 
   * @example
   * test
   */
  displayName?: string;
  /**
   * @remarks
   * List of knowledge bases
   */
  knowledges?: UpdateDigitalEmployeeRequestKnowledges;
  /**
   * @remarks
   * Role ARN
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

