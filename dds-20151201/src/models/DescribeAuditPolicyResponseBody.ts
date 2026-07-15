// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAuditPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status of the audit log.
   * 
   * - Enable: The audit log is enabled.
   * 
   * - Disabled: The audit log is disabled.
   * 
   * The default value is Disabled.
   * 
   * @example
   * Enable
   */
  logAuditStatus?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 111E7B16-0A87-4CBA-B271-F34AD61E099F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      logAuditStatus: 'LogAuditStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logAuditStatus: 'string',
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

