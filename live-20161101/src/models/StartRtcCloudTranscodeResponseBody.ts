// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartRtcCloudTranscodeResponseBody extends $dara.Model {
  /**
   * @example
   * ******3B-0E1A-586A-AC29-742247******
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

