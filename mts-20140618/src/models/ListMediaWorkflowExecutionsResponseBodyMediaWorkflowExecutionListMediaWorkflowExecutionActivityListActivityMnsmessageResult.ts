// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionActivityListActivityMNSMessageResult extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the job failed. If the job was successful, this parameter is not returned.
   * 
   * @example
   * The Topic/Queue config is empty, not send message
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the job failed. If the job was successful, this parameter is not returned.
   * 
   * @example
   * MessageConfigEmpty
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the success message. If the job failed, this parameter is not returned.
   * 
   * @example
   * 4f3bc83233de4e2f81c7dade443e****
   */
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      messageId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

