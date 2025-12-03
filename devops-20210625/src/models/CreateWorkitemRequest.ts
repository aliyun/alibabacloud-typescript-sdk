// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkitemRequestFieldValueList extends $dara.Model {
  /**
   * @example
   * 6aexxxxxa1d98c09c60xxxx16
   */
  fieldIdentifier?: string;
  /**
   * @example
   * 77c7fb03c4186c8691d6...
   */
  value?: string;
  /**
   * @example
   * null
   */
  workitemIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      fieldIdentifier: 'fieldIdentifier',
      value: 'value',
      workitemIdentifier: 'workitemIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldIdentifier: 'string',
      value: 'string',
      workitemIdentifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkitemRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 19xxxx31947xxxx
   */
  assignedTo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Req
   */
  category?: string;
  /**
   * @example
   * 测试内容
   */
  description?: string;
  /**
   * @example
   * RICHTEXT
   */
  descriptionFormat?: string;
  fieldValueList?: CreateWorkitemRequestFieldValueList[];
  /**
   * @example
   * 3a0c9cdd24ae1e1995b8...
   */
  parent?: string;
  participant?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * asd345xxxxx9q9845xxxxx34
   */
  space?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * asd345xxxxx9q9845xxxxx34
   */
  spaceIdentifier?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Project
   */
  spaceType?: string;
  sprint?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 测试工作项
   */
  subject?: string;
  tracker?: string[];
  verifier?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 9uyxxxxxre573f561dxxn40
   */
  workitemType?: string;
  static names(): { [key: string]: string } {
    return {
      assignedTo: 'assignedTo',
      category: 'category',
      description: 'description',
      descriptionFormat: 'descriptionFormat',
      fieldValueList: 'fieldValueList',
      parent: 'parent',
      participant: 'participant',
      space: 'space',
      spaceIdentifier: 'spaceIdentifier',
      spaceType: 'spaceType',
      sprint: 'sprint',
      subject: 'subject',
      tracker: 'tracker',
      verifier: 'verifier',
      workitemType: 'workitemType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignedTo: 'string',
      category: 'string',
      description: 'string',
      descriptionFormat: 'string',
      fieldValueList: { 'type': 'array', 'itemType': CreateWorkitemRequestFieldValueList },
      parent: 'string',
      participant: { 'type': 'array', 'itemType': 'string' },
      space: 'string',
      spaceIdentifier: 'string',
      spaceType: 'string',
      sprint: { 'type': 'array', 'itemType': 'string' },
      subject: 'string',
      tracker: { 'type': 'array', 'itemType': 'string' },
      verifier: { 'type': 'array', 'itemType': 'string' },
      workitemType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fieldValueList)) {
      $dara.Model.validateArray(this.fieldValueList);
    }
    if(Array.isArray(this.participant)) {
      $dara.Model.validateArray(this.participant);
    }
    if(Array.isArray(this.sprint)) {
      $dara.Model.validateArray(this.sprint);
    }
    if(Array.isArray(this.tracker)) {
      $dara.Model.validateArray(this.tracker);
    }
    if(Array.isArray(this.verifier)) {
      $dara.Model.validateArray(this.verifier);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

