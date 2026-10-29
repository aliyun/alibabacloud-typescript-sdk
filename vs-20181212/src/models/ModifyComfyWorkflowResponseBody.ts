// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyComfyWorkflowResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. If the activity status is Fail, a specific error code is returned. If the activity status is Success, this parameter is not returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The creation time. The time is displayed in UTC and follows the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format.
   * 
   * @example
   * 2024-05-07T02:27:06Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The workflow description.
   * 
   * @example
   * This is an image-to-video workflow
   */
  description?: string;
  /**
   * @remarks
   * The message. If the status is Failed, this parameter contains the cause of the failure.
   * 
   * @example
   * conn failed!
   */
  message?: string;
  /**
   * @remarks
   * The workflow name.
   * 
   * @example
   * Image-to-video workflow example
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @remarks
   * The update time of the task. The time is displayed in UTC and follows the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format.
   * 
   * @example
   * 2024-05-07T02:27:06Z
   */
  updatedTime?: string;
  /**
   * @remarks
   * The workflow ID.
   * 
   * @example
   * wf_adb32aed-ccdc-42ae-b4d4-a21181ac8a5f
   */
  workflowId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      creationTime: 'CreationTime',
      description: 'Description',
      message: 'Message',
      name: 'Name',
      requestId: 'RequestId',
      updatedTime: 'UpdatedTime',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      creationTime: 'string',
      description: 'string',
      message: 'string',
      name: 'string',
      requestId: 'string',
      updatedTime: 'string',
      workflowId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

