// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddTicketTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The assignee for the signature.
   * 
   * This parameter is required.
   * 
   * @example
   * assignee@ccc-test
   */
  assignee?: string;
  /**
   * @remarks
   * Comments.
   * 
   * This parameter is required.
   * 
   * @example
   * 请assignee处理。
   */
  comment?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * The position to add the signature.
   * 
   * - Before: Before the current handler.
   * 
   * - After: After the current handler.
   * 
   * @example
   * After
   */
  position?: string;
  /**
   * @remarks
   * The ticket flow node ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 3b8c672f-48f6-45f5-bf41-9d4cb2b4a716
   */
  taskId?: string;
  /**
   * @remarks
   * The ticket ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 3d26b90a-c5d2-4b09-8219-********
   */
  ticketId?: string;
  static names(): { [key: string]: string } {
    return {
      assignee: 'Assignee',
      comment: 'Comment',
      instanceId: 'InstanceId',
      position: 'Position',
      taskId: 'TaskId',
      ticketId: 'TicketId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignee: 'string',
      comment: 'string',
      instanceId: 'string',
      position: 'string',
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

