// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopRtcCloudRecordingResponseBody extends $dara.Model {
  /**
   * @example
   * ******58-5876-****-83CA-B56278******
   */
  requestId?: string;
  /**
   * @example
   * ******73-8501-****-8ac1-72295a******
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

