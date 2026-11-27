// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMPUTaskStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 760bad53276431c499e30dc36f6b26be
   */
  requestId?: string;
  /**
   * @remarks
   * The status ID of the bypass transcoding task. Valid values:
   *  - **0**: Waiting for the channel to start.
   * > If the task is not started within 30 days, the task is automatically stopped.
   * 
   *  - **1**: The task is running.
   * 
   *  - **2**: The task is stopped.
   * 
   *  - **3**: The task is stopped by the user.
   * 
   *  - **4**: The channel is stopped.
   * 
   *  - **5**: Live streaming is stopped due to CDN network issues.
   * 
   *  - **6**: Live streaming is stopped due to live streaming URL issues.
   * 
   * @example
   * 0
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

