// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkitemEstimateResponseBodyWorkitemTimeEstimateRecordUser extends $dara.Model {
  /**
   * @example
   * 132xxxx123
   */
  identifier?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      identifier: 'identifier',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifier: 'string',
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

export class ListWorkitemEstimateResponseBodyWorkitemTimeEstimate extends $dara.Model {
  /**
   * @example
   * 开发代码等
   */
  description?: string;
  /**
   * @example
   * 1653235200000
   */
  gmtCreate?: number;
  /**
   * @example
   * 1653235200000
   */
  gmtEnd?: number;
  /**
   * @example
   * 1653235200000
   */
  gmtModified?: number;
  /**
   * @example
   * 1653235200000
   */
  gmtStart?: number;
  /**
   * @example
   * a4ac3a81e90217db32b7......
   */
  identifier?: string;
  recordUser?: ListWorkitemEstimateResponseBodyWorkitemTimeEstimateRecordUser;
  /**
   * @example
   * 8
   */
  spentTime?: number;
  /**
   * @example
   * 研发
   */
  type?: string;
  /**
   * @example
   * 5daa9a15c7fd55523996......
   */
  workitemIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      gmtCreate: 'gmtCreate',
      gmtEnd: 'gmtEnd',
      gmtModified: 'gmtModified',
      gmtStart: 'gmtStart',
      identifier: 'identifier',
      recordUser: 'recordUser',
      spentTime: 'spentTime',
      type: 'type',
      workitemIdentifier: 'workitemIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gmtCreate: 'number',
      gmtEnd: 'number',
      gmtModified: 'number',
      gmtStart: 'number',
      identifier: 'string',
      recordUser: ListWorkitemEstimateResponseBodyWorkitemTimeEstimateRecordUser,
      spentTime: 'number',
      type: 'string',
      workitemIdentifier: 'string',
    };
  }

  validate() {
    if(this.recordUser && typeof (this.recordUser as any).validate === 'function') {
      (this.recordUser as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkitemEstimateResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
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
  workitemTimeEstimate?: ListWorkitemEstimateResponseBodyWorkitemTimeEstimate[];
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      requestId: 'requestId',
      success: 'success',
      workitemTimeEstimate: 'workitemTimeEstimate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
      workitemTimeEstimate: { 'type': 'array', 'itemType': ListWorkitemEstimateResponseBodyWorkitemTimeEstimate },
    };
  }

  validate() {
    if(Array.isArray(this.workitemTimeEstimate)) {
      $dara.Model.validateArray(this.workitemTimeEstimate);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

