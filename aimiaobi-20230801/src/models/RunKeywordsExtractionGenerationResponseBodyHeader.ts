// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunKeywordsExtractionGenerationResponseBodyHeader extends $dara.Model {
  /**
   * @example
   * AccessForbid
   */
  errorCode?: string;
  /**
   * @example
   * xx
   */
  errorMessage?: string;
  /**
   * @example
   * task-failed
   */
  event?: string;
  /**
   * @example
   * 1a3d7c9f-3a6d-4e49-b176-2d8721a27397
   */
  sessionId?: string;
  /**
   * @example
   * 8d55b429d7c6d321fcff54823e8d317b
   */
  taskId?: string;
  /**
   * @example
   * 210bc4e817219607963985396de8bd
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      event: 'Event',
      sessionId: 'SessionId',
      taskId: 'TaskId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      event: 'string',
      sessionId: 'string',
      taskId: 'string',
      traceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

