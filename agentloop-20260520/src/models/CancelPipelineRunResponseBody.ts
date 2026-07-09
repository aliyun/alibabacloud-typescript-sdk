// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelPipelineRunResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the cancellation was completed, in ISO 8601 UTC format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2026-01-01T00:00:05.000Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 9ACFB10A-1B2C-3D4E-5F6G-7H8I9J0K1L2M
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the canceled run.
   * 
   * @example
   * run-20260101-0001
   */
  runId?: string;
  /**
   * @remarks
   * The status of the run after cancellation. The value is fixed to Cancelled.
   * 
   * @example
   * Cancelled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      finishTime: 'finishTime',
      requestId: 'requestId',
      runId: 'runId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishTime: 'string',
      requestId: 'string',
      runId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

