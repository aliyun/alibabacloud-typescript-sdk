// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckSqlAuditEnableStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FF13E47D-4E38-4A5A-BA68-32A554******
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the SQL audit feature. Valid values:
   * 
   * *   enabled: The SQL audit feature is enabled.
   * *   disabled: The SQL audit feature is disabled.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'string',
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

