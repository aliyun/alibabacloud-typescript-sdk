// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserBaselineAuthorizationResponseBodyUserBaselineAuthorization extends $dara.Model {
  /**
   * @remarks
   * The authorization status of the cloud platform configuration check. Valid values:
   * - **0**: Authorization is disabled. If authorization is disabled, you cannot use the cloud platform configuration check feature.
   * - **1**: Authorization is enabled. If authorization is enabled, you can use the cloud platform configuration check feature.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserBaselineAuthorizationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0AF20EB0-EBBC-4B94-9B84-F3BAFAC53EDE
   */
  requestId?: string;
  /**
   * @remarks
   * The authorization information for cloud baseline configuration check.
   */
  userBaselineAuthorization?: DescribeUserBaselineAuthorizationResponseBodyUserBaselineAuthorization;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userBaselineAuthorization: 'UserBaselineAuthorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userBaselineAuthorization: DescribeUserBaselineAuthorizationResponseBodyUserBaselineAuthorization,
    };
  }

  validate() {
    if(this.userBaselineAuthorization && typeof (this.userBaselineAuthorization as any).validate === 'function') {
      (this.userBaselineAuthorization as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

