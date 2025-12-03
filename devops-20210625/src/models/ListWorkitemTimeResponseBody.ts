// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkitemTimeResponseBodyWorkitemTime extends $dara.Model {
  /**
   * @example
   * 1
   */
  actualTime?: number;
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
  /**
   * @example
   * 1967043931......
   */
  recordUser?: string;
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
      actualTime: 'actualTime',
      description: 'description',
      gmtCreate: 'gmtCreate',
      gmtEnd: 'gmtEnd',
      gmtModified: 'gmtModified',
      gmtStart: 'gmtStart',
      identifier: 'identifier',
      recordUser: 'recordUser',
      type: 'type',
      workitemIdentifier: 'workitemIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualTime: 'number',
      description: 'string',
      gmtCreate: 'number',
      gmtEnd: 'number',
      gmtModified: 'number',
      gmtStart: 'number',
      identifier: 'string',
      recordUser: 'string',
      type: 'string',
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

export class ListWorkitemTimeResponseBody extends $dara.Model {
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
  workitemTime?: ListWorkitemTimeResponseBodyWorkitemTime[];
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      requestId: 'requestId',
      success: 'success',
      workitemTime: 'workitemTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
      workitemTime: { 'type': 'array', 'itemType': ListWorkitemTimeResponseBodyWorkitemTime },
    };
  }

  validate() {
    if(Array.isArray(this.workitemTime)) {
      $dara.Model.validateArray(this.workitemTime);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

