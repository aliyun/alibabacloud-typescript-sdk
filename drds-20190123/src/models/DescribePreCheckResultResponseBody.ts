// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePreCheckResultResponseBodyPreCheckResultSubCheckItems extends $dara.Model {
  /**
   * @remarks
   * Indicates the error code that is returned by a subtask.
   * 
   * @example
   * 1004
   */
  errorMsgCode?: string;
  /**
   * @remarks
   * Indicates an error message.
   */
  errorMsgParams?: string[];
  /**
   * @remarks
   * Indicates the name of the subtask.
   */
  preCheckItemName?: string;
  /**
   * @remarks
   * Indicates the state of the subtask.
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsgCode: 'ErrorMsgCode',
      errorMsgParams: 'ErrorMsgParams',
      preCheckItemName: 'PreCheckItemName',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsgCode: 'string',
      errorMsgParams: { 'type': 'array', 'itemType': 'string' },
      preCheckItemName: 'string',
      state: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.errorMsgParams)) {
      $dara.Model.validateArray(this.errorMsgParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePreCheckResultResponseBodyPreCheckResult extends $dara.Model {
  /**
   * @remarks
   * Indicates the name of the precheck task.
   */
  preCheckName?: string;
  /**
   * @remarks
   * Indicates the state of the precheck task.
   * 
   * @example
   * FAIL
   */
  state?: string;
  /**
   * @remarks
   * Indicates the details about the subtasks of the precheck task.
   */
  subCheckItems?: DescribePreCheckResultResponseBodyPreCheckResultSubCheckItems[];
  static names(): { [key: string]: string } {
    return {
      preCheckName: 'PreCheckName',
      state: 'State',
      subCheckItems: 'SubCheckItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preCheckName: 'string',
      state: 'string',
      subCheckItems: { 'type': 'array', 'itemType': DescribePreCheckResultResponseBodyPreCheckResultSubCheckItems },
    };
  }

  validate() {
    if(Array.isArray(this.subCheckItems)) {
      $dara.Model.validateArray(this.subCheckItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePreCheckResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates the result of the precheck task.
   */
  preCheckResult?: DescribePreCheckResultResponseBodyPreCheckResult;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EED1A59A-CFEA-5CF8-BB4A-090E75B3D05E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      preCheckResult: 'PreCheckResult',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preCheckResult: DescribePreCheckResultResponseBodyPreCheckResult,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.preCheckResult && typeof (this.preCheckResult as any).validate === 'function') {
      (this.preCheckResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

