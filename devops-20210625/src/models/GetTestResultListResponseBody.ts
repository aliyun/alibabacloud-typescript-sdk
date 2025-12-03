// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTestResultListResponseBodyTestResultAssignedTo extends $dara.Model {
  assignedToIdenttifier?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      assignedToIdenttifier: 'assignedToIdenttifier',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignedToIdenttifier: 'string',
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

export class GetTestResultListResponseBodyTestResultCustomFields extends $dara.Model {
  fieldClassName?: string;
  fieldFormat?: string;
  fieldIdentifier?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      fieldClassName: 'fieldClassName',
      fieldFormat: 'fieldFormat',
      fieldIdentifier: 'fieldIdentifier',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldClassName: 'string',
      fieldFormat: 'string',
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

export class GetTestResultListResponseBodyTestResultTestResultExecutor extends $dara.Model {
  executorIdentifier?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      executorIdentifier: 'executorIdentifier',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executorIdentifier: 'string',
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

export class GetTestResultListResponseBodyTestResult extends $dara.Model {
  assignedTo?: GetTestResultListResponseBodyTestResultAssignedTo;
  /**
   * @example
   * 8
   */
  bugCount?: number;
  /**
   * @example
   * Req
   */
  categoryIdentifier?: string;
  customFields?: GetTestResultListResponseBodyTestResultCustomFields[];
  gmtCreate?: number;
  spaceIdentifier?: string;
  /**
   * @example
   * 测试工作项
   */
  subject?: string;
  testResultExecutor?: GetTestResultListResponseBodyTestResultTestResultExecutor;
  testResultGmtCreate?: number;
  /**
   * @example
   * a8bxxxxxxxxxxxxxxxx54
   */
  testResultIdentifier?: string;
  /**
   * @example
   * TO DO
   */
  testResultStatus?: string;
  testcaseIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      assignedTo: 'assignedTo',
      bugCount: 'bugCount',
      categoryIdentifier: 'categoryIdentifier',
      customFields: 'customFields',
      gmtCreate: 'gmtCreate',
      spaceIdentifier: 'spaceIdentifier',
      subject: 'subject',
      testResultExecutor: 'testResultExecutor',
      testResultGmtCreate: 'testResultGmtCreate',
      testResultIdentifier: 'testResultIdentifier',
      testResultStatus: 'testResultStatus',
      testcaseIdentifier: 'testcaseIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignedTo: GetTestResultListResponseBodyTestResultAssignedTo,
      bugCount: 'number',
      categoryIdentifier: 'string',
      customFields: { 'type': 'array', 'itemType': GetTestResultListResponseBodyTestResultCustomFields },
      gmtCreate: 'number',
      spaceIdentifier: 'string',
      subject: 'string',
      testResultExecutor: GetTestResultListResponseBodyTestResultTestResultExecutor,
      testResultGmtCreate: 'number',
      testResultIdentifier: 'string',
      testResultStatus: 'string',
      testcaseIdentifier: 'string',
    };
  }

  validate() {
    if(this.assignedTo && typeof (this.assignedTo as any).validate === 'function') {
      (this.assignedTo as any).validate();
    }
    if(Array.isArray(this.customFields)) {
      $dara.Model.validateArray(this.customFields);
    }
    if(this.testResultExecutor && typeof (this.testResultExecutor as any).validate === 'function') {
      (this.testResultExecutor as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTestResultListResponseBody extends $dara.Model {
  /**
   * @example
   * Openapi.RequestError
   */
  errorCode?: string;
  /**
   * @example
   * error
   */
  errorMsg?: string;
  /**
   * @example
   * ASSDS-ASSASX-XSAXSA-XSAXSAXS
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  testResult?: GetTestResultListResponseBodyTestResult[];
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      requestId: 'requestId',
      success: 'success',
      testResult: 'testResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
      testResult: { 'type': 'array', 'itemType': GetTestResultListResponseBodyTestResult },
    };
  }

  validate() {
    if(Array.isArray(this.testResult)) {
      $dara.Model.validateArray(this.testResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

