// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHighDefinationMonitorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the Log Service project.
   * 
   * @example
   * my-project
   */
  logProject?: string;
  /**
   * @remarks
   * The name of the Logstore.
   * 
   * @example
   * my-log-store
   */
  logStore?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2F398FF5-B349-5C01-8638-8E9A0BF1DBE6
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      logProject: 'LogProject',
      logStore: 'LogStore',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logProject: 'string',
      logStore: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

