// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransferTicketTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * assignee@ccc-test
   */
  assignee?: string;
  comment?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * f780ade8-3ca9-458b-b067-63077946a570
   */
  taskId?: string;
  /**
   * @example
   * 5491d3b4-14ee-4341-b5f1-db2c78beddeb
   */
  ticketId?: string;
  static names(): { [key: string]: string } {
    return {
      assignee: 'Assignee',
      comment: 'Comment',
      instanceId: 'InstanceId',
      taskId: 'TaskId',
      ticketId: 'TicketId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignee: 'string',
      comment: 'string',
      instanceId: 'string',
      taskId: 'string',
      ticketId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

