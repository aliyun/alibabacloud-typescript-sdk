// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUpgradeableResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The reason for the upgrade failure.
   * 
   * @example
   * null
   */
  failReason?: string;
  /**
   * @remarks
   * The key of the upgrade reason.
   * 
   * @example
   * null
   */
  reasonKey?: string;
  /**
   * @remarks
   * Indicates whether the instance can be upgraded. Valid values:
   * - true: The instance can be upgraded.
   * - false: The instance cannot be upgraded because it is already running the latest version.
   * 
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

export class GetUpgradeableResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response data.
   */
  data?: GetUpgradeableResponseBodyData[];
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * null
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * B8E7613D-E09F-59D3-B35A-FBB7680DCE8F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. This parameter indicates whether an exception occurred during the request and is independent of the business logic.
   * 
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
      data: { 'type': 'array', 'itemType': GetUpgradeableResponseBodyData },
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

