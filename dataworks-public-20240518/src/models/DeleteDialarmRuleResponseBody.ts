// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDIAlarmRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID. You can locate logs and troubleshoot issues based on the ID.
   * 
   * @example
   * C99E2BE6-9DEA-5C2E-8F51-1DDCFEADE490
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

