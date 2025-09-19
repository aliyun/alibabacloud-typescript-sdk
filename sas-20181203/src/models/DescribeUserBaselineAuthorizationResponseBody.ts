// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserBaselineAuthorizationResponseBodyUserBaselineAuthorization extends $dara.Model {
  /**
   * @remarks
   * Indicates whether Security Center is authorized to run configuration checks on cloud services.
   * 
   * *   **0**: no. Security Center is not authorized to run configuration checks on cloud services.
   * *   **1**: yes. Security Center is authorized to run configuration checks on cloud services.
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
   * The ID of the request.
   * 
   * @example
   * 0AF20EB0-EBBC-4B94-9B84-F3BAFAC53EDE
   */
  requestId?: string;
  /**
   * @remarks
   * The information about whether Security Center is authorized to run configuration checks on cloud services.
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

