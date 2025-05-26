// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLocationDateClusteringTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * 25B-1W2ChgujA3Q8MbBY6mSp2mh****
   */
  eventId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B121940C-9794-4EE3-8D6E-F8EC525F****
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * LocationDateClustering-c10dce07-1de7-4da7-abee-1a3aba7****
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

