// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVideoLabelClassificationTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The event ID of the task. You can use this ID to query task information notifications in the [EventBridge](https://www.aliyun.com/product/aliware/eventbridge) service.
   * 
   * @example
   * 03F-1Qt1Yn5RZZ0Zh3ZdYlDblv7****
   */
  eventId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CA995EFD-083D-4F40-BE8A-BDF75FFFE0B6
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the task. You can use the [GetTask](https://help.aliyun.com/document_detail/478241.html) operation to view task information or the [GetVideoLabelClassificationResult](https://help.aliyun.com/document_detail/478224.html) operation to obtain the results of the video label detection task.
   * 
   * @example
   * VideoLabelClassification-2f157087-91df-4fda-8c3e-232407ec*****
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

