// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTestCaseRequestFieldValueList extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      fieldIdentifier: 'fieldIdentifier',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldIdentifier: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTestCaseRequestTestcaseStepContentInfoStepResultList extends $dara.Model {
  expected?: string;
  step?: string;
  static names(): { [key: string]: string } {
    return {
      expected: 'expected',
      step: 'step',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expected: 'string',
      step: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTestCaseRequestTestcaseStepContentInfo extends $dara.Model {
  precondition?: string;
  stepResultList?: CreateTestCaseRequestTestcaseStepContentInfoStepResultList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TEXT
   */
  stepType?: string;
  static names(): { [key: string]: string } {
    return {
      precondition: 'precondition',
      stepResultList: 'stepResultList',
      stepType: 'stepType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      precondition: 'string',
      stepResultList: { 'type': 'array', 'itemType': CreateTestCaseRequestTestcaseStepContentInfoStepResultList },
      stepType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.stepResultList)) {
      $dara.Model.validateArray(this.stepResultList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTestCaseRequest extends $dara.Model {
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
   * fdd395xxxxx9q9845xxxxx23
   */
  directoryIdentifier?: string;
  fieldValueList?: CreateTestCaseRequestFieldValueList[];
  /**
   * @example
   * ik3dexxxxxfdfds1xxxxx23
   */
  priority?: string;
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
   */
  subject?: string;
  tags?: string[];
  testcaseStepContentInfo?: CreateTestCaseRequestTestcaseStepContentInfo;
  static names(): { [key: string]: string } {
    return {
      assignedTo: 'assignedTo',
      directoryIdentifier: 'directoryIdentifier',
      fieldValueList: 'fieldValueList',
      priority: 'priority',
      spaceIdentifier: 'spaceIdentifier',
      subject: 'subject',
      tags: 'tags',
      testcaseStepContentInfo: 'testcaseStepContentInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignedTo: 'string',
      directoryIdentifier: 'string',
      fieldValueList: { 'type': 'array', 'itemType': CreateTestCaseRequestFieldValueList },
      priority: 'string',
      spaceIdentifier: 'string',
      subject: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      testcaseStepContentInfo: CreateTestCaseRequestTestcaseStepContentInfo,
    };
  }

  validate() {
    if(Array.isArray(this.fieldValueList)) {
      $dara.Model.validateArray(this.fieldValueList);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(this.testcaseStepContentInfo && typeof (this.testcaseStepContentInfo as any).validate === 'function') {
      (this.testcaseStepContentInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

