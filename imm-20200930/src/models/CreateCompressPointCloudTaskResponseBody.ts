// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCompressPointCloudTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * 0B7-1LR4Wcue1aBhk2xT85MfL*****
   */
  eventId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CA995EFD-083D-4F40-BE8A-BDF75FFF****
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * PointCloudCompress-badda57d-a3ab-4e6d-938f-49b77ce****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
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

