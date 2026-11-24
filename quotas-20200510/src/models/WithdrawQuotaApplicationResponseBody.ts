// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WithdrawQuotaApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the quota application.
   * 
   * @example
   * d314d6ae-867d-484c-9009-3d421a80****
   */
  applicationId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8FF8CAF0-29D9-4F11-B6A4-FD2CBCA016D3
   */
  requestId?: string;
  /**
   * @remarks
   * Specifies whether the call is successful. Valid values:
   * - true: The call is successful.
   * - false: The call fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      requestId: 'string',
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

