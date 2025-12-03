// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTestCaseResponseBodyTestcaseAssignedTo extends $dara.Model {
  /**
   * @example
   * 134xxx343xxxxx
   */
  assignIdentifier?: string;
  name?: string;
  /**
   * @example
   * 3c2253c22xxxxxxxx53a
   */
  tbRoleId?: string;
  static names(): { [key: string]: string } {
    return {
      assignIdentifier: 'assignIdentifier',
      name: 'name',
      tbRoleId: 'tbRoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignIdentifier: 'string',
      name: 'string',
      tbRoleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTestCaseResponseBodyTestcaseCreator extends $dara.Model {
  /**
   * @example
   * 134xxx343xxxxx
   */
  createIdentifier?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      createIdentifier: 'createIdentifier',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createIdentifier: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTestCaseResponseBodyTestcaseDetailInfoExpectedResult extends $dara.Model {
  expectContent?: string;
  /**
   * @example
   * RICHTEXT
   */
  expectContentType?: string;
  /**
   * @example
   * 59253164xxxxxxf2e98dbc7e27
   */
  expectIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      expectContent: 'expectContent',
      expectContentType: 'expectContentType',
      expectIdentifier: 'expectIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expectContent: 'string',
      expectContentType: 'string',
      expectIdentifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTestCaseResponseBodyTestcaseDetailInfoPrecondition extends $dara.Model {
  preContent?: string;
  /**
   * @example
   * RICHTEXT
   */
  preContentType?: string;
  /**
   * @example
   * 59253164xxxxxxf2e98dbc7e27
   */
  preIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      preContent: 'preContent',
      preContentType: 'preContentType',
      preIdentifier: 'preIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preContent: 'string',
      preContentType: 'string',
      preIdentifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTestCaseResponseBodyTestcaseDetailInfoStepContent extends $dara.Model {
  stepContent?: string;
  /**
   * @example
   * RICHTEXT
   */
  stepContentType?: string;
  /**
   * @example
   * 59253164xxxxxxf2e98dbc7e27
   */
  stepIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      stepContent: 'stepContent',
      stepContentType: 'stepContentType',
      stepIdentifier: 'stepIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stepContent: 'string',
      stepContentType: 'string',
      stepIdentifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTestCaseResponseBodyTestcaseDetailInfo extends $dara.Model {
  expectedResult?: CreateTestCaseResponseBodyTestcaseDetailInfoExpectedResult;
  precondition?: CreateTestCaseResponseBodyTestcaseDetailInfoPrecondition;
  stepContent?: CreateTestCaseResponseBodyTestcaseDetailInfoStepContent;
  /**
   * @example
   * TEXT/TABLE
   */
  stepType?: string;
  static names(): { [key: string]: string } {
    return {
      expectedResult: 'expectedResult',
      precondition: 'precondition',
      stepContent: 'stepContent',
      stepType: 'stepType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expectedResult: CreateTestCaseResponseBodyTestcaseDetailInfoExpectedResult,
      precondition: CreateTestCaseResponseBodyTestcaseDetailInfoPrecondition,
      stepContent: CreateTestCaseResponseBodyTestcaseDetailInfoStepContent,
      stepType: 'string',
    };
  }

  validate() {
    if(this.expectedResult && typeof (this.expectedResult as any).validate === 'function') {
      (this.expectedResult as any).validate();
    }
    if(this.precondition && typeof (this.precondition as any).validate === 'function') {
      (this.precondition as any).validate();
    }
    if(this.stepContent && typeof (this.stepContent as any).validate === 'function') {
      (this.stepContent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTestCaseResponseBodyTestcaseDirectory extends $dara.Model {
  /**
   * @example
   * 0bc1150dcxxxxxxxx04c
   */
  childIdentifier?: string;
  /**
   * @example
   * 0bc1150dcxxxxxxxx04c
   */
  directoryIdentifier?: string;
  name?: string;
  pathName?: string[];
  static names(): { [key: string]: string } {
    return {
      childIdentifier: 'childIdentifier',
      directoryIdentifier: 'directoryIdentifier',
      name: 'name',
      pathName: 'pathName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childIdentifier: 'string',
      directoryIdentifier: 'string',
      name: 'string',
      pathName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.pathName)) {
      $dara.Model.validateArray(this.pathName);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTestCaseResponseBodyTestcaseModifier extends $dara.Model {
  /**
   * @example
   * 134xxx343xxxxx
   */
  modifyIdentifier?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      modifyIdentifier: 'modifyIdentifier',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifyIdentifier: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTestCaseResponseBodyTestcase extends $dara.Model {
  assignedTo?: CreateTestCaseResponseBodyTestcaseAssignedTo;
  /**
   * @example
   * TestCase
   */
  categoryIdentifier?: string;
  creator?: CreateTestCaseResponseBodyTestcaseCreator;
  detailInfo?: CreateTestCaseResponseBodyTestcaseDetailInfo;
  directory?: CreateTestCaseResponseBodyTestcaseDirectory;
  /**
   * @example
   * 5a73f81c834d013361d92bdcce
   */
  identifier?: string;
  modifier?: CreateTestCaseResponseBodyTestcaseModifier;
  /**
   * @example
   * a18571eba8fe9267cd8375fc06
   */
  spaceIdentifier?: string;
  /**
   * @example
   * TestRepo
   */
  spaceType?: string;
  subject?: string;
  static names(): { [key: string]: string } {
    return {
      assignedTo: 'assignedTo',
      categoryIdentifier: 'categoryIdentifier',
      creator: 'creator',
      detailInfo: 'detailInfo',
      directory: 'directory',
      identifier: 'identifier',
      modifier: 'modifier',
      spaceIdentifier: 'spaceIdentifier',
      spaceType: 'spaceType',
      subject: 'subject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignedTo: CreateTestCaseResponseBodyTestcaseAssignedTo,
      categoryIdentifier: 'string',
      creator: CreateTestCaseResponseBodyTestcaseCreator,
      detailInfo: CreateTestCaseResponseBodyTestcaseDetailInfo,
      directory: CreateTestCaseResponseBodyTestcaseDirectory,
      identifier: 'string',
      modifier: CreateTestCaseResponseBodyTestcaseModifier,
      spaceIdentifier: 'string',
      spaceType: 'string',
      subject: 'string',
    };
  }

  validate() {
    if(this.assignedTo && typeof (this.assignedTo as any).validate === 'function') {
      (this.assignedTo as any).validate();
    }
    if(this.creator && typeof (this.creator as any).validate === 'function') {
      (this.creator as any).validate();
    }
    if(this.detailInfo && typeof (this.detailInfo as any).validate === 'function') {
      (this.detailInfo as any).validate();
    }
    if(this.directory && typeof (this.directory as any).validate === 'function') {
      (this.directory as any).validate();
    }
    if(this.modifier && typeof (this.modifier as any).validate === 'function') {
      (this.modifier as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTestCaseResponseBody extends $dara.Model {
  /**
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @example
   * error
   */
  errorMsg?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 18E50717-93A4-53BC-A30D-963F742A1CE6
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  testcase?: CreateTestCaseResponseBodyTestcase;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      requestId: 'requestId',
      success: 'success',
      testcase: 'testcase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
      testcase: CreateTestCaseResponseBodyTestcase,
    };
  }

  validate() {
    if(this.testcase && typeof (this.testcase as any).validate === 'function') {
      (this.testcase as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

