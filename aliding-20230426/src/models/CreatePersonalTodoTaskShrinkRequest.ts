// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePersonalTodoTaskShrinkRequest extends $dara.Model {
  /**
   * @example
   * 待办备注信息
   */
  description?: string;
  /**
   * @example
   * 1703750708595
   */
  dueTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [ "012345" ]
   */
  executorIdsShrink?: string;
  notifyConfigsShrink?: string;
  /**
   * @example
   * [ "012345" ]
   */
  participantIdsShrink?: string;
  /**
   * @example
   * 1703750708595
   */
  reminderTimeStamp?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 待办标题
   */
  subject?: string;
  tenantContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      dueTime: 'DueTime',
      executorIdsShrink: 'ExecutorIds',
      notifyConfigsShrink: 'NotifyConfigs',
      participantIdsShrink: 'ParticipantIds',
      reminderTimeStamp: 'ReminderTimeStamp',
      subject: 'Subject',
      tenantContextShrink: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      dueTime: 'number',
      executorIdsShrink: 'string',
      notifyConfigsShrink: 'string',
      participantIdsShrink: 'string',
      reminderTimeStamp: 'number',
      subject: 'string',
      tenantContextShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

