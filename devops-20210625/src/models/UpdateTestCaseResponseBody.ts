// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTestCaseResponseBodyTestcaseAssignedTo extends $dara.Model {
  /**
   * @example
   * 1316xxxxxx8624xxx
   */
  assignIdentifier?: string;
  name?: string;
  /**
   * @example
   * xxxxxxxewdds12xxx
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

export class UpdateTestCaseResponseBodyTestcaseCreator extends $dara.Model {
  /**
   * @example
   * 1316xxxxxx8624xxx
   */
  createIdentifier?: string;
  /**
   * @example
   * xxxxxxx
   */
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

export class UpdateTestCaseResponseBodyTestcaseDetailInfoExpectedResult extends $dara.Model {
  expectContent?: string;
  /**
   * @example
   * MARKDOWN
   */
  expectContentType?: string;
  /**
   * @example
   * 685340d13127b01185335bd360
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

export class UpdateTestCaseResponseBodyTestcaseDetailInfoPrecondition extends $dara.Model {
  preContent?: string;
  /**
   * @example
   * MARKDOWN
   */
  preContentType?: string;
  /**
   * @example
   * 3354596c7b3004480b635acf95
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

export class UpdateTestCaseResponseBodyTestcaseDetailInfoStepContent extends $dara.Model {
  stepContent?: string;
  /**
   * @example
   * RICHTEXT
   */
  stepContentType?: string;
  /**
   * @example
   * ad504e6cdcd2165b28eb1e1b9f
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

export class UpdateTestCaseResponseBodyTestcaseDetailInfo extends $dara.Model {
  expectedResult?: UpdateTestCaseResponseBodyTestcaseDetailInfoExpectedResult;
  precondition?: UpdateTestCaseResponseBodyTestcaseDetailInfoPrecondition;
  stepContent?: UpdateTestCaseResponseBodyTestcaseDetailInfoStepContent;
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
      expectedResult: UpdateTestCaseResponseBodyTestcaseDetailInfoExpectedResult,
      precondition: UpdateTestCaseResponseBodyTestcaseDetailInfoPrecondition,
      stepContent: UpdateTestCaseResponseBodyTestcaseDetailInfoStepContent,
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

export class UpdateTestCaseResponseBodyTestcaseDirectory extends $dara.Model {
  /**
   * @example
   * 2973f597c14c6f533fffdcd05c
   */
  childIdentifier?: string;
  /**
   * @example
   * e27b8eace6501ce51cf5d56784
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

export class UpdateTestCaseResponseBodyTestcaseModifier extends $dara.Model {
  /**
   * @example
   * 1316xxxxxx8624xxx
   */
  modifyIdentifier?: string;
  /**
   * @example
   * xxxxxxx
   */
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

export class UpdateTestCaseResponseBodyTestcase extends $dara.Model {
  assignedTo?: UpdateTestCaseResponseBodyTestcaseAssignedTo;
  /**
   * @example
   * TestCase
   */
  categoryIdentifier?: string;
  creator?: UpdateTestCaseResponseBodyTestcaseCreator;
  detailInfo?: UpdateTestCaseResponseBodyTestcaseDetailInfo;
  directory?: UpdateTestCaseResponseBodyTestcaseDirectory;
  /**
   * @example
   * c7f7033b021ead52cc42721382
   */
  identifier?: string;
  modifier?: UpdateTestCaseResponseBodyTestcaseModifier;
  /**
   * @example
   * 1e7d7a412b91a2144ec4aa8411
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
      assignedTo: UpdateTestCaseResponseBodyTestcaseAssignedTo,
      categoryIdentifier: 'string',
      creator: UpdateTestCaseResponseBodyTestcaseCreator,
      detailInfo: UpdateTestCaseResponseBodyTestcaseDetailInfo,
      directory: UpdateTestCaseResponseBodyTestcaseDirectory,
      identifier: 'string',
      modifier: UpdateTestCaseResponseBodyTestcaseModifier,
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

export class UpdateTestCaseResponseBody extends $dara.Model {
  testcase?: UpdateTestCaseResponseBodyTestcase;
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
   * ASSDS-ASSASX-XSAXSA-XSAXSAXS
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      testcase: 'Testcase',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      testcase: UpdateTestCaseResponseBodyTestcase,
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
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

