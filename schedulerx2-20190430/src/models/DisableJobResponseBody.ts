// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The error message that is returned only if the corresponding error occurs.
   * 
   * @example
   * jobid: 92583 not match groupId: testSchedulerx.defaultGroup
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C8E5FB4A-6D8D-424D-9AAA-4FE06BB74FF9
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the job was disabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
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

