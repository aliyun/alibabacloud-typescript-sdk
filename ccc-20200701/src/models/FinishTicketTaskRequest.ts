// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FinishTicketTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
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
   * b52a34dc-f514-4600-9c39-3cf657167c97
   */
  taskId?: string;
  /**
   * @example
   * f2c6722b-cd13-442d-bf10-22a07c70d6d5
   */
  ticketId?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      instanceId: 'InstanceId',
      taskId: 'TaskId',
      ticketId: 'TicketId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

