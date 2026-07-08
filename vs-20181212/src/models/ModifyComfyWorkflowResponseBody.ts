// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyComfyWorkflowResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. This parameter is returned only if the request fails.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The creation time.
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
   * 这是一个图生视频的工作流
   */
  description?: string;
  /**
   * @remarks
   * The returned message. This parameter provides error details if the request fails.
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
   * 图生视频工作流示例
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
   * The update time.
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

