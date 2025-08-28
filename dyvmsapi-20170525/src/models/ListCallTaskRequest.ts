// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCallTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the task template. Valid values:
   * 
   * *   **VMS_VOICE_TTS**: the text-to-speech (TTS) notification template.
   * *   **VMS_VOICE_CODE**: the voice notification template.
   * *   **VMS_TTS**: the voice verification code template.
   * 
   * @example
   * VMS_VOICE_CODE
   */
  bizType?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The task state. Valid values:
   * 
   * *   **INIT**: The task is in the initial state.
   * *   **RELEASE**: The task is being parsed.
   * *   **RUNNING**: The task is running.
   * *   **STOP**: The task is suspended.
   * *   **SYSTEM_STOP**: The task is suspended by the system.
   * *   **CANCEL**: The task is canceled.
   * *   **SYSTEM_CANCEL**: The task is canceled by the system.
   * *   **DONE**: The task is complete.
   * 
   * @example
   * DONE
   */
  status?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 151001****
   */
  taskId?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * Aliyun
   */
  taskName?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * Test Template
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
      taskId: 'TaskId',
      taskName: 'TaskName',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
      taskId: 'string',
      taskName: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

