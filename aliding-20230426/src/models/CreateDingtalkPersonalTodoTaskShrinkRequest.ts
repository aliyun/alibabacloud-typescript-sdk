// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDingtalkPersonalTodoTaskShrinkRequest extends $dara.Model {
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 待办标题
   */
  subject?: string;
  tenantContextShrink?: string;
  /**
   * @example
   * 用户token
   */
  userToken?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      dueTime: 'DueTime',
      executorIdsShrink: 'ExecutorIds',
      notifyConfigsShrink: 'NotifyConfigs',
      participantIdsShrink: 'ParticipantIds',
      subject: 'Subject',
      tenantContextShrink: 'TenantContext',
      userToken: 'UserToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      dueTime: 'number',
      executorIdsShrink: 'string',
      notifyConfigsShrink: 'string',
      participantIdsShrink: 'string',
      subject: 'string',
      tenantContextShrink: 'string',
      userToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

