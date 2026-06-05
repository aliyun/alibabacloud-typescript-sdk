// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyComfyWorkflowResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 2024-05-07T02:27:06Z
   */
  creationTime?: string;
  description?: string;
  /**
   * @example
   * conn failed!
   */
  message?: string;
  name?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * 2024-05-07T02:27:06Z
   */
  updatedTime?: string;
  /**
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

