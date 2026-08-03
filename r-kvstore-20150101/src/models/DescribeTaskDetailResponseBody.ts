// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTaskDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the task started. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * @example
   * 2026-05-12T07:18:57Z
   */
  beginTime?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 561AFBF1-BE20-44DB-9BD1-6988B53E****
   */
  requestId?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'string',
      requestId: 'string',
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

