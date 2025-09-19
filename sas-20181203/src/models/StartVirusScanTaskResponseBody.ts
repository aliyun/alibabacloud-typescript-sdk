// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartVirusScanTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * DAE17926-4ABE-4DBD-9600-DDCB9B200F35
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the virus scan task.
   * 
   * @example
   * 282832
   */
  scanTaskId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scanTaskId: 'ScanTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scanTaskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

