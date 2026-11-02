// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D
   */
  requestId?: string;
  /**
   * @remarks
   * The failure message.
   * 
   * @example
   * error
   */
  taskMessage?: string;
  /**
   * @remarks
   * The task result. Valid values:
   * - success: The submission succeeded.
   * - processing: The submission is in progress.
   * - failed: The submission failed.
   * 
   * @example
   * success
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskMessage: 'TaskMessage',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskMessage: 'string',
      taskStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

