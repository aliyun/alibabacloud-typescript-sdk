// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAuditLogConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether audit logging is enabled. Valid values:
   * * **true**: Enabled.
   * * **false**: Disabled.
   * 
   * > You can call the [ModifyAuditLogConfig](https://help.aliyun.com/document_detail/473829.html) operation to enable or disable audit logging for the instance.
   * 
   * @example
   * true
   */
  dbAudit?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2BE6E619-A657-42E3-AD2D-18F8428A****
   */
  requestId?: string;
  /**
   * @remarks
   * The retention period of audit logs. Unit: days.
   * 
   * @example
   * 5
   */
  retention?: string;
  static names(): { [key: string]: string } {
    return {
      dbAudit: 'DbAudit',
      requestId: 'RequestId',
      retention: 'Retention',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbAudit: 'string',
      requestId: 'string',
      retention: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

