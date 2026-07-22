// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutDisableFwSwitchResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether only a dry run was performed. If this parameter is true, the system performed pre-checks such as parameter validity, identity permissions, resource existence, quota limits, and dependency relationships without creating, updating, or deleting actual resources, triggering asynchronous traffic diversion tasks, or generating downstream side effects such as billing, notifications, or callbacks. If the dry run succeeded, DryRun=true is returned in the response, which can be distinguished from an actual call response. If the dry run failed, a machine-readable error code is returned (such as ErrorParamsInvalid for parameter errors, ErrorAuthentication for insufficient permissions, or ErrorInstanceOpenIpNumExceed for insufficient quota). A value of false (default) indicates that the request was initiated and the enable operation was performed.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B2841452-CB8D-4F7D-B247-38E1CF7334F8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
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

