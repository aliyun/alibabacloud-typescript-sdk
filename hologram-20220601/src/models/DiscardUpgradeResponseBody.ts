// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DiscardUpgradeResponseBodyData extends $dara.Model {
  /**
   * @example
   * null
   */
  failReason?: string;
  /**
   * @example
   * null
   */
  reasonKey?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      failReason: 'FailReason',
      reasonKey: 'ReasonKey',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failReason: 'string',
      reasonKey: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiscardUpgradeResponseBody extends $dara.Model {
  data?: DiscardUpgradeResponseBodyData[];
  /**
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @example
   * null
   */
  errorMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * A47D57BE-59D1-51A6-9CC3-080C07852C4E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DiscardUpgradeResponseBodyData },
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

