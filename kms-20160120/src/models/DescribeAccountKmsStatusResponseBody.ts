// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccountKmsStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status of KMS within your Alibaba cloud account. Valid values:
   * 
   * *   Enabled: KMS is enabled.
   * 
   * *   NotEnabled: KMS is disabled.
   * 
   * *   InDebt: Your account is overdue, and KMS stops providing services.
   * 
   * > If your Alibaba Cloud account is overdue, top up your account at the earliest opportunity to avoid impacts on your services.
   * 
   * *   Suspended: KMS is suspended.
   * 
   * @example
   * Enabled
   */
  accountStatus?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 3ac84333-d64d-4784-a8bc-997834a7ac6c
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accountStatus: 'AccountStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountStatus: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

